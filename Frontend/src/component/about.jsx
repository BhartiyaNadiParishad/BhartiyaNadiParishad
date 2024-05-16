import React, { useState } from "react";
import MainLayout from "./Layout/mainLayout";
import { Box, Button, CssBaseline, IconButton, Paper, Typography, hexToRgb, styled } from "@mui/material";
import img from "../assets/bg11.jpg";
import img1 from "../assets/draftImage.png";
import Grid from "@mui/material/Grid";
import bg from "../assets/partners.jpg";
import bg1 from "../assets/riverDark.jpg";
import video from "../assets/news.mp4"



const Programs = [
	{
		title: "Groundwork",
		content:
			"Through the BNP, river rejuvenation models have been developed for the river warriors engaged in the rejuvenation of their rivers in different parts of the country, which is helping them in their river work. Apart from this, a system has also been developed by the BNP in which any river warrior can solve his problems through the technical committee of the BNP. Some models of river rejuvenation have also been developed by the BNP, based on which successful efforts have been made at the origin of some rivers like Eastern Kali and Neem. The efforts of Neem River were told to the entire country by Honorable Prime Minister Shri Narendra Modi in the 102nd episode of his ‘Mann Ki Baat’ program on June 18, 2023. In different states of India, good efforts are being made for river revitalization by river activists in different ways, privately and with government or other collaboration. BNP is providing technical support to such river rejuvenation efforts. This is increasing accuracy and speed in their work. BNP promotes such works which are being done at the grassroots level for the betterment of rivers. The BNP priorities also include conducting and helping in conducting studies on the adverse effects of floods, droughts, and pollution from time to time.",
	},
	{
		title: "Policy Work",
		content:
			"Finding policy solutions to any problem related to rivers is part of the main work of the BNP. In India, thinking about rivers has increased at both the society and government levels. Due to this thinking, efforts are being made continuously through governments at the policy level to find solutions to the problems of rivers. The BNP is collaborating with various state governments in preparing policy documents on river related issues. While India's river system extends outside India to Pakistan, China, and Bangladesh, it also extends to various states within India. In such a situation, there are treaties established with other countries regarding rivers and some rules and regulations regarding the rights of rivers between the states of India. The BNP is ready to play its role in finalizing the agreements.",
	},
	{
		title: "Public Awareness",
		content:
			"While India has a physical relationship with the rivers, India also has a deep spiritual connection with the rivers. There is still a greater need to spread knowledge regarding rivers in India. Efforts are also being made by the BNP to increase the understanding of all aspects of Indian rivers among every person of India and to re-establish their connection with their rivers. For this, a river philosophy has been developed by the BNP, encompassing the Indian river system within its scope. Through river darshan, any person from India and abroad can know and understand the river system of India. New methods have been developed through river philosophy to understand the rivers of India and its related aspects in depth and easily. River researchers can take help in their research work through the river philosophy developed through the BNP. Any river in the country and all the subjects related to it can be easily understood through NADI DARSHAN. River Darshan will prove helpful in the work being done for river rejuvenation in the country by both society and government levels. Various types of public awareness programs are conducted by the BNP to further increase the love and respect for the rivers of the country in society.",
	},
];

