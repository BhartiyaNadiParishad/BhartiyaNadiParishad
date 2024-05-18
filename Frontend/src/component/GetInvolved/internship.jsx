import React from "react";
import { Box, Grid, List, ListItem, ListItemIcon, Paper, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MainLayout from "../Layout/mainLayout";
import membership from "../../assets/bg15.jpg";
import IForm from "./IForm";

const bnpInternDetails = [
    "The river kit of the BNP will be received. This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.",
    "The intern will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).",
    "The intern will be informed about all the activities of BNP from time to time.",
    "The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).",
    "The intern will be given topic and remuneration as per his interest and qualification.",
    "After completing the internship, the intern who performs his/her work properly will be given a certificate by BNP."
];

export default function Internship() {
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
						Internship
					</Typography>
					<Grid container spacing={10}>
						<Grid item md={6} xs={12}>
							<Typography
								variant="h6"
								textAlign={"justify"}
								fontSize={"18px"}
							>
								Any student with good conduct can do internship
								with BNP. For this, the requirements set by BNP
								will have to be fulfilled. The student must also
								give a letter from his
								college/institute/university.
							</Typography>
							<List>
								{bnpInternDetails.map((text, index) => (
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
					<IForm service={"Intenship"} />
				</Box>
			</MainLayout>
		</>
	);
}
