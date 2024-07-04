import React from "react";
import bg from "../../../assets/bg/bgl-9.jpeg";
import { Box, Typography } from "@mui/material";
import MainLayout from "../../Layout/mainLayout";

export default function Fellowships() {
	return (
		<MainLayout title={"Fellowship"} bgImg={bg} position={"bottom"}>
			<Box p={6}>
				<Typography textAlign={"justify"}>
					‘Bhagirath River Fellowship’ is provided by the Bhartiya
					Nadi Parishad for river research in India. In this, this
					fellowship is provided for detailed study of any river of
					the country. In this fellowship, the river lover receiving
					the fellowship is expected to present the scientific aspect
					of the solution to the problems of the river including the
					complete information about the river (river ancient history,
					legends, current conditions, and information about the river
					basin). One lakh rupee is provided in this fellowship. To
					get the fellowship, your application can be sent to the
					Bhartiya Nadi Parishad Secretariat from 1st January to 25th
					January every year. Fellowship work will have to be
					completed every year from 1st February to 30th April and a
					copy of the same will have to be submitted to the Bhartiya
					Nadi Parishad Secretariat.
				</Typography>
			</Box>
		</MainLayout>
	);
}
