import React from "react";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import img from "../../assets/bg15.jpg";
import BG from "../../assets/bg25.jpg";
import volunteerImg from "../../assets/websitePic/volunteer.jpg";
import internshipImg from "../../assets/websitePic/internship.jpg";
import membershipImg from "../../assets/websitePic/membership.jpg";
import CustomCard from "./customCard";
import MainLayout from "../Layout/mainLayout";
import { useTranslation } from "react-i18next";

export default function GetInvolvedPage() {
	const { t } = useTranslation();
	return (
		<MainLayout
			title={t("getInvolvedPage.title")}
			bgImg={BG}
			position={"center"}
		>
			<Grid
				container
				spacing={5}
				paddingX={"5%"}
				pb={5}
				sx={{ backgroundColor: "#f2f2f2" }}
			>
				<Grid item xs={12}>
					<Typography
						mb={"20px"}
						variant="h6"
						textAlign={"justify"}
						color={"#264e79"}
					>
						{t("getInvolvedPage.content")}
					</Typography>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomCard
						image={membershipImg}
						title={t("getInvolvedPage.membership.title")}
						content={t("getInvolvedPage.membership.content")}
						link={"/membership"}
						button={t("getInvolvedPage.membership.button")}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomCard
						image={volunteerImg}
						title={t("getInvolvedPage.Volunteer.title")}
						content={t("getInvolvedPage.Volunteer.content")}
						link={"/volunteer"}
						button={t("getInvolvedPage.Volunteer.button")}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomCard
						image={internshipImg}
						title={t("getInvolvedPage.internship.title")}
						content={t("getInvolvedPage.internship.content")}
						link={"/internship"}
						button={t("getInvolvedPage.internship.button")}
					/>
				</Grid>
			</Grid>
		</MainLayout>
	);
}
