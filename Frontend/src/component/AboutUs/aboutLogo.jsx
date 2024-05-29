// src/pages/AboutLogo.js
import React from "react";
import MainLayout from "../Layout/mainLayout";
import img from "../../assets/bg/bgl6.jpeg";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import logo from "../../assets/logo.svg";

const data = [
	{
		primary: "Blue Stream",
		secondary:
			"This blue stream indicates a river originating from the mountains. This clearly gives the impression of a river.",
	},
	{
		primary: "Sadhu Taking Bath",
		secondary:
			"The sadhu bathing in the river and giving water to the sun is a symbol of the uninterrupted, cleanliness, purity, equality, and tolerance of the river. The sadhu offering water to the sun symbolizes peace, harmony, spiritual strength, and fairness of the river.",
	},
	{
		primary: "Birds",
		secondary:
			"The 6 birds flying in the sky represent the 6 directions of the entire universe and are an important part of the entire biodiversity.",
	},
	{
		primary: "Mountains",
		secondary:
			"While the mountains shown in it represent the Himalayas, they also symbolize the home of the river. It has been shown through mountains that mountains are very important for rivers because most of the big rivers flow throughout the year due to the melting of snow.",
	},
	{
		primary: "Sun",
		secondary:
			"The presence of Sun plays a helpful role in purifying the flow of the river. Sun rays are essential for the entire river system. The speed of the sun is necessary to maintain the purity of the river.",
	},
];

export default function AboutLogo() {
	return (
		<MainLayout title={"About logo"} bgImg={img}>
			<Box sx={{ padding: 4, backgroundColor: "#f2f2f2" }}>
				<Box display={"flex"} justifyContent={"center"} mb={2}>
					<img src={logo} alt="Logo" style={{height: "200px"}} />
				</Box>
				<Box display={"flex"} justifyContent={"center"}>
					<List sx={{ padding: "10px 10%" }}>
						{data.map((item, index) => (
							<ListItem
								key={index}
								sx={{
									padding: "24px",
									backgroundColor: "white",
									marginBottom: "24px",
									boxShadow:
											"0 4px 4px 0 rgba(0,0,0,0.2)",
								}}
							>
								<ListItemText
									primary={
										<Typography
											variant="h5"
											fontWeight={"Bold"}
											color="#264e79"
											mb={2}
										>
											{item.primary}:
										</Typography>
									}
									secondary={
										<Typography
											variant="h6"
											color="#264e79"
										>
											{item.secondary}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>
			</Box>
		</MainLayout>
	);
}
