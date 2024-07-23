import React from "react";
import TeamList from "./teamList";
import MainLayout from "../Layout/mainLayout";
import { Box } from "@mui/material";
import img from "../../assets/bg/bgl6.jpeg" 
import { technicalCouncilData } from "./constant";

export default function TechAdvisors() {
  return (
    <>
      <MainLayout title={"Technical Advisors"} bgImg={img}>
				<Box p={8} sx={{ backgroundColor: "#f2f2f2" }}>
					<TeamList data={technicalCouncilData} />
				</Box>
			</MainLayout>
    </>
  )
}