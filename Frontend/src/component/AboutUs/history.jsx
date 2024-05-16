import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bg1 from "../../assets/riverDark.jpg";
import MainLayout from "../Layout/mainLayout";

const data = [
	{
		title: "Challenges Faced by Rivers",
		content:
			"Rivers are facing challenges like water shortage, encroachment, and pollution. While the governments are trying their best to deal with these challenges, a large section of society is also engaged in various ways to make their rivers clean and uninterrupted. While Namami Gange was formed by the Prime Minister of India, Shri Narendra Modi for the revival of Ganga and its tributaries, he also mentioned from time to time in his 'Mann Ki Baat' programs the efforts being made for the rivers in India is done.",
	},
	{
		title: "Formation of BHARTIYA NADI PARISHAD (BNP)",
		content:
			"In India, the efforts of the society and the government seem to be shared at some places, at some places their coordination seems incomplete and at some places the correct technical knowledge is not available. The BHARTIYA NADI PARISHAD (BNP) has been formed to coordinate the efforts of society and government for the rivers of India and to take forward efforts for the rivers in a better way by learning from each other's experiences. We can also know BHARTIYA NADI PARISHAD in English by the name Indian River Council.",
	},
	{
		title: "Objectives of BNP",
		content:
			"The main objective of the BNP is to coordinate the efforts of society and government for river rejuvenation in India and to achieve positive results from those efforts. We believe that the BNP will help in carrying forward river rejuvenation efforts in a coordinated manner in the country. Through the BNP, it will also be ensured that by the year 2047, when India completes 100 years of independence, the rivers of India become completely clean and uninterrupted. India's Mission (LiFE) Lifestyle for Environment also has an important contribution in the betterment of rivers. India believes that the entire world is one family, and our future is also shared, in such a situation, the clean and uninterrupted flow of India's rivers through the BNP is also helpful in fulfilling the sustainable development goals of the UN.",
	},
	{
		title: "NADI DARSHAN: BNP's Information Portal",
		content:
			"Through the BNP, river warriors engaged in river rejuvenation efforts in different states of the country will be able to share their experiences with each other and learn from each other. While the BNP will provide technical support to the river warriors, it will also help in reaching the government schemes to the society. Through the BNP, river researchers, river experts, policy makers, river lovers and the public will get a better opportunity to understand the entire river system of India. For this, a portal called NADI DARSHAN has been developed by the BNP. Through this portal, one can get information about the legends, importance, floods, droughts, pollution, encroachment, dams, policies, and agreements etc. related to the rivers of India and the efforts made by the society and the government for the betterment of those rivers. The efforts being made can also be known.",
	},
	{
		title: "Joining BNP for River Conservation",
		content:
			"Any person or organization concerned about its rivers in India can join the BNP. There is no difference of religion, caste, gender, color, region, and language in this. We all are Indians, and we love the richness of our rivers, citizens or organizations believing in this idea can associate with the BNP in any way. This organization is of everyone and for everyone. In this, everyone has the freedom to express their ideas and implement them. Through the BNP, we will move forward with a resolve to make our country river rich.",
	},
	{
		title: "Clean Rivers for Biodiversity and Prosperity",
		content:
			"Clean and uninterrupted rivers are essential for rich biodiversity. Only in rich biodiversity can human society lead a healthy life. The remains and stories of the Indus Valley Civilization prove that India's prosperity grew along the banks of rivers. There is also solid information available that as soon as those rivers became violent due to any reason, those civilizations also came to an end. It is understood from the ancient knowledge tradition that if friendly behavior is maintained with the rivers, then the rivers provide life, but if they are tampered with or their capacity is challenged, then they also try to end the life. Have strength.",
	},
];

export default function History() {
	return (
		<>
			<MainLayout>
				<Grid
					container
					sx={{
						padding: "60px 100px",
						backgroundColor: "#f2f2f2",
						// backgroundImage: `url(${bg1})`,
						backgroundSize: "cover",
						backgroundPosition: "center top",
					}}
					spacing={3}
				>
					<Grid item xs={12}>
						<Typography
							gutterBottom
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
                            color={"#264e79"}
						>
							History & Successes
						</Typography>
					</Grid>
					{data.map((d) => (
						<Grid item sm={12} md={6}>
							<Box
								sx={{ backgroundColor: "#ffffffc7",
                                    color: "#264e79"}}
								padding={"40px"}
								height={"100%"}
							>
								<Typography
									variant="h5"
									fontWeight={"bold"}
									gutterBottom
									textAlign={"center"}
								>
									{d.title}
								</Typography>
								<Typography
									variant="h6"
									textAlign={"justify"}
									fontSize={"16px"}
								>
									{d.content}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</MainLayout>
		</>
	);
}
