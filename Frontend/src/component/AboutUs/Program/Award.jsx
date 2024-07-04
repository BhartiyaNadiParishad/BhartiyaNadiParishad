import React from "react";
import bg from "../../../assets/bg/bgl-9.jpeg";
import { Box, Typography } from "@mui/material";
import MainLayout from "../../Layout/mainLayout";

export default function Award() {
	return (
		<MainLayout title={"Award"} bgImg={bg} position={"bottom"}>
			<Box p={6}>
				<Typography textAlign={"justify"}>
					The 'Nadh Upasak Award' will be given to the two best
					efforts made every year at the government and non-government
					levels for river rejuvenation in the country. In this award,
					Rs 50 thousand, certificate and memento will be given. For
					this award, every participant can send information regarding
					the river rejuvenation efforts made every year between
					January 1 and December 31 under the prescribed response.
					Applications for the award can be sent in both institutional
					and individual categories. Applications for the award can be
					sent to the Award Committee of the Bhartiya Nadi Parishad
					between 1st January to 31st January every year. This award
					will be given every year on 22 March.
				</Typography>
			</Box>
		</MainLayout>
	);
}
