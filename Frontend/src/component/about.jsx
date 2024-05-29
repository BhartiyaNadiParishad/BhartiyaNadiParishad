import React from "react";
import MainLayout from "./Layout/mainLayout";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import bg from "../assets/bg/bgl-9.jpeg";
import bg1 from "../assets/bg/about-bg.jpeg";
import video from "../assets/news.mp4";
import WorkImpact from "./AboutUs/workImpact";
import History from "./AboutUs/history";
import HeroSection from "./Layout/contentLayout/heroSection";
import ContentSection from "./Layout/contentLayout/contentSection";
import QuoteSection from "./Layout/contentLayout/quoteSection";
import ImageSection from "./Layout/contentLayout/imageSection";
import FooterSection from "./Layout/contentLayout/footerSection";


export default function AboutBNP() {
	return (
		<MainLayout>
			<HeroSection backgroundImage={bg} title="About us" />
			<Grid container spacing={3} sx={{ padding: "18px 15%" }}>
				<Grid item xs={12}>
					<ContentSection
						content="Rivers are the lifeline of the whole world, but rivers have special importance in India, because apart from economic, India's connection with rivers is also religious, spiritual, and cultural, which is not seen in any other country in the world. It is because of this sacred bond with rivers that India is also called the country of rivers. These are the rivers on whose banks Indians have settled, grown, grown, and developed. A holy river like Ganga also flows on the land of India. Every river in India has its own story and specialty."
						backgroundColor=""
						textColor="#375c84"
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentSection
						content="At present, rivers are facing challenges like water shortage, encroachment, and pollution. While the governments are trying their best to deal with these challenges, a large section of society is also engaged in various ways to make their rivers clean and uninterrupted. While Namami Gange was formed by the Prime Minister of India, Shri Narendra Modi for the revival of Ganga and its tributaries, he also mentioned from time to time in his 'Mann Ki Baat' programs the efforts being made for the rivers in India. is done."
						backgroundColor="#375c84"
						textColor="white"
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentSection
						content="In India, the efforts of the society and the government seem to be shared at some places, at some places their coordination seems incomplete and at some places the correct technical knowledge is not available. The BHARTIYA NADI PARISHAD (BNP) has been formed to coordinate the efforts of society and government for the rivers of India and to take forward efforts for the rivers in a better way by learning from each other's experiences. We can also know BHARTIYA NADI PARISHAD in English by the name Indian River Council. The main objective of the BNP is to coordinate the efforts of society and government for river rejuvenation in India and to achieve positive results from those efforts. We believe that the BNP will help in carrying forward river rejuvenation efforts in a coordinated manner in the country. Through the BNP, it will also be ensured that by the year 2047, when India completes 100 years of independence, the rivers of India become completely clean and uninterrupted. India's Mission (LiFE) Lifestyle for Environment also has an important contribution in the betterment of rivers. India believes that the entire world is one family, and our future is also shared, in such a situation, the clean and uninterrupted flow of India's rivers through the BNP is also helpful in fulfilling the sustainable development goals of the UN.. Every river in India has its own story and specialty."
						backgroundColor=""
						textColor="#375c84"
					/>
				</Grid>
				<Grid item xs={12}>
					<QuoteSection
						backgroundImage={bg}
						quoteLine1="पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः। "
						quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
						translation="Just as rivers do not drink their own water, trees do not eat their own fruits, And clouds do not consume the crops nourished by their rain, in the same way, the wealth of the virtuous is meant for benevolence."
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentSection
						content="Through the BNP, river warriors engaged in river rejuvenation efforts in different states of the country will be able to share their experiences with each other and learn from each other. While the BNP will provide technical support to the river warriors, it will also help in reaching the government schemes to the society. Through the BNP, river researchers, river experts, policy makers, river lovers and the public will get a better opportunity to understand the entire river system of India. For this, a portal called NADI DARSHAN has been developed by the BNP. Through this portal, one can get information about the legends, importance, floods, droughts, pollution, encroachment, dams, policies, and agreements etc. related to the rivers of India and the efforts made by the society and the government for the betterment of those rivers. The efforts being made can also be known."
						textColor="#375c84"

						/>
				</Grid>
				<Grid item xs={12}>
					<ContentSection
						content={"Any person or organization concerned about its rivers in India can join the BNP. There is no difference of religion, caste, gender, color, region, and language in this. We all are Indians, and we love the richness of our rivers, citizens or organizations believing in this idea can associate with the BNP in any way. This organization is of everyone and for everyone. In this, everyone has the freedom to express their ideas and implement them. Through the BNP, we will move forward with a resolve to make our country river rich."}
						textColor="#375c84"

					/>
				</Grid>
				<Grid item xs={12}>
					<ImageSection
						imageSrc={bg}
						content="Clean and uninterrupted rivers are essential for rich biodiversity. Only in rich biodiversity can human society lead a healthy life. The remains and stories of the Indus Valley Civilization prove that India's prosperity grew along the banks of rivers. There is also solid information available that as soon as those rivers became violent due to any reason, those civilizations also came to an end. It is understood from the ancient knowledge tradition that if friendly behavior is maintained with the rivers, then the rivers provide life, but if they are tampered with or their capacity is challenged, then they also try to end the life. Have strength."
						textColor="#375c84"
					/>
				</Grid>
			</Grid>
			<FooterSection
				backgroundImage="https://images01.nicepage.com/36/ce/36ced675fffdf7503938e3778dc8b3ca.jpeg"
				textColor="#375c84"
				content="Understanding the ancient knowledge of India tells us that clean and uninterrupted rivers are essential for our prosperity. Therefore, society and the system must make appropriate efforts in this direction. In this context, the formation of BNP is an important step taken by the society with the cooperation of the system for the prosperity of the rivers of India. When all the relevant sections of society and system are involved in this step, then the destination will be achieved by following the path of prosperity of rivers. BNP strongly believes in making joint efforts with society and the government to achieve its goals. In India, we can understand the importance of rivers through this verse said in Van Parva of Mahabharata."
			/>
		</MainLayout>
	);
}

