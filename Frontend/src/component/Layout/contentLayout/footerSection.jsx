import { Box, Typography } from "@mui/material";

const FooterSection = ({ backgroundImage, content ,textColor }) => {
	return (
		<Box
			minHeight={300}
			sx={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Box p={"18px 15%"}>
				<Typography
					variant="h6"
					fontSize={"18px"}
					textAlign={"justify"}
                    color={textColor}
				>
					{content}
				</Typography>
			</Box>
		</Box>
	);
};

export default FooterSection;
