import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Button, Link, Typography } from "@mui/material";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-20.jpg";
import bg2 from "../../assets/bg/bgl-17.jpg";
import HeroSection from "../Layout/contentLayout/heroSection";
import ContentSection from "../Layout/contentLayout/contentSection";
import QuoteSection from "../Layout/contentLayout/quoteSection";
import ImageSection from "../Layout/contentLayout/imageSection";
import FooterSection from "../Layout/contentLayout/footerSection";

const content = [
	{
		title: "Objective of BNP",
		text: "To coordinate the efforts of society and government for river rejuvenation in India and achieve positive results from those efforts.",
	},
	{
		title: "Vision for 2047",
		text: "By the year 2047, when India completes 100 years of independence, ensure that the rivers of India become completely clean and uninterrupted.",
	},
	{
		title: "Coordinated Efforts",
		text: "BNP aims to carry forward river rejuvenation efforts in a coordinated manner across the country.",
	},
	{
		title: "Contribution of LiFE",
		text: "Mission LiFE plays a significant role in the betterment of rivers, emphasizing that the entire world is one family and our future is shared.",
	},
	{
		title: "Impact on SDGs",
		text: "Clean and uninterrupted flow of India's rivers through BNP supports the achievement of the UN's sustainable development goals.",
	},
	{
		title: "Unique Stories",
		text: "Every river in India has its own unique story and specialty, adding to the cultural and environmental richness of the country.",
	},
];