{
	/* <Box mb={2} sx={{ backgroundColor: "white !important" }}>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"flex-end"}
          rowGap={3}
          height={"70vh"}
          sx={{
            backgroundColor: "#f2f2f2",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            color: "white",
            padding: "18px 15% 80px 15%",
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
            color="#f9c208"
          >
            पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः। <br />
            नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px" }}
            textAlign={"center"}
          >
            Just as rivers do not drink their own water, trees do not eat their
            own fruits, <br />
            And clouds do not consume the crops nourished by their rain, in the
            same way, the wealth of the virtuous is meant for benevolence.
          </Typography>
        </Box> */
}
{
	/* <Grid
          container
          spacing={4}
          sx={{
            padding: "10px 40px 40px 50px",
            backgroundColor: "#f2f2f2",
            marginBottom: "18px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight={"bold"}
                color="#264e79"
                mb={2}
                textAlign={"center"}
              >
                Our believe
              </Typography>
              <Typography variant="h6" textAlign={"justify"}>
                Rivers are the lifeline of the whole world, but rivers have
                special importance in India, because apart from economic,
                India's connection with rivers is also religious, spiritual, and
                cultural, which is not seen in any other country in the world.
                It is because of this sacred bond with rivers that India is also
                called the country of rivers. These are the rivers on whose
                banks Indians have settled, grown, grown, and developed. A holy
                river like Ganga also flows on the land of India. Every river in
                India has its own story and specialty.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "340px" }}>
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>

        <History />
        <Grid
          container
          sx={{
            padding: "60px 100px 60px 100px",
            backgroundColor: "#f2f2f2",
          }}
          justifyContent={"center"}
        >
          <WorkImpact />
        </Grid> */
}
{
	/*
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
								padding={"18px"}
							>
								<img
									src={item.image}
									style={{ height: "150px" }}
								/>
							</Box>
						</Grid>
					))}
				</Grid> */
}
{
	/* <Box
				display="flex"
				flexDirection={"column"}
				justifyContent={"center"}
				rowGap={3}
        p={"40px 25%"}
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
					Just as rivers do not drink their own water, trees do not
					eat their own fruit, and clouds do not consume the crops
					nourished by their rain, in the same way, the wealth of the
					virtuous is meant for benevolence. Clean and uninterrupted
					rivers are essential for rich biodiversity. Only in rich
					biodiversity can human society lead a healthy life. The
					remains and stories of the Indus Valley Civilization prove
					that India's prosperity grew along the banks of rivers.
				</Typography>
			</Box> */
}
