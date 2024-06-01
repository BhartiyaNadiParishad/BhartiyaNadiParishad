import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Quote() {
	const { t } = useTranslation();
	return (
		<Box
			py={7}
			px={2}
			sx={{ background: "#1cabe2" }}
			// sx={{ backgroundColor: "#f22f2" }}
		>
			<Typography
				variant="h5"
				style={{
					fontSize: "28px",
					fontWeight: "bold",
					color: "white",
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
					color: "white",
				}}
			>
				<q>{t('quote')}</q>
			</Typography>
		</Box>
	);
}
