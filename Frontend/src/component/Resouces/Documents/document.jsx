import React from "react";
import PDFPreview from "./pdfViewer";
// import file from "../../../assets/Documents/book nadi neeti a5.pdf";
import MainLayout from "../../Layout/mainLayout";
import { Box, Typography } from "@mui/material";
import BG from "../../../assets/background8.jpg";

export default function PdfDocument() {
  return (
    <MainLayout>
      <Box
        sx={{
          overflow: "hidden",
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Box bgcolor={"#00000085"} padding={"250px 40px 80px 0px"}>
          <Typography
            gutterBottom
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            color="white"
          >
            {" "}
            Documents
          </Typography>
        </Box>
      </Box>
      <Box padding={"40px"}>
        <PDFPreview />
      </Box>
    </MainLayout>
  );
}
