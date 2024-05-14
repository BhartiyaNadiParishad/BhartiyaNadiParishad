import React, { useState } from "react";
import img from "../assets/interior.jpg";
import { Box, Button, Grid, styled } from "@mui/material";
import video from '../assets/news.mp4'

const imageUrls = [
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
	img,
];

export default function Gallery() {
	const [isMinimized, setIsMinimized] = useState(false);
	const [buttonNumber, setbuttonNumber] = useState(1);
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const toggleMinimize = () => {
		setIsMinimized(!isMinimized);
	};
	const setbuttonNumberFunction = (data) => {
		setbuttonNumber(data);
	};
	const toggleImageSize = (index) => {
		setExpandedIndex(index === expandedIndex ? -1 : index);
	};

	const CustomButton = styled("Button")(() => ({
		color: "white",
		textTransform: "none",
		transition: "width 0.5s ease-in-out , height 0.5s ease-in-out ",
		borderRadius: "20px",
		width: `${isMinimized ? "50px" : "auto"}`,
		padding: `${isMinimized ? "2px 5px" : "5px 15px"}`,
		fontSize: `${isMinimized ? "12px" : "auto"}`,
		"&:hover": {
			background:
				"linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
			backdropFilter: "blur(10px)",
		},
		"&.active": {
			background:
				"linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
			backdropFilter: "blur(10px)",
		},
	}));

	return (
		<Box
			sx={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: " bottom",
			}}
			width={"100vw"}
			height={"100vh"}
			pt={8}
			onClick={isMinimized ? "" : toggleMinimize}
		>
			<Box
				sx={{
					background:
						"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
					backdropFilter: "blur(10px)",
					border: "1px solid rgba(255,255,255,0.28)",
					borderRadius: "25px",
					boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
					margin: "auto",
					position: "relative",
					width: `${isMinimized ? "35vw" : "65vw"}`,
					height: `${isMinimized ? "45vh" : "81vh"}`,
					transition:
						"width 1s ease-in-out, height 1s ease-in-out, transform 0.5s",
					transform: `${
						isMinimized ? "translate(270px, 200px)" : ""
					}`,
				}}
				onClick={(e) => {
					if (isMinimized) {
						toggleMinimize();
					}
					e.stopPropagation();
				}}
				padding={4}
			>
				{buttonNumber === 1 && (
					<Box
						// display={"flex"}
						// flexDirection={"row"}
						// flexWrap={"wrap"}
						// justifyContent={"space-between"}
						// rowGap={"25px"}
						display={"grid"}
						gridAutoFlow={"column"}
						gridAutoColumns={"23%"}
						gap={"20px"}
						sx={{
							maxHeight: "100%",
							overflow: "scroll",
							overscrollBehaviorInline: "contain",
							"&::-webkit-scrollbar": {
								width: "5px",
								height: "5px",
							},
							"&::-webkit-scrollbar-thumb": {
								backgroundColor: "rgba(0, 0, 0, 0.25)",
							},
						}}
					>
						{imageUrls.map((url, index) => (
							<Box
								key={index}
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								rowGap={"20px"}
							>
								{/* <img
									key={index}
									src={url}
									alt={`Image ${index}`}
									style={{
										borderRadius: "10px",
										cursor: "pointer", // Change cursor to pointer on hover
										transition: "width 0.5s ease-in-out", // Smooth transition
										border: "1px solid rgba(255,255,255,0.28)",
									}}
								/> */}
								<video controls>
									<source src={video} type="video/mp4" />
								</video>
								<img
									key={index}
									src={url}
									alt={`Image ${index}`}
									style={{
										cursor: "pointer", // Change cursor to pointer on hover
										transition: "width 0.5s ease-in-out", // Smooth transition
										border: "1px solid rgba(255,255,255,0.28)",
										borderRadius: "10px",
									}}
								/>
								<img
									key={index}
									src={url}
									alt={`Image ${index}`}
									style={{
										cursor: "pointer", // Change cursor to pointer on hover
										transition: "width 0.5s ease-in-out", // Smooth transition
										border: "1px solid rgba(255,255,255,0.28)",
										borderRadius: "10px",
									}}
								/>
							</Box>
						))}
					</Box>
				)}
				<Box
					p={1}
					border={"1px solid black"}
					sx={{
						position: "absolute",
						bottom: "-25px", // Half height
						left: "50%",
						transform: "translateX(-50%)",
						background:
							"linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
						backdropFilter: "blur(5px)",
						border: "1px solid rgba(255,255,255,0.28)",
						borderRadius: "25px",
						boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
						display: "flex",
						flexWrap: "wrap",
						columnGap: "5px",
					}}
				>
					<CustomButton
						onClick={() => setbuttonNumberFunction(1)}
						className={buttonNumber === 1 ? "active" : ""}
					>
						Years
					</CustomButton>
					<CustomButton
						onClick={() => setbuttonNumberFunction(2)}
						className={buttonNumber === 2 ? "active" : ""}
					>
						Months
					</CustomButton>
					<CustomButton
						onClick={() => setbuttonNumberFunction(3)}
						className={buttonNumber === 3 ? "active" : ""}
					>
						Days
					</CustomButton>
					<CustomButton
						onClick={() => setbuttonNumberFunction(4)}
						className={buttonNumber === 4 ? "active" : ""}
					>
						All
					</CustomButton>
				</Box>
			</Box>
		</Box>
	);
}
