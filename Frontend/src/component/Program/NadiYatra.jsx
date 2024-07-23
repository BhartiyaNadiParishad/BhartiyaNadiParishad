import React from "react";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-12.jpeg";
import { Grid, Box, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";

export default function NadiYatra() {
  return (
    <MainLayout title={"Nadi Shoudh Yatra"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} fontSize={"20px"}>
          From time to time, river research trips will be organised under the
          ‘Know Your River’ program to know your rivers. While this will provide
          an opportunity to know and understand the current scenario of the
          rivers, we will also get to know the ancient knowledge and legends of
          the rivers regarding the rivers. Under the River Yatra, stay programs
          will also be made in the villages, towns and cities along the
          riverbanks. With this, the communities living on the banks of the
          river will get various information regarding the river which will be
          helpful in the work of river revitalization. Through river tours, the
          society living on the riverbanks will also be made aware of their
          river. These journeys will also be documented.
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
