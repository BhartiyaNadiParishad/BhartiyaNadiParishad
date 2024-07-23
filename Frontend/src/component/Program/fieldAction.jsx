import React from "react";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/none.jpeg";
import { Grid, Box, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";

export default function FieldAction() {
  return (
    <MainLayout title={"Field Action"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} fontSize={"20px"}>
          Through the Bhartiya Nadi Parishad, river rejuvenation models have
          been developed for the river warriors engaged in the rejuvenation of
          their rivers in different parts of the country, which is helping them
          in their river work. Apart from this, a system has also been developed
          by the Bhartiya Nadi Parishad in which any river warrior can solve his
          problems through the technical committee of the Bhartiya Nadi
          Parishad. Some models of river rejuvenation have also been developed
          by the Bhartiya Nadi Parishad, based on which successful efforts have
          been made at the origin of some rivers like Eastern Kali and Neem. The
          efforts of Neem River were told to the entire country by Honorable
          Prime Minister Shri Narendra Modi in the 102nd episode of his ‘Mann Ki
          Baat’ program on June 18, 2023. In different states of India, good
          efforts are being made for river revitalization by river activists in
          different ways, privately and with government or other collaboration.
          Bhartiya Nadi Parishad is providing technical support to such river
          rejuvenation efforts. This is increasing accuracy and speed in their
          work. Bhartiya Nadi Parishad promotes such works which are being done
          at the grassroots level for the betterment of rivers. The Bhartiya
          Nadi Parishad priorities also include conducting and helping in
          conducting studies on the adverse effects of floods, droughts, and
          pollution from time to time.
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
