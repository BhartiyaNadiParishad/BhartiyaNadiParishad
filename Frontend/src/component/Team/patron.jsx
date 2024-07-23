import React from "react";
import TeamList from "./teamList";
import MainLayout from "../Layout/mainLayout";
import { coreTeamData } from "./constant";
import { Box, Typography } from "@mui/material";
import img from "../../assets/bg/bgl6.jpeg" 

export default function Patron() {
	return (
		<>
			<MainLayout title={"Patron"} bgImg={img}>
				<Box p={8} sx={{ backgroundColor: "#f2f2f2" }}>
					{/* <TeamList data={coreTeamData} /> */}
                    <Typography>
                    The gentleman will soon join the role of patron of the Bhartiya Nadi Parishad.
                    </Typography>
				</Box>
			</MainLayout>
		</>
	);
}
