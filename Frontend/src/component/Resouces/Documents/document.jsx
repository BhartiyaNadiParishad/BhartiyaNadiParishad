import React from "react";
import PdfViewer from "./pdfViewer";
import file from "../../../assets/Documents/book nadi neeti a5.pdf";
import MainLayout from "../../Layout/mainLayout";
import { Box, Typography } from "@mui/material";
import BG from "../../../assets/background8.jpg";

export default function PdfDocument() {
	const file = "/book nadi neeti a5.pdf";

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
				<Box bgcolor={"#00000085"} padding={"220px 40px 80px 40px"}>
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
				<PdfViewer />
			</Box>
		</MainLayout>
	);
}
