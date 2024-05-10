import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Box, Paper, Typography } from "@mui/material";
import Faqs from "./faq";
import "../../index.css";
export default function Contact() {
  return (
    <MainLayout>
      <Box
        sx={{
          position: "relative",
          padding: "25px 0",
          overflow: "hidden", // Ensure the drops stay within the container
        }}
      >
        {/* Waves background */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0%",
            width: "100%",
            height: "50%",
            background: `linear-gradient(to bottom, #a9e0ff, #80aaf5, #5c91d6, #3d76b8, #2b5e9c, #204c82, #183b6b)`,
            zIndex: -1, // Ensure waves stay behind the content
            opacity: 0.7, // Adjust opacity as needed
            animation: "wave 7s infinite alternate",
          }}
        ></Box>

        <Box
          sx={{
            position: "absolute",
            top: "8%",
            left: "0%",
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom, #a9e0ff, #80aaf5, #5c91d6, #3d76b8, #2b5e9c, #204c82, #183b6b)`,
            zIndex: -1, // Ensure waves stay behind the content
            opacity: 0.7, // Adjust opacity as needed
            animation: "wave 5s infinite alternate",
          }}
        ></Box>
        {/* Drops */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50%",
            zIndex: -1, // Ensure drops stay behind the content
            pointerEvents: "none", // Ensure drops don't interfere with content
          }}
        >
          {/* InBoxidual drops */}
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                borderRadius: "50%",
                animation: "drop 1s infinite alternate",
                opacity: 0.1, // Adjust opacity as needed
                width: "25px",
                height: "30px",
                top: `${Math.random() * 100}%`, // Randomize drop position
                left: `${Math.random() * 100}%`, // Randomize drop position
                transform: "translate(-50%, -50%)", // Center the drop
              }}
            ></Box>
          ))}
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#1364ad"
          mb={3}
          sx={{ textAlign: "center" }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: { xs: "20px", md: "30px" },
            paddingBottom: "40px",
            maxWidth: { xs: "100%", md: "100%" },
            overflow: "hidden",
            marginBottom: { xs: "10px", md: "20px" },
            borderRadius: "10px",
            backgroundColor: "linear-gradient(to bottom, #a9e0ff, #80aaf5)", // Semi-transparent white to enhance readability
            // boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for depth
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: { xs: "20px", md: "30px" },
              paddingBottom: "40px",
              maxWidth: { xs: "100%", md: "100%" },
              overflow: "hidden",
              marginBottom: { xs: "10px", md: "20px" },
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "calc(30% - 15px)",
                  padding: "20px 40px",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#1364ad" mb={1}>
                Registered Office
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                Village and Post – Poothi <br />
                Tehsil – Mawana <br />
                District – Meerut, Pin – 250406 <br />
                Uttar Pradesh - India
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1364ad"
                mt={3}
                mb={1}
              >
                Working Office
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                Ist Floor, Samrat Shopping Mall <br />
                Garh Road, Meerut, <br />
                Pin – 250001 <br />
                Uttar Pradesh – India <br />
              </Typography>
              <Typography variant="body1">
                <strong>Phone -</strong> 0121-3596749 <br />
                <strong>Email:</strong> info@bhartiyanadiparishad.org
              </Typography>
            </Box>
            <Box
              elevation={1}
              sx={{
                width: { xs: "100%", md: "calc(60% - 15px)" },
                marginTop: { xs: "20px", md: 0 },
                paddingTop: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1364ad"
                mb={2}
                textAlign="center"
              >
                FAQs
              </Typography>
              <Faqs />
            </Box>
          </Box>
          {/* Your existing content goes here */}
          {/* ... */}
        </Box>
      </Box>
      {/* <Box
        sx={{
          background: "linear-gradient(to bottom, #a9e0ff, #80aaf5)",
          padding: "25px 0",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#1364ad"
          mb={3}
          sx={{ textAlign: "center" }}
        >
          Contact Us
        </Typography>
      </Box> */}
    </MainLayout>
  );
}
