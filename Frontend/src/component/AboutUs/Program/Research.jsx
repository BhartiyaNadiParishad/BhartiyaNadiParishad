import React from "react";
import bg from "../../../assets/bg/bgl-9.jpeg";
import { Box, Typography } from "@mui/material";
import MainLayout from "../../Layout/mainLayout";

export default function Research() {
	return (
		<MainLayout
			title={"Research & Development"}
			bgImg={bg}
			position={"bottom"}
		>
			<Box p={6}>
				<Typography textAlign={"justify"}>
					Finding policy solutions to any problem related to rivers is
					part of the main work of the Bhartiya Nadi Parishad. In
					India, thinking about rivers has increased at both the
					society and government levels. Due to this thinking, efforts
					are being made continuously through governments at the
					policy level to find solutions to the problems of rivers.
					The Bhartiya Nadi Parishad is collaborating with various
					state governments in preparing policy documents on river
					related issues. While India's river system extends outside
					India to Pakistan, China, and Bangladesh, it also extends to
					various states within India. In such a situation, there are
					treaties established with other countries regarding rivers
					and some rules and regulations regarding the rights of
					rivers between the states of India. The Bhartiya Nadi
					Parishad is ready to play its role in finalizing the
					agreements.
				</Typography>
			</Box>
		</MainLayout>
	);
}
