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
	return (
		<>
			<MainLayout>
				<Box padding={"220px 10% 80px 10%"}>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						textAlign={"center"}
						mb={4}
					>
						Volunteer
					</Typography>
					<Grid container spacing={10}>
						<Grid item md={6} xs={12}>
							<Typography variant="h6" textAlign={"justify"} fontSize={"18px"}>
								Any river lover can contribute to the work of
								river revitalization by becoming a BNP
								volunteer. The person who wants to become a
								volunteer of BNP should have clean conduct. One
								can become a volunteer only through the
								selection process set by BNP. By becoming a
								volunteer of BNP you will get the following
								benefits.A letter and an identity card will be
								made available to the person/organization from
								the BNP Secretariat.
							</Typography>
							<List>
								{bnpDetails.map((text, index) => (
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
											fontSize="18px"
                                            textAlign={"justify"}
										>
											{text}
										</Typography>
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid item md={6} xs={12}>
							<Box>
								<img
									src={membership}
									alt="img3"
									width={"100%"}
									style={{ marginBottom: "32px" }}
								/>
							</Box>
						</Grid>
					</Grid>
					<IForm service={"Volunteer"}/>
				</Box>
			</MainLayout>
		</>
	);
}
