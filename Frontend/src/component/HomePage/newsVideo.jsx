import { Box } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function NewsVideo({ video }) {
	const [isPlaying, setIsPlaying] = useState(false); // start paused by default

	const handleMouseLeave = () => {
		setIsPlaying(false);
	};

	return (
		<Box width={"100%"}>
			<Box
				p={2}
				border={"0.5px solid white"}
				borderRadius={"10px"}
				boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
				mb={2}
				onMouseLeave={handleMouseLeave}
				height={"300px"}
			>
				<ReactPlayer
					width={"100%"}
					height={"100%"}
					url={video}
					controls={true}
					playing={isPlaying}
					onPlay={() => setIsPlaying(true)}
				/>
			</Box>
		</Box>
	);
}
