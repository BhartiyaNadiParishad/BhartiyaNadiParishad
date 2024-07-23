import React from "react";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-13.jpeg";
import { Grid, Box, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";

export default function NadiShoudhKendra() {
  return (
    <MainLayout title={"Nadi Shoudh Kendra"} bgImg={bg} position={"bottom"}>
      <Box p={6}>
        <Typography textAlign={"justify"} fontSize={"20px"}>
          A river research centre (Grassroot Academy of River) is being
          established by the Bhartiya Nadi Parishad. This centre is being
          established on the banks of river Ganga in the historical city of
          Hastinapur in Uttar Pradesh or Haridwar in Uttarakhand. While there
          will be studies related to rivers, practical training on river
          rejuvenation will also be given here. This centre will be a unique
          repository of river knowledge. Here, while scientific understanding of
          the river can be developed, religious, spiritual, and cultural
          knowledge of the river can also be learned. Through the River Research
          Centre, where the techniques for keeping the rivers flowing clean and
          uninterrupted will be taught, river warriors will also be created from
          here who will go into the society and work for the betterment of the
          rivers. The target for complete establishment of the river research
          centre has been fixed for December 2024.
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
