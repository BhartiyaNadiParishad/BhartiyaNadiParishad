import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-11.jpeg";
import MainLayout from "../Layout/mainLayout";

export default function Research() {
  return (
    <MainLayout title={"Research & Development"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} color={"#1cabe2"} fontSize={"20px"}>
          Finding policy solutions to any problem related to rivers is part of
          the main work of the Bhartiya Nadi Parishad. In India, thinking about
          rivers has increased at both the society and government levels. Due to
          this thinking, efforts are being made continuously through governments
          at the policy level to find solutions to the problems of rivers. The
          Bhartiya Nadi Parishad is collaborating with various state governments
          in preparing policy documents on river related issues. While India's
          river system extends outside India to Pakistan, China, and Bangladesh,
          it also extends to various states within India. In such a situation,
          there are treaties established with other countries regarding rivers
          and some rules and regulations regarding the rights of rivers between
          the states of India. The Bhartiya Nadi Parishad is ready to play its
          role in finalizing the agreements.
        </Typography>
      </Box>

      <Grid item xs={12} mx={6} mb={6}>
        <img
          src={bg1}
          style={{
            objectFit: "cover",
            width: "100%",
            maxHeight: "400px",
            objectPosition: "center",
          }}
          alt="Background"
        />
      </Grid>
    </MainLayout>
  );
}
