import React from "react";
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	Paper,
	Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Grid from "@mui/material/Grid";
import MainLayout from "../Layout/mainLayout";
import membership from "../../assets/bg15.jpg";
import IForm from "./IForm";
import img from "../../assets/bg23.jpg";
import imgBG from "../../assets/bg15.jpg";
import { useTranslation } from "react-i18next";

const bnpDetails = [
	"The river kit of the BNP will be received. This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.",
	"The person who becomes a volunteer will be known as River Warrior. The word River Warrior will be added to his name.",
	"The volunteer will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).",
	"The member will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).",
	"The volunteer will be informed about all the activities of BNP from time to time.",
	"The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).",
	"Volunteers working with BNP will be given a certificate by BNP every year.",
];

export default function Volunteer() {
	const { t } = useTranslation();
	return (
		<>
			<MainLayout>
				<Box
					sx={{
						backgroundImage: `url(${imgBG})`,
						backgroundSize: "cover",
						backgroundPosition: "center ",
					}}
				>
					<Box bgcolor={"#00000059"} padding={"18% 40px 10% 40px"}>
						<Typography
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
							color={"white"}
						>
							{t("volunteer.title")}
						</Typography>
					</Box>
				</Box>
				<Box padding={"5%"} color="#264e79">
					<Typography 
						variant="h6" 
						fontSize={"20px"}
						textAlign={"justify"}>
						{t("volunteer.eligibility")}
					</Typography>
					<List>
						{t("volunteer.benefits", {
							returnObjects: true,
						}).map((text, index) => (
							<ListItem key={index}>
								<ListItemIcon>
									<CircleIcon
										sx={{
											fontSize: "10px",
											color: "black",
										}}
									/>
								</ListItemIcon>
								<Typography
									variant="h6"
									fontSize={"18px"}
									textAlign={"justify"}
								>
									{text}
								</Typography>
							</ListItem>
						))}
					</List>
				</Box>
				<Box bgcolor={"#f2f2f2"} py={6} display={"flex"} justifyContent={"center"}>
					<Box width={{ xs: "100%", md: "60%" }} >
						<IForm service={"Volunteer"} />
					</Box>
				</Box>
			</MainLayout>
		</>
	);
}