export default function AboutBNP() {

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

	return (
		<MainLayout>
			<Box mb={2} sx={{ backgroundColor: "white !important" }}>
				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					rowGap={3}
					sx={{
						backgroundColor: "#f2f2f2",
						backgroundImage: `url(${bg})`,
						backgroundSize: "cover",
						backgroundPosition: "center top",
						color: "white",
						padding: "80px 10% 80px 10%",
					}}
				>
					<Typography
						variant="h4"
						sx={{
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						About us
					</Typography>
					<Typography
						textAlign={"center"}
						variant="h4"
						sx={{ fontWeight: "bold", fontSize: "24px" }}
						color=  "#f9c208"
					>
						पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि
						वृक्षाः। <br />
						नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥
					</Typography>
					<Typography
						variant="h6"
						sx={{ fontSize: "20px" }}
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
				<Grid
					container
                    spacing={3}
					sx={{
						padding: "80px",
						backgroundColor: "#f2f2f2",
					}}
				>
					<Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h4"
                                gutterBottom
                                fontWeight={"bold"}
								color= "#264e79"
                            >
                                We believe...
                            </Typography>
                            <Typography variant="h6" textAlign={"justify"}>
                                Rivers are the lifeline of the whole world, but
                                rivers have special importance in India, because
                                apart from economic, India's connection with rivers
                                is also religious, spiritual, and cultural, which is
                                not seen in any other country in the world. It is
                                because of this sacred bond with rivers that India
                                is also called the country of rivers. These are the
                                rivers on whose banks Indians have settled, grown,
                                grown, and developed. A holy river like Ganga also
                                flows on the land of India. Every river in India has
                                its own story and specialty.
                            </Typography>
                        </Box>
					</Grid>
					<Grid item xs={12} md={6}>
                        <Box sx={{ height: "340px" }}>
                            <video style={{ width: "100%", height: "100%", objectFit: "cover" }} controls>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Box>
					</Grid>
				</Grid>
                <Grid
					container
					sx={{
						padding: "60px 100px 60px 100px",
						backgroundColor: "#f2f2f2",
						backgroundImage: `url(${bg1})`,
						backgroundSize: "cover",
						backgroundPosition: "center top",
					}}
					spacing={3}
				>
					<Grid item xs={12} color={"white"}>
						<Typography
							gutterBottom
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
						>
							Our Focus
						</Typography>
                        <Typography
							gutterBottom
							variant="h6"
							textAlign={"center"}
						>
							BNP mainly carries out three types of work for the betterment of rivers: 
                            groundwork, policy work and public awareness. 
                            Through these, our priority is to work in accordance with the religious, cultural, and spiritual sentiments of the rivers of India.
						</Typography>
					</Grid>
					{Programs.map((d) => (
						<Grid item xs={12} md={4} >
							<Box
                                display={"flex"}
                                flexDirection={"column"}
								sx={{ backgroundColor: "#ffffffc7" }}
                                padding={"40px"}
                                height = {expanded ? "100%" : "400px"}
							>   
                                <Typography
                                        variant="h5"
                                        fontWeight={"bold"}
                                        gutterBottom
                                        textAlign={"center"}
										color= "#264e79"
                                    >
                                        {d.title}
                                </Typography>
                                <Box  overflow={"hidden"}>
                                    <Typography
                                        variant="h6"
                                        textAlign={"justify"}
                                        fontSize={"18px"}
                                    >
                                        {d.content}
                                    </Typography>
                                </Box>
                                {!expanded ? (
                                    <Button onClick={handleToggle} sx={{ mt: 2 ,color: "#264e79"}}>
                                        Read More
                                    </Button>
                                ) : (
                                    <Button onClick={handleToggle} sx={{ mt: 2,color: "#264e79" }}>
                                        Read less
                                    </Button>
                                )}
							</Box>
						</Grid>
					))}
				</Grid>
				

				{/* <Grid container sx={{ padding: "30px 60px" }}>
					{dataArray.map((item) => (
						<Grid
							item
							xs={12}
							md={3}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
						>
							<Box padding={"40px"} key={item.label}>
								<Box
									display={"flex"}
									alignItems={"center"}
									justifyContent={"center"}
									width={"200px"}
									height={"200px"}
									sx={{
										borderRadius: "50%",
										backgroundColor: "#2a63ec",
									}}
									mb={2}
								>
									<Typography
										variant="h4"
										fontWeight={"bold"}
										color={"white"}
									>
										{item.value}
									</Typography>
								</Box>
								<Typography
									variant="h5"
									fontWeight={"bold"}
									textAlign={"center"}
								>
									{item.label}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid> */}
				{/* <Box mt={2}
					sx={{
						padding: "60px 100px 60px 100px",
						backgroundColor: "#f2f2f2",
					}}
				>
                    <Typography
                            mb={4}
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
					>
							We love to work with Our Partners
					</Typography>
                    <Carousel
                        autoplay="true"
                        autoplayDelay={"4000"}
                        loop="true"
                        prevArrow={({ handlePrev }) => (
                                        <IconButton
                                            variant="text"
                                            color="rgb(19 100 173)"
                                            size="lg"
                                            onClick={handlePrev}
                                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                color="black"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                />
                                            </svg>
                                        </IconButton>
                                )}

                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="rgb(19 100 173)"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    color="black"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </IconButton>
                )}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}

                    >
                        {partners.map((partnerArray, index) => (
                            <Grid key={index} container spacing={4}>
                            {partnerArray.map((item) => (
                                <Grid item xs={12} md={3} key={item.label}>
                                <Box
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    sx={{ backgroundColor: "white" }}
                                    padding={"20px"}
                                >
                                    <img src={item.image} style={{ height: "150px" }} />
                                </Box>
                                </Grid>
                            ))}
                            </Grid>
                        ))}
                    </Carousel>
				</Box>
                <Grid mt={2}
					container
					sx={{
						padding: "60px 100px 60px 100px",
						backgroundColor: "#f2f2f2",
					}}
					spacing={4}
				>
					<Grid xs={12}>
						<Typography
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
						>
							Our Supporters
						</Typography>
					</Grid>
					{supporters.map((item) => (
						<Grid item xs={12} md={4}>
							<Box
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								key={item.label}
								sx={{ backgroundColor: "white" }}
								padding={"20px"}
							>
								<img
									src={item.image}
									style={{ height: "150px" }}
								/>
							</Box>
						</Grid>
					))}
				</Grid> */}
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
			</Box>
		</MainLayout>
	);
}
