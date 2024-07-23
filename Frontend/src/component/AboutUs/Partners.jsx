import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Box, Typography } from "@mui/material";
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
import partner21 from "../../assets/partners/27.png";
import partner22 from "../../assets/partners/24.jpg";
import partner23 from "../../assets/partners/26.jpg";

import supporter1 from "../../assets/supporter/1.png";
import supporter2 from "../../assets/supporter/2.png";
import supporter3 from "../../assets/supporter/3.jpg";
import img from "../../assets/bg/bgl7.jpeg";

import knowledgePartner1 from "../../assets/partners/Knowledge Partner/Knowledge Partner 1.png";
import knowledgePartner2 from "../../assets/partners/Knowledge Partner/Knowledge Partner 2.png";
import knowledgePartner5 from "../../assets/partners/Knowledge Partner/Knowledge Partner 5.jpg";
import knowledgePartner7 from "../../assets/partners/Knowledge Partner/Knowledge Partner 7.jpg";
import knowledgePartner8 from "../../assets/partners/Knowledge Partner/Knowledge Partner 8.png";

import SpiritualPartner1 from "../../assets/partners/Spritual Partner/1.png";

const partners = [
	{ image: partner3 },
	{ image: partner17 },
	//water digest
	//indian waer partnership
	{ image: partner4 },
	{ image: partner13 },
	{ image: partner1 },
	{ image: partner5 },
	{ image: partner10 },
	{ image: partner9 },
	{ image: partner7 },
	//narmada samgra
	{ image: partner21 },
	{ image: partner11 },
	{ image: partner12 },
	{ image: partner2 },
	{ image: partner18 },
	{ image: partner22 },
	//sarkatitell
	{ image: partner23 },
];

const supporters = [
	{ image: supporter1 },
	{ image: supporter2 },
	{ image: supporter3 },
	//Ministry of Jal Shakti	GoI	New Delhi
];

const knowledgePartner = [
	{ image: knowledgePartner1 },
	{ image: knowledgePartner2 },
	// 3.		Ramanujan Faculty IIT Delhi
	// 4.		Vidhya Bhawan Polytechnic
	{ image: knowledgePartner5 },
	// 6.		Survey of India	DG	Dehradun
	{ image: knowledgePartner7 },
	{ image: knowledgePartner8 },
	// 9.		UP SMCG	Shri Anuraj Srivastava
	// 10.		National Water Development Agency
];

const SpiritualPartner = [
	{ image: SpiritualPartner1 },
	// 2.		Bhramkumarees	Dadi Ratan Mohini
	// 3.		Shantikunj 	Dr Chinmay Pandya
	// 4.		Anand Prakash Yoga Ashram
];

// Reusable component for displaying partners
const PartnerSection = ({ title, partners, width }) => (
	<Box>
		<Typography
			variant="h4"
			fontWeight="bold"
			textAlign="center"
			color="#1cabe2"
			py={4}
		>
			{title}
		</Typography>
		<Box
			sx={{
				padding: "40px 30px",
				backgroundColor: "#f2f2f2",
				boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
				border: "1px solid white"
			}}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexWrap="wrap"
			gap="30px"
		>
			{partners.map((item, index) => (
				<Box
					padding={2}
					height={{ xs: "100px", md: "200px" }}
					display="flex"
					justifyContent="center"
					alignItems="center"
					width={width ? width : { xs: "100px", md: "300px" }}
					boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
					key={index}
					backgroundColor="white"
				>
					<img
						src={item.image}
						alt={`partner-${index}`}
						style={{ maxHeight: "100%" }}
					/>
				</Box>
			))}
		</Box>
	</Box>
);

const Partners = () => (
	<MainLayout title={"Partners and Supporters"} bgImg={img} position={"center"}>
		<Box>
			<PartnerSection
				title="Partners"
				partners={partners}
				width={{ xs: "100px", md: "200px" }}
			/>
			<PartnerSection
				title="Spiritual Partners"
				partners={SpiritualPartner}
			/>
			<PartnerSection
				title="Knowledge Partners"
				partners={knowledgePartner}
				width={{ xs: "100px", md: "250px" }}
			/>
			<PartnerSection title="Supporters" partners={supporters} />
		</Box>
	</MainLayout>
);

export default Partners;
