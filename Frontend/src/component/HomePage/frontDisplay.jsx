import { Box, Button, Fab, Typography } from "@mui/material";
import React from "react";
import video from "../../assets/bg6.mp4";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ButtonStyle = {
	position: "absolute",
	bottom: 70,
	backgroundColor: "#1cabe2",
	borderRadius: 0,
	padding: "16px",
	color: "#fff",
	fontWeight: "bold",
	width: 150,
	"&:hover": {
		backgroundColor: "#0682b2",
	},
};

export default function FrontDisplay() {
	const { t } = useTranslation();
	return (
		<Box
			px={4}
      		position={"relative"}
			style={{
  		  display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "95vh",
				top: "0",
				left: "0",
				overflow: "hidden",
			}}
		>
			<Button
				component={Link}
				to="/getInvolvedMenu"
				sx={{ ...ButtonStyle, left: 70 }}
			>
				{t('button1')}
			</Button>
			<Button
				component={Link}
				to="/need-help"
				sx={{ ...ButtonStyle, right: 70 }}
			>
				{t('button2')}
			</Button>
			
			<video
				autoPlay
				loop
				muted
				style={{
					position: "absolute",
					width: "100%",
					height: "95vh",
					overflow: "hidden",
					objectFit: "cover", // Similar to background-size: cover
					zIndex: "-1", // Ensure the video is behind the content
				}}
			>
				<source src={video} type="video/mp4" />
			</video>
			<div style={{ paddingTop: "120px" }}>
				<Typography
					mb={1}
					variant="h4"
					style={{
						fontWeight: "bold",
						color: "#f5ff00",
						textAlign: "center",
					}}
				>
					{t("hero-section")}
				</Typography>
			</div>
		</Box>
	);
}
