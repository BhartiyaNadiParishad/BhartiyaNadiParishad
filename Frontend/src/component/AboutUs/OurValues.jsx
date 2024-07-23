import React from "react";
import bgImg1 from "../../assets/bg/bgl-12.jpeg";
import bgImg2 from "../../assets/bg/bgl-13.jpeg";
import { Box, Grid, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";
import video from "../../assets/news.mp4";
import { useTranslation } from "react-i18next";

export default function OurValues() {
  const { t } = useTranslation();
  return (
    <>
      <MainLayout
        title={t("MissionVisionValues.mainTitle")}
        bgImg={bgImg1}
        position={"bottom"}
      >
        <Box p={6}>
          <Typography
            variant="h6"
            mb={4}
            textAlign={"justify"}
            color={"#1cabe2"}
          >
            {t("MissionVisionValues.content2")}
          </Typography>
          <Grid container spacing={6}>
            {t("MissionVisionValues.values", {
              returnObjects: true,
            }).map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  height={350}
                  p={4}
                  bgcolor={"#ffffffb7"}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.28)",
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    gutterBottom
                    textAlign={"center"}
                    color={"#0090ca"}
                    mb={2}
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="h6"
                    textAlign={"justify"}
                    color={"#1cabe2"}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MainLayout>
    </>
  );
}
