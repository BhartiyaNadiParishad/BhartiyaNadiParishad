import { Box, Typography } from "@mui/material";
import React from "react";

export default function Quote() {
	return (
		<Box py={7} px={2}>
			<Typography
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
					textAlign: "center",
					fontWeight: "bold",
				}}
			>
				<q>Clean and uninterrupted rivers for prosperous India</q>
			</Typography>
		</Box>
	);
}
