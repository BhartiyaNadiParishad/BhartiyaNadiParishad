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
import MainLayout from "../Layout/mainLayout";
import membership from "../../assets/bg15.jpg";
import IForm from "./IForm";
import img from "../../assets/websitePic/internship.jpg";
import imgBG from "../../assets/bg15.jpg";

const bnpInternDetails = [
	"The river kit of the BNP will be received. This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.",
	"The intern will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).",
	"The intern will be informed about all the activities of BNP from time to time.",
	"The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).",
	"The intern will be given topic and remuneration as per his interest and qualification.",
	"After completing the internship, the intern who performs his/her work properly will be given a certificate by BNP.",
];

export default function Internship() {
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
							Internship
						</Typography>
					</Box>
				</Box>
				<Grid container spacing={3} padding={8} color="#264e79">
					<Grid item xs={12}>
						<Typography variant="h5" textAlign={"justify"}>
							Any student with good conduct can do internship with
							BNP. For this, the requirements set by BNP will have
							to be fulfilled. The student must also give a letter
							from his college/institute/university.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box>
							<List>
								{bnpInternDetails.map((text, index) => (
									<ListItem key={index}>
										<ListItemIcon>
											<CircleIcon
												sx={{
													fontSize: "10px",
													color: "#264e79",
												}}
											/>
										</ListItemIcon>
										<Typography
											variant="h6"
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
						<Box
							p={2}
							border={"0.5px solid white"}
							borderRadius={"10px"}
							boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
							height={"95%"}
						>
							<img
								src={img}
								style={{ height: "100%", width: "100%", objectFit: "cover" }}
							/>
						</Box>
					</Grid>
				</Grid>

				<Box bgcolor={"#f2f2f2"} py={6}>
					<IForm service={"Intenship"} />
				</Box>
			</MainLayout>
		</>
	);
}
