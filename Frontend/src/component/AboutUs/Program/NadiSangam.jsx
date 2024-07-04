import React from "react";
import bg from "../../../assets/bg/bgl-9.jpeg";
import { Box, Typography } from "@mui/material";
import MainLayout from "../../Layout/mainLayout";

export default function NadiSangam() {
	return (
		<MainLayout title={"Nadi Sangam"} bgImg={bg} position={"bottom"}>
			<Box p={6}>
				<Typography textAlign={"justify"}>
					A one-day 'Bharatiya Nadi Sangam' is organized every year on
					22 March. This 'Bharatiya Nadi Sangam' is organized in any
					one city of India according to the circumstances. It
					includes all the river lovers associated with the Bhartiya
					Nadi Parishad as well as all the great people who think
					about the river. At the 'Bharatiya Nadi Sangam', where the
					works of the past year are reviewed, plans for the coming
					year are made.
				</Typography>
			</Box>
		</MainLayout>
	);
}
