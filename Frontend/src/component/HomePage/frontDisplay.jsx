import { Box, Typography } from "@mui/material";
import React from "react";
import video from "../../assets/bg6.mp4";

export default function FrontDisplay() {
  return (
    <Box
      px={4}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "95vh",
        top: "0",
        left: "0",
        overflow: "hidden", // Ensure the video doesn't overflow its container
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          objectFit: "cover", // Similar to background-size: cover
          zIndex: "-1", // Ensure the video is behind the content
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div style={{ paddingTop: "120px" }}>
        <Typography
          mb={1}
          variant="h5"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#ffc500",
            textAlign: "center",
          }}
        >
          <q>समृद्धभारतस्य कृते निर्मलानि निर्बाधानि च नद्यः</q>
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontSize: "28px",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <q>Clean and uninterrupted rivers for prosperous India</q>
        </Typography>
        {/* <Box
          sx={{
            color: "black",
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        >
          <ul
            style={{
              fontSize: "25px",
              display: "flex",
              justifyContent: "space-between",
              width: "100vw",
              padding: "50px 8%",
              textAlign: "center",
            }}
          >
            "Preserving, Nurturing, Sustaining, and Innovating: BHARTIYA NADI
            PARISHAD's Vision for India's Rivers"
            <li>Preserving</li>
            <li>Nurturing</li>
            <li>Sustaining</li>
            <li>Innovating</li>
          </ul>
        </Box> */}
      </div>
    </Box>
  );
}
