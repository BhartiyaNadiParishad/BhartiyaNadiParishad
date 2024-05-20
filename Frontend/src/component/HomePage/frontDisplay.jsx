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
        width: "100%",
        height: "95vh",
        top: "0",
        left: "0",
        overflow: "hidden", // Ensure the video doesn't overflow its container
      }}
    >
      <video
        autoPlay
        loop
        // muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          objectFit: "cover", // Similar to background-size: cover
          zIndex: "-1", // Ensure the video is behind the content
        }}
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div style={{ paddingTop: "120px" }}>
        <Typography
          mb={1}
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "#f5ff00",
            textAlign: "center",
          }}
        >
          Reviving Rivers, Reviving Hopes
        </Typography>
        <Typography
          variant="h4"
          style={{
            // fontSize: "30px",
            color: "#f5ff00",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Ecosystem Revitalization
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
