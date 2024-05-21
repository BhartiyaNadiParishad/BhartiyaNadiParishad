import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import bg1 from "../../assets/bg20.jpg";
import MainLayout from "../Layout/mainLayout";

const data = [
  {
    title: "Challenges",
    content:
      "Rivers are facing challenges like reduced water inflow, encroachments in water courses, and disposal of contaminants ie grey water, solid and liquid waste etc. While the governments are trying their best to deal with these challenges, a large section of society is also engaged in various ways to make their rivers clean and uninterrupted. ",
    // While Namami Gange was formed by the Prime Minister of India, Shri Narendra Modi for the revival of Ganga and its tributaries, he also mentioned from time to time in his 'Mann Ki Baat' programs the efforts being made for the rivers in India is done.",
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
  // {
  //   title: "Join Us",
  //   content:
  //     "Any person or organization concerned about its rivers in India can join the BNP. There is no difference of religion, caste, gender, color, region, and language in this. We all are Indians, and we love the richness of our rivers, citizens or organizations believing in this idea can associate with the BNP in any way. This organization is of everyone and for everyone. In this, everyone has the freedom to express their ideas and implement them. Through the BNP, we will move forward with a resolve to make our country river rich.",
  // },
  // {
  //   title: "Clean Rivers for Biodiversity and Prosperity",
  //   content:
  //     "Clean and uninterrupted rivers are essential for rich biodiversity. Only in rich biodiversity can human society lead a healthy life. The remains and stories of the Indus Valley Civilization prove that India's prosperity grew along the banks of rivers. There is also solid information available that as soon as those rivers became violent due to any reason, those civilizations also came to an end. It is understood from the ancient knowledge tradition that if friendly behavior is maintained with the rivers, then the rivers provide life, but if they are tampered with or their capacity is challenged, then they also try to end the life. Have strength.",
  // },
];

export default function History() {
  return (
    <>
      <MainLayout>
        <Grid
          container
          sx={{
            padding: "250px 50px 100px 50px",
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              color="white"
              marginBottom={4}
            >
              Bhartiya Nadi Parishad
            </Typography>
          </Grid>
          {data.map((d) => (
            <Grid item sm={12} md={6} key={d.title}>
              <Box
                sx={{
                  backgroundColor: "#ffffffc7",
                  borderRadius: "10px",
                }}
                padding={"40px"}
                height={"100%"}
              >
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  gutterBottom
                  textAlign={"center"}
                  color={"#051a36"}
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
