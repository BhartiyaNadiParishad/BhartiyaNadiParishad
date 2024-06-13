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
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MainLayout from "../Layout/mainLayout";
import membership from "../../assets/bg15.jpg";
import IForm from "./IForm";
import img from "../../assets/bg23.jpg";
import imgBG from "../../assets/bg15.jpg";
import { useTranslation } from "react-i18next";

export default function Membership() {
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
							{t("becomeMember.title")}
						</Typography>
					</Box>
				</Box>
				<Box padding={"5%"} color="#264e79">
					<Typography
						variant="h6"
						textAlign={"justify"}
						fontSize={"18px"}
					>
						{t("becomeMember.eligibility")}
					</Typography>
					<Typography
						variant="h6"
						textAlign={"justify"}
						fontSize={"18px"}
					>
						{t("becomeMember.process")}
					</Typography>
					<List>
						{t("becomeMember.benefits", {
							returnObjects: "true",
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
					<Typography gutterBottom variant="h6" fontWeight={"bold"}>
						{t("becomeMember.requirements.title")}
					</Typography>
					<Typography
						variant="body1"
						fontSize={"18px"}
						mb={2}
						textAlign={"justify"}
					>
						{t("becomeMember.requirements.description")}
					</Typography>
					<Typography variant="h6" fontWeight={"bold"} gutterBottom>
						{t("becomeMember.bank_details.title")}
					</Typography>

					<Typography variant="body1" fontSize={"18px"}>
						{t("becomeMember.bank_details.account_name")}
					</Typography>
					<Typography variant="body1" fontSize={"18px"}>
						{t("becomeMember.bank_details.account_number")}
					</Typography>
					<Typography variant="body1" fontSize={"18px"}>
						{t("becomeMember.bank_details.ifsc_code")}
					</Typography>
					<Typography variant="body1" fontSize={"18px"}>
						{t("becomeMember.bank_details.bank_name")}
					</Typography>
					<Typography variant="body1" fontSize={"18px"}>
						{t("becomeMember.bank_details.branch")}
					</Typography>
				</Box>
				<Box bgcolor={"#f2f2f2"} py={6}>
					<IForm service={"Membership"} />
				</Box>
			</MainLayout>
		</>
	);
}
