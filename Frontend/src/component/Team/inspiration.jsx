import React from "react";
import TeamList from "./teamList";
import MainLayout from "../Layout/mainLayout";
import { Blessings } from "./constant";
import { Box } from "@mui/material";
import img from "../../assets/bg/bgl6.jpeg" 

export default function Inspiration() {
	return (
		<>
			<MainLayout title={"Inspiration"} bgImg={img}>
				<Box p={8} sx={{ backgroundColor: "#f2f2f2" }}>
					<TeamList data={Blessings} />
				</Box>
			</MainLayout>
		</>
	);
}
