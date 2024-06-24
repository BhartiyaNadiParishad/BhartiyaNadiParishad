import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bg/bgl6.jpeg";
import { useTranslation } from "react-i18next";



export default function RiverBasinMap() {
	const {t} = useTranslation();
	

	return (
		<MainLayout title={"River Basin Map"} bgImg={bg}>
			<Typography p={5} >
                Under Mantainence
            </Typography>
		</MainLayout>
	);
}
