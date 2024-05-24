import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Box, Typography } from "@mui/material";
import TeamList from "./teamList";
import {
  coreTeamData,
  advisoryCouncilData,
  technicalCouncilData,
} from "./constant";
import img from "../../assets/bg/bgI1.jpeg";
import backgroundVideo from "../../assets/bg/bgV1.mov";

export default function Team() {
  return (
    <MainLayout>
      <Box
        sx={{
          width: "100vw",
          height: "70vh",
        }}
      >
        <video
          src={backgroundVideo}
          type="video/mp4"
          width={"100%"}
          height={"100%"}
          autoPlay
          loop
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            objectFit: "cover", // Similar to background-size: cover
            zIndex: "-1", // Ensure the video is behind the content
          }}
          preload="auto"
        />
        <Typography
          variant="h2"
          fontWeight={"bold"}
          textAlign={"center"}
          color="#1e78b3"
          paddingTop={30}
        >
          Our Team
        </Typography>
      </Box>
      <Box
        padding={"0px 30px 30px 30px"}
        display={"flex"}
        rowGap={"40px"}
        flexDirection={"column"}
        sx={{ backgroundColor: "#f2f2f2", color: "#264e79" }}
      >
        <Typography
          variant="h6"
          textAlign={"justify"}
          gutterBottom
          paddingTop={5}
        >
          We are a group of water and river experts who come with years of
          ground experience in river development. Each of the members has been
          actively engaged in their region with various forces to uplift the
          condition of the water situation. Our learning through our various
          experiences from national and international exposure is brought
          forward to Bhartiya Nadi Parishad
        </Typography>
        <Box>
          <TeamList title={"Core Team"} data={coreTeamData} />
          <TeamList title={"Advisory Council"} data={advisoryCouncilData} />
          <TeamList title={"Technical Council"} data={technicalCouncilData} />
        </Box>
      </Box>
    </MainLayout>
  );
}
