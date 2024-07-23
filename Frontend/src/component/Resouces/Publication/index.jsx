import React from "react";
import MainLayout from "../../Layout/mainLayout";
import PDFPreview from "../Documents/pdfViewer";
import bgImg from "../../../assets/bg/bgl-13.jpeg";
import { Box } from "@mui/material";
export default function Publication() {
	return (
		<>
			<MainLayout title="Publication" bgImg={bgImg} position={"bottom"}>
				<Box p={6}>
					<PDFPreview />
				</Box>
			</MainLayout>
		</>
	);
}
