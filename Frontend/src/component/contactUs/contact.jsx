import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Box, Paper, Typography } from "@mui/material";
import Faqs from "./faq";
import "../../index.css";
import img from "../../assets/bg20.jpg";
export default function Contact() {
  return (
    <MainLayout>
      <Box
        sx={{
          padding: "220px 20px",
          overflow: "hidden",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          mb={3}
          sx={{ textAlign: "center" }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              padding: "20px 40px",
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            mt={3}
            mb={1}
          >
            Office Address
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "16px" }} color={"white"}>
            Ist Floor, Samrat Shopping Mall <br />
            Garh Road, Meerut, <br />
            Pin – 250001 <br />
            Uttar Pradesh – India <br />
          </Typography>
          <Typography variant="body1" color={"white"} mt={3}>
            <strong>Phone -</strong> 0121-3596749 <br />
            <strong>Email:</strong> info@bhartiyanadiparishad.org
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
}
