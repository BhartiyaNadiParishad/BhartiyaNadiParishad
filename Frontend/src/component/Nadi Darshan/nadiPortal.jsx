import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bg/bgl6.jpeg";
import ContentSection from "../Layout/contentLayout/contentSection";
import QuoteSection from "../Layout/contentLayout/quoteSection";
import HeroSection from "../Layout/contentLayout/heroSection";
import FooterSection from "../Layout/contentLayout/footerSection";

const sections = [
	{
		content:
			"In India, which has established the concept of Vasudhev Kutumbhakambh at its core, rivers have also been religiously important. In India, rivers are viewed with great respect and honor. The rivers of India have played an important role in the economic and cultural development of the country since ancient times. It was in the valleys of the Indus and Ganga rivers that the world's most ancient civilizations, the Indus Valley, and Aryan Civilization, emerged. Even today, the highest concentration of population and agriculture in the country is found in the river valley areas. In ancient times, due to trade and transportation facilities, most of the cities of the country were developed on the banks of rivers and even today almost all the religious places of the country are associated with some river or the other.",
		backgroundColor: "",
		textColor: "#1cabe2",
	},
	{
		content:
			"Runoff refers to the surface flow of water through streams and rivers. Drainage system or flow system is a special arrangement of water flow created by a river and its tributaries, which is a kind of network. In this network, rivers join each other and form a path for one-directional flow of water. All the tributaries of a river and other features of that river basin together form the drainage system of that river. A river basin is delimited from the basins of surrounding rivers by watersheds. The river basin is also considered as a basic geomorphic unit. A river basin is a regional unit that can be studied quantitatively, and effective plans can be prepared based on the data. River basins can be studied as a system in which climatic phenomena like energy input, temperature and rainfall can be well understood.",
		backgroundColor: "#1cabe2",
		textColor: "white",
	},
	{
		content:
			"The river system of India is very extensive and drenched in many colors. There is evidence of many ancient civilizations settling on riverbanks, which is still relevant today. Be it the Indus Valley Civilization, which is situated on the banks of the Indus River, or Delhi, which is situated on the banks of the Yamuna, the evidence of both is sufficient to show the importance of rivers. Not only this, even outside India, be it the city of London situated on the banks of river Thames, or the city of Washington situated on the banks of river Potomac, these show how important rivers are for the mankind of the world. Why are rivers so important that all the world's big cities and most of the population are settled on their banks? After all, why are rivers considered life givers? There is only one answer to all these questions that rivers are systems in which there is continuous water. The nature of rivers is such that when there is water in them, the ground water level will also remain, and the entire area will be prosperous. While rivers supply drinking water, water is also available for the agricultural sector. River’s act as the backbone of the economy, be it tourism or water transportation. India is called the country of rivers. The meaning of rivers in India is economic as well as religious. Many sages have attained siddhis by sitting on the banks of rivers. Many great men of India have benefited the society with the light of their knowledge on the banks of rivers. In India, there are Kumbh and Ardh-Kumbh fairs held on the banks of rivers Ganga, Shipra, and Godavari, where crores of people regain knowledge. India and rivers complement each other. India cannot be imagined without rivers. The connection of the Indian community with rivers is so deep that rivers are the basic soul of India. Rivers in India have had economic, social, and cultural importance which continues even today. The most ancient civilizations developed in the Ganga and Indus River valleys. Even today, the maximum population and agricultural areas exist in these two river valleys. Most of the major religious places of the country are present on the banks of rivers. In ancient times, due to trade and transportation facilities, most of the cities of the country were situated on the banks of rivers. There are about 4000 small and big rivers in India.",
		backgroundColor: "",
		textColor: "#1cabe2",
	},
];

const drainageSystem = [
	"Indus River drainage system in North India",
	"Ganga river drainage system in central India",
	"Brahmaputra drainage system in north-east India",
	"Narmada/Kaveri drainage system in Peninsular India",
];

const drainageClassification = [
	"Rivers originating from the Himalayas",
	"Rivers originating from the south",
	"Coastal rivers",
	"Rivers of the basin area originate from inland drains",
];

const riverTypes = [
	"Rivers falling into the Bay of Bengal",
	"Rivers falling into the Arabian Sea",
	"Rivers that disappear in the desert",
];

export default function NadiPortal() {
	return (
		<MainLayout title={"Indian River System"} bgImg={bg}>
			<Grid container spacing={3} sx={{ padding: "50px 17%" }}>
				{sections.map((section, index) => (
					<Grid item xs={12} key={index}>
						<ContentSection
							content={section.content}
							backgroundColor={section.backgroundColor}
							textColor={section.textColor}
						/>
					</Grid>
				))}
				<Grid item xs={12}>
					<QuoteSection
						backgroundImage={bg}
						quoteLine1="पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः।"
						quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
						translation="Just as rivers do not drink their own water, trees do not eat their own fruits, and clouds do not consume the crops nourished by their rain, in the same way, the wealth of the virtuous is meant for benevolence."
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box
						height={"100%"}
						color={"#1cabe2"}
						backgroundColor={"#acd3fb24"}
						p={3}
					>
						<Typography variant="h6" fontSize={"18px"}>
							The river drainage system of India can be understood
							by dividing it into four parts:
						</Typography>
						<Box
							component="ul"
							sx={{ pl: 2, listStyleType: "disc" }}
						>
							{drainageSystem.map((item, index) => (
								<Typography
									component="li"
									variant="body1"
									fontSize={"20px"}
									key={index}
								>
									{item}
								</Typography>
							))}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box p={3} color={"#1cabe2"} backgroundColor={"#acd3fb24"} height={"100%"}>
						<Typography variant="h6" fontSize={"20px"}>
							The drainage systems of the rivers of India are
							classified into four groups:
						</Typography>
						<Box
							component="ul"
							sx={{ pl: 2, listStyleType: "disc" }}
						>
							{drainageClassification.map((item, index) => (
								<Typography
									component="li"
									variant="body1"
									fontSize={"20px"}
									key={index}
								>
									{item}
								</Typography>
							))}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box color={"#1cabe2"}>
						<Typography variant="h6" fontSize={"18px"}>
							We can also know the rivers of India in the
							following two types:
						</Typography>
						<Box
							component="ul"
							sx={{ pl: 2, listStyleType: "disc" }}
						>
							{riverTypes.slice(0, 2).map((item, index) => (
								<Typography
									component="li"
									variant="body1"
									fontSize={"20px"}
									key={index}
								>
									{item}
								</Typography>
							))}
						</Box>
						<Typography
							variant="h6"
							fontSize={"20px"}
							sx={{ mt: 2 }}
						>
							Apart from these, there are some rivers in India
							which neither flow into any river nor into any sea.
							These rivers disappear in the desert.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
}
