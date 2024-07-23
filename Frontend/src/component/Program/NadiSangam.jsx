import React from "react";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-9.jpeg";
import { Grid, Box, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";

export default function NadiSangam() {
  return (
    <MainLayout title={"Nadi Sangam"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} fontSize={"20px"}>
          A one-day 'Bharatiya Nadi Sangam' is organized every year on 22 March.
          This 'Bharatiya Nadi Sangam' is organized in any one city of India
          according to the circumstances. It includes all the river lovers
          associated with the Bhartiya Nadi Parishad as well as all the great
          people who think about the river. At the 'Bharatiya Nadi Sangam',
          where the works of the past year are reviewed, plans for the coming
          year are made.
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
