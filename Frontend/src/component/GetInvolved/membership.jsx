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

const bnpDetails = [
	"A letter and an identity card will be made available to the person/organization from the BNP Secretariat.",
	"The river kit of the BNP will be received. This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.",
	"The river on which the person who is working on a member will be made a River Warrior that is, the person working on the River Warrior will be named the Hindon River Warrior. A person or organization can also become a Warrior of more than one river.",
	"The member will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).",
	"The member will be informed about all the activities of BNP from time to time.",
	"The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).",
];

export default function Membership() {
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
						Membership
					</Typography>
					<Grid container spacing={10}>
						<Grid item xs={12} md={6}>
							<Box>
								<Typography
									variant="h6"
									textAlign={"justify"}
									fontSize={"18px"}
								>
									Any Indian Civil/Social
									Organization/University/Research
									Institute/Company, a member of the BNP, can
									be contributed in any way, a river lover and
									its conduct is clean. Such dignitaries or
									organizations can also become a member of
									the BNP who want to make some positive
									efforts/cooperation for the river/rivers in
									the country in collaboration with the BNP. A
									member of the BNP can be made only under a
									selected process fixed. Members of the BNP
									will get the following benefits.
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
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box>
								<img
									src={membership}
									alt="img3"
									width={"100%"}
                                    style={{marginBottom: "32px"}}
								/>
                                <Box>
                                <Typography
									gutterBottom
									variant="h5"
									fontWeight={"bold"}
								>
									Requirements to become members -
								</Typography>
								<Typography
									variant="h6"
									fontSize={"18px"}
									mb={2}
									textAlign={"justify"}
								>
									To become a member of the BNP, a form will
									have to be filled and the annual 5000 Indian
									rupees will have to be deposited in the
									account of the BNP. This fee will be for
									lifetime membership.
								</Typography>
								<Typography variant="h6" fontWeight={"bold"} gutterBottom>
									Bank Details
								</Typography>
								<Typography variant="h6" fontSize={"18px"}>
									Bhartiya Nadi Parishad
								</Typography>
								<Typography variant="h6" fontSize={"18px"}>
									A/C -{" "}
								</Typography>
								<Typography variant="h6" fontSize={"18px"}>
									IFSC -{" "}
								</Typography>
								<Typography variant="h6" fontSize={"18px"}>
									Indian Bank
								</Typography>
								<Typography variant="h6" fontSize={"18px"}>
									CCSU Campus, Meerut (UP)
								</Typography>
                                </Box>
								
							</Box>
						</Grid>
					</Grid>
					<IForm service={"Membership"} />
				</Box>
			</MainLayout>
		</>
	);
}
