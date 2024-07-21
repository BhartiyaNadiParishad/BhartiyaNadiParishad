import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const TreeContainer = styled(Box)({
	position: "relative",
});

const TreeBranch = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	"&::before, &::after": {
		content: '""',
		position: "absolute",
		backgroundColor: "#1cabe2",
	},
	"&::before": {
		top: 0,
		left: "50%",
		width: "2px",
		height: "20px",
	},
	"&::after": {
		top: "20px",
		left: "50%",
		width: "calc(100% - 40px)",
		height: "2px",
	},
	"&:first-of-type::before": {
		display: "none",
	},
	"&:nth-of-type(2)": {
		justifyContent: "flex-start",
	},
	"&:nth-of-type(2)::after": {
		width: "50%",
	},
	"&:nth-of-type(3)": {
		justifyContent: "center",
	},
	"&:nth-of-type(3)::after": {
		width: 0,
	},
	"&:nth-of-type(4)": {
		justifyContent: "flex-end",
	},
	"&:nth-of-type(4)::after": {
		left: "auto",
		right: "50%",
		width: "50%",
	},
}));

const HistoryTree = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Box
					backgroundColor="#acd3fb24"
					padding="30px"
					display="flex"
					justifyContent="center"
				>
					<Typography
						variant="h6"
						fontSize="28px"
						textAlign="justify"
						color="#1cabe2"
					>
						History
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} md={3}>
				<TreeBranch
					sx={{
						backgroundColor: "#1cabe2",
						color: "white",
						padding: "20px",
						height: "100%",
						borderRadius: "10px",
					}}
				>
					<Typography>
						India, the country of rivers, is currently going through
						a difficult phase, causing economic, social, and
						environmental damage. The rivers of the country are
						facing three major problems: <br />
						1. Water shortage <br />
						2. Pollution <br />
						3. Encroachment
					</Typography>
				</TreeBranch>
			</Grid>

			<Grid item xs={12} md={3}>
				<TreeBranch
					sx={{
						backgroundColor: "#1cabe2",
						color: "white",
						padding: "20px",
						height: "100%",
						borderRadius: "10px",
					}}
				>
					<Typography>
						The idea of forming the Bhartiya Nadi Parishad to
						address these issues first started brewing in my mind in
						June 2015, when we faced practical difficulties during
						river rejuvenation work at the grassroots level.
					</Typography>
				</TreeBranch>
			</Grid>

			<Grid item xs={12} md={3}>
				<TreeBranch
					sx={{
						backgroundColor: "#1cabe2",
						color: "white",
						padding: "20px",
						height: "100%",
						borderRadius: "10px",
					}}
				>
					<Typography>
						This idea gained more strength when I came across the
						collective efforts of river rejuvenation being done by
						the Water Keeper Alliance for the rivers of Buffalo
						City, USA, in 2018.
					</Typography>
				</TreeBranch>
			</Grid>

			<Grid item xs={12} md={3}>
				<TreeBranch
					sx={{
						backgroundColor: "#1cabe2",
						color: "white",
						padding: "20px",
						height: "100%",
						borderRadius: "10px",
					}}
				>
					<Typography>
						The idea took a decisive turn in 2020 during the
						difficult times of COVID-19 when the rivers of the
						country started getting cleaner without any human
						intervention. After preliminary talks with dignitaries
						from various fields engaged in river rejuvenation work
						across the country, the Bhartiya Nadi Parishad was
						constituted on 2 February 2023 under the Indian Trusts
						Act, 1882.
					</Typography>
				</TreeBranch>
			</Grid>
		</Grid>
	);
};

export default HistoryTree;
