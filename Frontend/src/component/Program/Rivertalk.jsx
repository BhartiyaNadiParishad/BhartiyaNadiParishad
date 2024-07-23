import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-10.jpeg";
import MainLayout from "../Layout/mainLayout";

export default function RiverTalk() {
  return (
    <MainLayout title={"River Talk"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} fontSize={"20px"}>
          The Bhartiya Nadi Parishad will organize ‘River Talks’ from time to
          time to maintain momentum in the work of river rejuvenation in India.
          Through this program the aim has been set to discuss every small and
          big river of India. This discussion is conducted online. ‘Nadi Ki
          Baat’ is organized on the first Sunday of every month from 12 noon to
          1 pm. The entire discussion is done regarding the river selected for
          discussion. In the discussion, all the representatives working on that
          river and associated with that river are included and they are given
          an opportunity to express their views. The solutions obtained from the
          discussion to solve the current problems of that river are presented
          by the Technical Committee of the Bhartiya Nadi Parishad and efforts
          are also made for its improvement.
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
