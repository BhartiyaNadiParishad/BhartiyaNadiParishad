import React from "react";
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	Paper,
	Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MainLayout from "../component/Layout/mainLayout";
import img from "../assets/websitePic/internship.jpg";
import imgBG from "../assets/bg15.jpg";
import { useTranslation } from "react-i18next";
import NeedHelpForm from "./needHelpForm";

export default function NeedHelp() {
	const { t } = useTranslation();
	return (
		<>
			<MainLayout title={"Need Help"} bgImg={imgBG} position={"center"} >
				<Typography variant="h6" textAlign={"justify"} p={6} px={"10%"}>
					To make the efforts of river rejuvenation being done by
					social organizations and social workers in the country
					qualitative, effective and permanent, all types of technical
					support will be provided by the Bhartiya Nadi Parishad. Any
					organization and river lover from any part of the country
					can get solutions to all types of river related problems
					from the BNP. For this, under the simple procedure set by
					the BNP, the solution of the river related problem can be
					obtained by filling the information in the following form.
				</Typography>
				<Box bgcolor={"#f2f2f2"} p={6} display={"flex"} justifyContent={"center"}>
					<NeedHelpForm />
				</Box>
			</MainLayout>
		</>
	);
}
