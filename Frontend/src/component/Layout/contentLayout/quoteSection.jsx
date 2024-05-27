import { Box, Typography } from "@mui/material";

const QuoteSection = ({
	backgroundImage,
	quoteLine1,
	quoteLine2,
	translation,
}) => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "bottom",
			}}
		>
			<Box
				sx={{
					background:
						"linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
					backdropFilter: "blur(10px)",
					border: "1px solid rgba(255,255,255,0.28)",
				}}
				p={5}
				color={"white"}
			>
				<Typography
					textAlign={"center"}
					variant="h4"
					sx={{ fontWeight: "bold", fontSize: "24px" }}
				>
					{quoteLine1}
				</Typography>
				<Typography
					textAlign={"center"}
					variant="h4"
					sx={{ fontWeight: "bold", fontSize: "24px" }}
					mb={2}
				>
					{quoteLine2}
				</Typography>
				<Typography
					variant="h6"
					sx={{ fontSize: "18px" }}
					textAlign={"justify"}
				>
					{translation}
				</Typography>
			</Box>
		</Box>
	);
};

export default QuoteSection;
