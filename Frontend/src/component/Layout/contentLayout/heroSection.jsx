import { Box, Typography } from "@mui/material";

const HeroSection = ({ backgroundImage, title }) => {
	return (
		<Box px={6} pt={6} pb={3}>
			<Box
				mt={"180px"}
				height={400}
				sx={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Box
					sx={{ backgroundColor: "#0833467d" }}
					height={"100%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						color={"white"}
					>
						{title}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;
