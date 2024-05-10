import { Box, Typography } from "@mui/material";
import React from "react";
import video from "../../assets/bgvideo.mp4";

export default function FrontDisplay() {
  return (
    <Box
      px={4}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
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
        {/* Add additional source elements for different video formats if needed */}
      </video>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
        }}
      >
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
            color: "#ffc500",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <q>Clean and uninterrupted rivers for prosperous India</q>
        </Typography>
      </div>
    </Box>
  );
}
