import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const VerticalScroll = ({
	itemHeight,
	loopCount,
	scrollIntervalTime,
	height,
	children,
	totalItems,
}) => {
	const [index, setIndex] = useState(0);
	const scrollRef = useRef(null);
	const intervalRef = useRef(null);

	useEffect(() => {
		const scrollInterval = () => {
			setIndex((prevIndex) => prevIndex + 1);
		};
		intervalRef.current = setInterval(scrollInterval, scrollIntervalTime);

		return () => clearInterval(intervalRef.current);
	}, [scrollIntervalTime]);

	useEffect(() => {
		if (scrollRef.current) {
			const currentScrollPosition = index * itemHeight;
			scrollRef.current.style.transition = "transform 1s ease";
			scrollRef.current.style.transform = `translateY(-${currentScrollPosition}px)`;

			if (index === totalItems * (loopCount - 1)) {
				setIndex(0);
				scrollRef.current.style.transition = "none";
				scrollRef.current.style.transform = `translateY(0)`;
				scrollRef.current.offsetHeight; // Trigger reflow
				scrollRef.current.style.transition = "transform 1s ease";
			}
		}
	}, [index, itemHeight, loopCount, totalItems]);

	const stopScroll = () => {
		clearInterval(intervalRef.current);
	};

	const restartScroll = () => {
		intervalRef.current = setInterval(() => {
			setIndex((prevIndex) => prevIndex + 1);
		}, scrollIntervalTime);
	};

	const repeatedChildren = Array.from(
		{ length: loopCount },
		(_, index) => index
	).map((_, loopIndex) =>
		React.Children.map(children, (child, childIndex) =>
			React.cloneElement(child, { key: `${childIndex}-${loopIndex}` })
		)
	);

	return (
		<Box
			sx={{
                width: "100%",
				height: { height },
				overflow: "hidden",
				position: "relative",
			}}
			onMouseEnter={stopScroll}
			onMouseLeave={restartScroll}
		>
			<Box
				ref={scrollRef}
                width={"100%"}
                height={"100%"}
				sx={{
					display: "flex",
					flexDirection: "column",
                    alignItems: "center",
					position: "absolute",
					top: 0,
				}}
			>
				{repeatedChildren}
			</Box>
		</Box>
	);
};

VerticalScroll.defaultProps = {
	itemHeight: 50,
	scrollIntervalTime: 3000,
	loopCount: 6,
	height: 400,
	totalItems: 4,
};

export default VerticalScroll;
