import React, { useState } from "react";
import MainLayout from "./Layout/mainLayout";
import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  Paper,
  Typography,
  hexToRgb,
  styled,
} from "@mui/material";
import img from "../assets/bg11.jpg";
import img1 from "../assets/draftImage.png";
import Grid from "@mui/material/Grid";
import bg from "../assets/partners.jpg";
import bg1 from "../assets/riverDark.jpg";
import video from "../assets/news.mp4";
import WorkImpact from "./AboutUs/workImpact";
import History from "./AboutUs/history";

const data = [
  {
    title: "Challenges",
    content:
      "Rivers are facing challenges like reduced water inflow, encroachments in water courses, and disposal of contaminants ie grey water, solid and liquid waste etc. While the governments are trying their best to deal with these challenges, a large section of society is also engaged in various ways to make their rivers clean and uninterrupted. ",
  },
  {
    title: "Formation ",
    content:
      "In India, the efforts of the society and the government seem to be converged at some places, however, their coordination seems incomplete and there is dearth of the technical knowledge. The BHARTIYA NADI PARISHAD has been formed to coordinate the efforts of society and government for the rivers of India and to take forward efforts for the rivers in a better way by learning from each other's experiences.",
  },
  {
    title: "Objectives",
    content:
      "The main objective of the BNP is to coordinate the efforts of society and government for river rejuvenation in India and to achieve positive results from their efforts, throug action research and demonstrating innovative solutions. Through the BNP, it will also be ensured that by the year 2047, when India completes 100 years of independence, the rivers of India become completely clean and uninterrupted.",
  },
  {
    title: "Nadi Darshan",
    content:
      "A portal designed to offer essential information about Indian River System in Geo-spatial environment. It aims to facilitate communities, implementing agencies, local governence institutions, river researchers, river experts, policy makers and river activists through improved access to relevant information and contribute efficiently in river rejuvenation.",
  },
];

export default function AboutBNP() {
  return (
    <MainLayout>
      <Box mb={2} sx={{ backgroundColor: "white !important" }}>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"flex-end"}
          rowGap={3}
          height={"85vh"}
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
            color="#f9c208"
          >
            पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः। <br />
            नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px" }}
            textAlign={"center"}
          >
            Just as rivers do not drink their own water, trees do not eat their
            own fruits, <br />
            And clouds do not consume the crops nourished by their rain, in the
            same way, the wealth of the virtuous is meant for benevolence.
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            padding: "80px",
            // backgroundColor: "#f2f2f2",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight={"bold"}
                color="#264e79"
              >
                We believe...
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
            // backgroundImage: `url(${bg1})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center top",
          }}
          justifyContent={"center"}
        >
          <WorkImpact />
        </Grid>
        {/*
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
            Just as rivers do not drink their own water, trees do not eat their
            own fruit, and clouds do not consume the crops nourished by their
            rain, in the same way, the wealth of the virtuous is meant for
            benevolence. Clean and uninterrupted rivers are essential for rich
            biodiversity. Only in rich biodiversity can human society lead a
            healthy life. The remains and stories of the Indus Valley
            Civilization prove that India's prosperity grew along the banks of
            rivers.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
}
