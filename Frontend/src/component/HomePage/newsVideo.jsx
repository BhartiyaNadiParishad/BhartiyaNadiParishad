import { Box } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function NewsVideo({ video}) {
	const [isPlaying, setIsPlaying] = useState(false); // start paused by default

	const handleMouseLeave = () => {
		setIsPlaying(false);
	};

	return (
		<>
			<Box
				p={2}
				border={"0.5px solid white"}
				borderRadius={"10px"}
				boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
				mb={2}
				onMouseLeave={handleMouseLeave}
                width={"100%"}
                height={300}
			>
				<ReactPlayer
                    width={"100%"}
                    height={250}
					url={video}
					controls={true}
					playing={isPlaying}
					onPlay={() => setIsPlaying(true)}
				/>
			</Box>
		</>
	);
}
