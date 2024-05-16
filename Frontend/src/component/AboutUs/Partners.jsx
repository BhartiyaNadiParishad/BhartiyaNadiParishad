import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Box, Grid, Typography } from "@mui/material";

import partner1 from "../../assets/partners/1.png";
import partner2 from "../../assets/partners/2.png";
import partner3 from "../../assets/partners/3.png";
import partner4 from "../../assets/partners/4.png";
import partner5 from "../../assets/partners/5.png";
import partner6 from "../../assets/partners/6.png";
import partner7 from "../../assets/partners/7.png";
import partner8 from "../../assets/partners/8.png";
import partner9 from "../../assets/partners/9.png";
import partner10 from "../../assets/partners/10.png";
import partner11 from "../../assets/partners/11.png";
import partner12 from "../../assets/partners/12.png";
import partner13 from "../../assets/partners/13.png";
import partner14 from "../../assets/partners/14.png";
import partner15 from "../../assets/partners/15.png";
import partner16 from "../../assets/partners/16.png";
import partner17 from "../../assets/partners/17.png";
import partner18 from "../../assets/partners/18.png";
import partner19 from "../../assets/partners/19.png";
import partner20 from "../../assets/partners/20.png";
import partner21 from "../../assets/partners/21.png";

import supporter1 from "../../assets/supporter/1.png";
import supporter2 from "../../assets/supporter/2.png";
import supporter3 from "../../assets/supporter/3.png";

const partners = [
	{ image: partner1 },
	{ image: partner2 },
	{ image: partner3 },
	{ image: partner4 },
	{ image: partner5 },
	{ image: partner6 },
	{ image: partner7 },
	{ image: partner8 },
	{ image: partner9 },
	{ image: partner10 },
	{ image: partner11 },
	{ image: partner12 },
	{ image: partner13 },
	{ image: partner14 },
	{ image: partner15 },
	{ image: partner16 },
	{ image: partner17 },
	{ image: partner18 },
	{ image: partner19 },
	{ image: partner20 },
];
const supporters = [
	{ image: supporter1 },
	{ image: supporter2 },
	{ image: supporter3 },
];

export default function Partners() {
	return (
		<>
			<MainLayout>
				<Box padding={4} paddingTop={"220px"}>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						textAlign={"center"}
						mb={4}
						color="#264e79"
					>
						Partners
					</Typography>
					<Box
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						flexWrap={"wrap"}
						gap={3}
					>
						{partners.map((item, index) => (
							<Box
								padding={2}
								height={{ xs: "100px", md: "200px" }}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								width={{ xs: "100px", md: "200px" }}
								boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
								borderRadius="4px"
							>
								<img
									src={item.image}
									style={{ maxHeight: "100%" }}
								/>
							</Box>
						))}
					</Box>
				</Box>
				<Box sx={{ backgroundColor: "#264e79" }} padding={4}>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						textAlign={"center"}
						color="white"
						mb={2}
					>
						Supporters
					</Typography>
					<Box
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						flexWrap={"wrap"}
						gap={"30px"}
					>
						{supporters.map((item, index) => (
							<Box
								boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
								padding={2}
								height={{ xs: "100px", md: "200px" }}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								width={{ xs: "150px", md: "250px" }}
								backgroundColor="white"
							>
								<img src={item.image} style={{ maxHeight: "100%" }}/>
							</Box>
						))}
					</Box>
				</Box>
				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					rowGap={3}
					sx={{
						padding: "80px 10% 80px 10%",
                        color: "#264e79"
					}}
				>
					<Typography
						gutterBottom
						textAlign={"center"}
						variant="h4"
						sx={{ fontWeight: "bold", fontSize: "26px" }}
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
