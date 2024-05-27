import { Grid, Box, Typography } from "@mui/material";

const ImageSection = ({ imageSrc, content, textColor }) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<img
					src={imageSrc}
					style={{ height: "100%", objectFit: "cover" }}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography
					variant="h6"
					fontSize={"18px"}
					textAlign={"justify"}
					color={textColor}
				>
					{content}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default ImageSection;
