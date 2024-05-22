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
import img from "../../assets/bg23.jpg";
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
				<Box padding={"5%"}>
					<Typography
						variant="h6"
						textAlign={"justify"}
						fontSize={"18px"}
					>
						Any student with good conduct can do internship with
						BNP. For this, the requirements set by BNP will have to
						be fulfilled. The student must also give a letter from
						his college/institute/university.
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
				</Box>
				<Box
					sx={{
						backgroundImage: `url(${img})`,
						backgroundSize: "cover",
						backgroundPosition: "center top",
					}}
				>
					<IForm service={"Intenship"} />
				</Box>
				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					rowGap={3}
					sx={{
						padding: "80px 10% 80px 10%",
					}}
				>
					<Typography
						gutterBottom
						textAlign={"center"}
						variant="h4"
						sx={{
							fontWeight: "bold",
							fontSize: "26px",
							color: "#264e79",
						}}
					>
						"जन्मजन्मार्जितं पापं स्वल्पं वा यदि वा बहु। <br />
						गंगा देवी प्रसादेन सर्वं मे यास्यति क्षयम्॥"
					</Typography>
					<Typography
						variant="h6"
						sx={{ fontSize: "18px" }}
						textAlign={"justify"}
					>
						Just as rivers do not drink their own water, trees do
						not eat their own fruit, and clouds do not consume the
						crops nourished by their rain, in the same way, the
						wealth of the virtuous is meant for benevolence. Clean
						and uninterrupted rivers are essential for rich
						biodiversity. Only in rich biodiversity can human
						society lead a healthy life. The remains and stories of
						the Indus Valley Civilization prove that India's
						prosperity grew along the banks of rivers.
					</Typography>
				</Box>
			</MainLayout>
		</>
	);
}
