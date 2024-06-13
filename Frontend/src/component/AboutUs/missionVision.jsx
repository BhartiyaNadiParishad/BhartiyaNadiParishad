import React from "react";
import bgImg1 from "../../assets/bg/bgl-12.jpeg";
import bgImg2 from "../../assets/bg/bgl6.jpeg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";
import video from "../../assets/news.mp4";
import { useTranslation } from "react-i18next";

export default function MissionVision() {
	const { t } = useTranslation();
	return (
		<>
			<MainLayout
				title={t("MissionVisionValues.mainTitle")}
				bgImg={bgImg1}
				position={"center"}
			>
				<Box>
					<Grid container columnSpacing={4} p={5} bgcolor={"#f2f2f2"}>
						<Grid item xs={12} md={6}>
							<Paper elevation={1} sx={{ height: "100%" }}>
								<Box
									sx={{ backgroundColor: "#ffffffc2" }}
									padding={5}
									height={"100%"}
									borderRadius={2}
								>
									<Typography
										variant="h4"
										fontWeight={"bold"}
										gutterBottom
										textAlign={"center"}
										color={"#051a36"}
										mb={3}
									>
										{t("MissionVisionValues.title1")}
									</Typography>
									<Typography
										variant="h6"
										textAlign={"justify"}
										color={"#264e79"}
										fontSize={"18px"}
									>
										{t("MissionVisionValues.content1")}
									</Typography>
								</Box>
							</Paper>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper elevation={1} sx={{ height: "100%" }}>
								<Box
									sx={{ backgroundColor: "#ffffffc2" }}
									padding={5}
									borderRadius={2}
								>
									<Typography
										variant="h4"
										fontWeight={"bold"}
										gutterBottom
										textAlign={"center"}
										color={"#051a36"}
										mb={3}
									>
										{t("MissionVisionValues.title2")}
									</Typography>
									<Typography
										variant="h6"
										fontSize={"18px"}
										textAlign={"justify"}
										color={"#264e79"}
									>
										{t("MissionVisionValues.content2")}
									</Typography>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						backgroundImage: `url(${bgImg2})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					p={6}
				>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						textAlign={"center"}
						gutterBottom
						// color={"white"}
					>
						{t("MissionVisionValues.title3")}
					</Typography>
					<Typography variant="h6" mb={4} textAlign={"justify"}>
						{t("MissionVisionValues.content2")}
					</Typography>
					<Grid container spacing={6}>
						{t("MissionVisionValues.values", {
							returnObjects: true,
						}).map((item, index) => (
							<Grid item xs={12} md={4} key={index}>
								<Box
									height={350}
									p={4}
									bgcolor={"#ffffffb7"}
									sx={{
										border: "1px solid rgba(255,255,255,0.28)",
										boxShadow:
											"0 8px 32px 0 rgba(0,0,0,0.37)",
									}}
								>
									<Typography
										variant="h5"
										fontWeight={"bold"}
										gutterBottom
										textAlign={"center"}
										color={"#051a36"}
										mb={2}
									>
										{item.heading}
									</Typography>
									<Typography
										variant="h6"
										textAlign={"justify"}
										color={"#264e79"}
									>
										{item.description}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
					{/* </Paper> */}
				</Box>
			</MainLayout>
		</>
	);
}
