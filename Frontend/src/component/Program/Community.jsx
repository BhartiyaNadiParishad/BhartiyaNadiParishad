import React from "react";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-15.jpeg";
import { Grid, Box, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";

export default function Community() {
  return (
    <MainLayout title={"Community Engagement"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} fontSize={"20px"}>
          While India has a physical relationship with the rivers, India also
          has a deep spiritual connection with the rivers. There is still a
          greater need to spread knowledge regarding rivers in India. Efforts
          are also being made by the Bhartiya Nadi Parishad to increase the
          understanding of all aspects of Indian rivers among every person of
          India and to re-establish their connection with their rivers. For
          this, a river philosophy has been developed by the Bhartiya Nadi
          Parishad, encompassing the Indian river system within its scope.
          Through river darshan, any person from India and abroad can know and
          understand the river system of India. New methods have been developed
          through river philosophy to understand the rivers of India and its
          related aspects in depth and easily. River researchers can take help
          in their research work through the river philosophy developed through
          the Bhartiya Nadi Parishad. Any river in the country and all the
          subjects related to it can be easily understood through NADI DARSHAN.
          River Darshan will prove helpful in the work being done for river
          rejuvenation in the country by both society and government levels.
          Various types of public awareness programs are conducted by the
          Bhartiya Nadi Parishad to further increase the love and respect for
          the rivers of the country in society.
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
