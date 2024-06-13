// src/pages/AboutLogo.js
import React from "react";
import MainLayout from "../Layout/mainLayout";
import img from "../../assets/bg/bgl6.jpeg";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";



export default function AboutLogo() {

	const {t} = useTranslation();
	return (
		<MainLayout title={t('logo.title')} bgImg={img}>
			<Box sx={{ padding: 4, backgroundColor: "#f2f2f2" }}>
				<Box display={"flex"} justifyContent={"center"} mb={2}>
					<img src={logo} alt="Logo" style={{height: "150px"}} />
				</Box>
				<Box display={"flex"} justifyContent={"center"}>
					<List sx={{ padding: "10px 10%" }}>
						{t('logo.content', { returnObjects: "true"}).map((item, index) => (
							<ListItem
								key={index}
								sx={{
									padding: "24px",
									backgroundColor: "white",
									marginBottom: "24px",
									boxShadow:
											"0 4px 4px 0 rgba(0,0,0,0.1)",
									border: "1px solid white"
								}}
							>
								<ListItemText
									primary={
										<Typography
											variant="h6"
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
