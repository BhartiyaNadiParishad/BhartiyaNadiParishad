import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Phase = ({ title, description }) => {
	return (
		<Grid item xs={12} sm={6} md={12/5}>
			<Card sx={{ borderTop: "5px solid #1976d2" }}>
				<CardContent>
					<Typography variant="h5" component="div" color="primary">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Phase;
