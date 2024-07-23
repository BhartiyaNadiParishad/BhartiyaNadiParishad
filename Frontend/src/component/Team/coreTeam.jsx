import React from "react";
import TeamList from "./teamList";
import MainLayout from "../Layout/mainLayout";
import { coreTeamData } from "./constant";
import { Box } from "@mui/material";
import img from "../../assets/bg/bgl6.jpeg" 

export default function CoreTeam() {
	return (
		<>
			<MainLayout title={"Core Team"} bgImg={img}>
				<Box p={8} sx={{ backgroundColor: "#f2f2f2" }}>
					<TeamList data={coreTeamData} />
				</Box>
			</MainLayout>
		</>
	);
}