export default function AboutBNP() {
	return (
		<MainLayout title={"About us"} bgImg={bg} position={"bottom"}>
			<Box padding={"50px 17%"}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<ContentSection
							content="Rivers are the lifeline of the whole world, but rivers have special importance in India, because apart from economic, India's connection with rivers is also religious, spiritual, and cultural, which is not seen in any other country in the world. It is because of this sacred bond with rivers that India is also called the country of rivers. These are the rivers on whose banks Indians have settled, grown, grown, and developed. A holy river like Ganga also flows on the land of India. Every river in India has its own story and specialty."
							textColor="#1cabe2"
							fontSize="20px"
						/>
					</Grid>
					<Grid item xs={12}>
						<QuoteSection
							quoteColor="white"
							backgroundImage={bg1}
							quoteLine1="पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः।"
							quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
							translationLine1="Just as rivers do not drink their own water, trees do not eat their own fruits,"
							translationLine2="And clouds do not consume crops nourished by rain; likewise, the virtuous use their wealth for benevolence."
						/>
					</Grid>
					<Grid item xs={6}>
						<ContentSection
							content="At present, rivers are facing challenges like water shortage, encroachment, and pollution. While the governments are trying their best to deal with these challenges, a large section of society is also engaged in various ways to make their rivers clean and uninterrupted. While Namami Gange was formed by the Prime Minister of India, Shri Narendra Modi for the revival of Ganga and its tributaries, he also mentioned from time to time in his 'Mann Ki Baat' programs the efforts being made for the rivers in India."
							textColor="#1cabe2"
							backgroundColor="#acd3fb24"
							fontSize="20px"
						/>
					</Grid>
					<Grid item xs={6}>
						<ContentSection
							content="In India, the efforts of the society and the government seem to be shared at some places, at some places their coordination seems incomplete and at some places the correct technical knowledge is not available. The BHARTIYA NADI PARISHAD (BNP) has been formed to coordinate the efforts of society and government for the rivers of India and to take forward efforts for the rivers in a better way by learning from each other's experiences. We can also know BHARTIYA NADI PARISHAD in English by the name Indian River Council."
							backgroundColor="#acd3fb24"
							textColor="#1cabe2"
							fontSize="20px"
						/>
					</Grid>
					<Grid item xs={12}>
						<img
							src={bg}
							style={{ objectFit: "cover", width: "100%" }}
							alt="Background"
						/>
					</Grid>
					<Grid item xs={12}>
						<Box>
							<Grid container spacing={3}>
								{content.map((item, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
										key={index}
									>
										<Box
											sx={{
												backgroundColor: "#1cabe2",
												color: "white",
												padding: 3,
												height: "100%",
											}}
										>
											<Typography
												variant="h6"
												gutterBottom
												fontWeight={"bold"}
											>
												{item.title}
											</Typography>
											<Typography variant="body1">
												{item.text}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<ContentSection
							content="Clean and uninterrupted rivers are essential for rich biodiversity. Only in rich biodiversity can human society lead a healthy life. The remains and stories of the Indus Valley Civilization prove that India's prosperity grew along the banks of rivers. There is also solid information available that as soon as those rivers became violent due to any reason, those civilizations also came to an end. It is understood from the ancient knowledge tradition that if friendly behavior is maintained with the rivers, then the rivers provide life, but if they are tampered with or their capacity is challenged, then they also try to end the life."
							textColor="#1cabe2"
							fontSize="20px"
						/>
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								backgroundColor: "#1cabe2",
								color: "white",
								padding: 4,
								border: "1px solid #fff",
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								textAlign: "left",
							}}
						>
							<Typography
								variant="h5"
								gutterBottom
								fontWeight={"bold"}
							>
								Join the BNP
							</Typography>
							<Typography variant="h6" paragraph>
								Any person or organization concerned about its
								rivers in India can join the BNP. There is no
								difference of religion, caste, gender, color,
								region, and language in this. We all are
								Indians, and we love the richness of our rivers.
								Citizens or organizations believing in this idea
								can associate with the BNP in any way.
							</Typography>
							<Typography variant="h6" mb={2}>
								This organization is of everyone and for
								everyone. In this, everyone has the freedom to
								express their ideas and implement them. Through
								the BNP, we will move forward with a resolve to
								make our country river rich.
							</Typography>
							<Button
								component={Link}
								to="/getInvolvedMenu"
								variant="contained"
								sx={{
									backgroundColor: "white",
									color: "#1cabe2",
									"&:hover": {
										backgroundColor: "#1cabe2",
										color: "white",
									},
								}}
							>
								Get Involved
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<img
							src={bg2}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
								maxHeight: "400px",
								objectPosition: "bottom",
							}}
							alt="Background 2"
						/>
					</Grid>
					<Grid item xs={12}>
						<Box sx={{ color: "#1cabe2", textAlign: "left" }}>
							<Typography
								variant="h5"
								color={"white"}
								p={2}
								mb={2}
								fontWeight={"bold"}
								backgroundColor={"#1cabe2"}
							>
								Importance of Rivers in Indian Prosperity
							</Typography>
							<Typography variant="h6" paragraph>
								Understanding the ancient knowledge of India
								tells us that clean and uninterrupted rivers are
								essential for our prosperity. Therefore, society
								and the system must make appropriate efforts in
								this direction. In this context, the formation
								of BNP is an important step taken by the society
								with the cooperation of the system for the
								prosperity of the rivers of India.
							</Typography>
							<Typography variant="h6" paragraph>
								When all the relevant sections of society and
								system are involved in this step, then the
								destination will be achieved by following the
								path of prosperity of rivers. BNP strongly
								believes in making joint efforts with society
								and the government to achieve its goals. In
								India, we can understand the importance of
								rivers through this verse said in Van Parva of
								Mahabharata.
							</Typography>
							<Typography
								variant="h6"
								paragraph
								fontWeight={"bold"}
							>
								वे शृण्वन्ति नदीनां य ऋषभाः
							</Typography>
							<Typography variant="h6" paragraph>
								The essence of which is that people who want to
								gain knowledge must follow the path of rivers.
								From this perspective, the prosperity of rivers
								is also necessary for the prosperity of the
								society.
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<img
							src={bg}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<img
							src={bg2}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			{/* <FooterSection
        backgroundImage="https://images01.nicepage.com/36/ce/36ced675fffdf7503938e3778dc8b3ca.jpeg"
        textColor="#1cabe2"
        content="Understanding the ancient knowledge of India tells us that clean and uninterrupted rivers are essential for our prosperity. Therefore, society and the system must make appropriate efforts in this direction. In this context, the formation of BNP is an important step taken by the society with the cooperation of the system for the prosperity of the rivers of India. When all the relevant sections of society and system are involved in this step, then the destination will be achieved by following the path of prosperity of rivers. BNP strongly believes in making joint efforts with society and the government to achieve its goals. In India, we can understand the importance of rivers through this verse said in Van Parva of Mahabharata."
      /> */}
		</MainLayout>
	);
}