import { Box, Paper, Typography } from "@mui/material";

export default function Card({ title, description, icon, bgColor, number }) {
	return (
		<>
			<Paper
				elevation={3}
				sx={{
					height: "100%",
				}}
			>
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"flex-start"}
					alignItems={"center"}
					rowGap={2}
					color={"white"}
					p={5}
					sx={{
						backgroundColor: "#051a36",
						height: "100%",
					}}
				>
					{icon && (
						<img
							src={icon}
							alt="members icon"
							height={60}
							width={60}
						/>
					)}
					<Typography
						variant="h5"
						sx={{
							fontSize: "26px",
							fontWeight: "bold",
						}}
					>
						{number}
					</Typography>
					<Typography
						variant="h5"
						fontWeight={"bold"}
						gutterBottom
						textAlign={"center"}
					>
						{title}
					</Typography>
					<Typography
						variant="h6"
						textAlign={"justify"}
						fontSize={"16px"}
					>
						{description}
					</Typography>
				</Box>
			</Paper>
		</>
	);
}
