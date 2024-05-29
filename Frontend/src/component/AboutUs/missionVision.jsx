import React from "react";
import bgImg1 from "../../assets/bg/bgl-12.jpeg";
import bgImg2 from "../../assets/bg/bgl6.jpeg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";
import video from "../../assets/news.mp4";

const values = [
	{
		heading: "Strength",
		description:
			"BNP is moving towards working for the betterment of rivers by uniting all the river activists, river researchers, river experts, policy makers, concerned government representatives, saints and river lovers of the country.",
	},
	{
		heading: "Respect",
		description:
			"BNP respects every person who is thinking positively for the betterment of the rivers of India. The views of every such person are welcome on the platform of Indian River Council.",
	},
	{
		heading: "Integrity",
		description:
			"BNP is committed to high ethical values and integrity in its work. We are accountable to every person who is a river lover.",
	},
	{
		heading: "Balance",
		description:
			"BNP is in favor of bringing to the ground the vision of a healthy society along with the pure and uninterrupted nature of the rivers.",
	},
	{
		heading: "Development",
		description:
			"Some priorities have been set by the BNP for the improvement of rivers. Apart from this, we as an organization believe in adopting new technologies and implementing them on the ground. We are also in favor of changing our approach with time.",
	},
	{
		heading: "Inclusion",
		description:
			"There is no discrimination of any kind on the platform of BNP. We do not discriminate based on any kind of color, gender, caste, religion, region, or society. We are in favor of giving equal opportunity to all positive viewpoints.",
	},
];

export default function MissionVision() {
	return (
		<>
			<MainLayout
				title={"Mission, Vision & Values"}
				bgImg={bgImg1}
				position={"center"}
			>
				<Box>
					<Grid container columnSpacing={4} p={5} bgcolor={"#f2f2f2"}>
						<Grid item xs={12} md={6}>
							<Paper elevation={1} sx={{ height: "100%" }}>
								<Box
									sx={{ backgroundColor: "#ffffffc2" }}
									padding={5}
									height={"100%"}
									borderRadius={2}
								>
									<Typography
										variant="h4"
										fontWeight={"bold"}
										gutterBottom
										textAlign={"center"}
										color={"#051a36"}
										mb={3}
									>
										Mission
									</Typography>
									<Typography
										variant="h6"
										textAlign={"justify"}
										color={"#264e79"}
                    fontSize={"18px"}

									>
										The main work of the BNP is to make the
										rivers of India clean and uninterrupted
										by creating mutual coordination. It is
										the priority of the BNP to make
										successful efforts for the betterment of
										our rivers by bridging the gap between
										society and governments. Be it sharing
										our experiences with each other with
										positivity or conveying any new topic to
										the society or government, all this will
										be done through the BNP. Efforts will be
										made by the BNP to spread the benefits
										of government schemes to the workers
										engaged in the work of river
										revitalization in the society and to
										spread the fragrance of the efforts
										being made in the society to the
										government.
									</Typography>
								</Box>
							</Paper>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper elevation={1} sx={{ height: "100%" }}>
								<Box
									sx={{ backgroundColor: "#ffffffc2" }}
									padding={5}
									borderRadius={2}
								>
									<Typography
										variant="h4"
										fontWeight={"bold"}
										gutterBottom
										textAlign={"center"}
										color={"#051a36"}
										mb={3}
									>
										Vision
									</Typography>
									<Typography
										variant="h6"
                    fontSize={"18px"}
										textAlign={"justify"}
										color={"#264e79"}
									>
										We want to create a river rich India.
										The main objective of the BNP is to
										provide a successful and permanent
										solution to the pollution, encroachment,
										and water shortage that India's rivers
										have had to face in the last four to
										five decades due to man-made distortions
										and the impact of climate change. To
										make the rivers of India clean and
										uninterrupted, it has been decided to do
										every necessary work with cooperation
										through the BNP. The BNP is of the
										opinion that when the rivers of India
										are clean and healthy, the Indian
										society will also be prosperous.
									</Typography>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						backgroundImage: `url(${bgImg2})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					p={6}
				>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						textAlign={"center"}
						gutterBottom
						// color={"white"}
					>
						Our Values
					</Typography>
					<Typography
						variant="h6"
						mb={4}
						textAlign={"justify"}
					>
						At BNP, our values run as deep as the waters we
						safeguard. We are driven by a commitment to
						environmental stewardship, teamwork, and community
						engagement, ensuring pristine riverways for generations
						to come. Our core values of sustainability,
						collaboration, and passion fuel our relentless
						dedication to restoring and preserving our precious
						rivers.
					</Typography>
					<Grid container spacing={6}>
						{values.map((item, index) => (
							<Grid item xs={12} md={4} key={index}>
								<Box
									height={350}
									p={4}
									bgcolor={"#ffffffb7"}
									sx={{
										border: "1px solid rgba(255,255,255,0.28)",
										boxShadow:
											"0 8px 32px 0 rgba(0,0,0,0.37)",
									}}
								>
									<Typography
										variant="h5"
										fontWeight={"bold"}
										gutterBottom
										textAlign={"center"}
										color={"#051a36"}
										mb={2}
									>
										{item.heading}
									</Typography>
									<Typography
										variant="h6"
										textAlign={"justify"}
                    color={"#264e79"}
									>
										{item.description}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
					{/* </Paper> */}
				</Box>
			</MainLayout>
		</>
	);
}
