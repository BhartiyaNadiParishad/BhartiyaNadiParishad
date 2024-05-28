import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const BeforeAfterPhotos = ({ before, after }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Card>
					<CardMedia
						component="img"
						height="200"
						image={before}
						alt="Before"
					/>
					<CardContent>
						<Typography variant="h6">Before</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Card>
					<CardMedia
						component="img"
						height="200"
						image={after}
						alt="After"
					/>
					<CardContent>
						<Typography variant="h6">After</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default BeforeAfterPhotos;
