import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function CustomCard(props) {
	return (
		<Box
			sx={{ backgroundColor: "white" }}
			border={"1px solid white"}
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
		>
			<img
				src={props.image}
				style={{
					width: "100%",
					height: "300px",
					objectFit: "cover",
				}}
			/>
			<CardContent
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					flexDirection: "column",
					padding: "20px",
					rowGap: "16px",
				}}
			>
				<Typography
					variant="h5"
					fontSize={"28px"}
					textAlign={"center"}
					fontWeight={"bold"}
					color={"#1cabe2"}
				>
					{props.title}
				</Typography>
				<Typography
					variant="h6"
					fontSize={"18px"}
					color="#264e79"
					textAlign={"justify"}
				>
					{props.content}
				</Typography>
			</CardContent>
			<Box width={"50%"} mb={3}>
				<Link to={props.link}>
					<Button
						size="large"
						variant="contained"
						sx={{
							backgroundColor:"#1cabe2",
							width: "100%",
							maxWidth: "none",
							margin: "auto",
						}}
					>
						{props.button}
					</Button>
				</Link>
			</Box>
		</Box>
	);
}
