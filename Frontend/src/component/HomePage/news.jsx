import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VerticalScroll from "../news/verticalScroll";
import NewsVideo from "./newsVideo";
import { useTranslation } from "react-i18next";
import img from "../../assets/bg/bgl-14.jpeg";

const newsItems = [
  "President of Bhartiya Nadi Parishad Raman Kant has been included in the committee constituted by Hon'ble NGT for the revival of Sonali River.",
  "Shooter Dadi Smt. Prakashi Tomar has sent her best wishes to Indian Rivers Council.",
  "The team of Bhartiya Nadi Parishad inspected the work of Gagadiya River revival being done under the leadership of Dholakia Foundation founder Shri Savji Dholakia and is providing technical support in this work.",
  "The work of Baya River revival is being taken forward by the coordinator of Bhartiya Nadi Parishad of Bihar state.",
];

const storyItems = [
  "NAAM Foundation",
  "Dholakia Foundation",
  "Baya River",
  "Bainsli River",
  "Ravindra Singhal",
  "Sambhal Janpad",
  "Noon River",
  "Neem River",
  "Kali East River",
  "Rampur Rivers",
  "Kanhan River",
  "Hindon River",
];

const videos = [
  "https://youtu.be/ZC_l58Fo4Dk?feature=shared",
  "https://youtu.be/vxkejkEin6Y?feature=shared",
];

export default function News() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container spacing={3} px={4} justifyContent={"space-between"}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box display={"flex"} flexDirection={"column"} rowGap={3}>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={"#1cabe2"}
                textAlign={"center"}
              >
                {t("News.1.title")}
              </Typography>
              <VerticalScroll
                itemHeight={80}
                scrollIntervalTime={4000}
                loopCount={8}
                totalItems={newsItems.length}
              >
                {newsItems.map((news, index) => (
                  <Box
                    key={index}
                    borderBottom={"0.5px solid #1cabe2"}
                    py={2}
                    height={200}
                    display={"flex"}
                    columnGap={2}
                    width={"100%"}
                  >
                    <PlayArrowIcon
                      fontSize="8px"
                      style={{ color: "#1cabe2" }}
                    />
                    <Typography>{news}</Typography>
                  </Box>
                ))}
              </VerticalScroll>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box display={"flex"} flexDirection={"column"} rowGap={3}>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={"#1cabe2"}
                textAlign={"center"}
              >
                {t("News.2.title")}
              </Typography>
              <VerticalScroll
                itemHeight={80}
                scrollIntervalTime={2500}
                loopCount={8}
                totalItems={newsItems.length}
              >
                {storyItems.map((news, index) => (
                  <Box
                    key={index}
                    borderBottom={"0.5px solid #1cabe2"}
                    py={2}
                    height={85}
                    display={"flex"}
                    columnGap={2}
                    width={"100%"}
                  >
                    <PlayArrowIcon
                      fontSize="8px"
                      style={{ color: "#1cabe2" }}
                    />
                    <Typography>{news}</Typography>
                  </Box>
                ))}
              </VerticalScroll>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4.5}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              rowGap={2}
            >
              <Typography variant="h5" fontWeight={"bold"} color={"#1cabe2"}>
                {t("News.3.title")}
              </Typography>
              <VerticalScroll
                itemHeight={300}
                scrollIntervalTime={2500}
                loopCount={4}
                totalItems={2}
              >
                {videos.map((video, index) => (
                  <NewsVideo key={index} video={video} />
                ))}
              </VerticalScroll>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
