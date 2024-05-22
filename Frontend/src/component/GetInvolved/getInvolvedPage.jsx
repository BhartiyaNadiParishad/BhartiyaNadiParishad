import React from "react";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import img from "../../assets/bg15.jpg";
import BG from "../../assets/bg25.jpg";
import volunteerImg from "../../assets/websitePic/volunteer.jpeg";
import internshipImg from "../../assets/websitePic/Internship.jpeg";
import membershipImg from "../../assets/websitePic/membership.jpeg";
import CustomCard from "./customCard";
import MainLayout from "../Layout/mainLayout";

export default function GetInvolvedPage() {
	return (
		<MainLayout>
			<Box
				sx={{
					overflow: "hidden",
					backgroundImage: `url(${BG})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Box bgcolor={"#00000085"} padding={"220px 40px 80px 40px"}>
					<Typography
						gutterBottom
						variant="h4"
						fontWeight={"bold"}
						textAlign={"center"}
						color="white"
					>
						{" "}
						Explore opportunity
					</Typography>
					<Typography
						mb={"20px"}
						variant="h6"
						textAlign={"justify"}
						color={"white"}
					>
						A person who is concerned about rivers in any way can be
						a member of the BNP family or a participant in it. There
						will be no difference of religion, caste, gender, color,
						region, and language in this. We all are Indians, and we
						love the richness of our rivers, people who believe in
						this idea can be partners of the BNP in any form. This
						organization is for everyone and for everyone. In this,
						everyone has the freedom to express their ideas and
						implement them. By associating with the BNP, we have
						resolved to make our country river rich. A river loving
						organization or individual can join the BNP in all two
						forms - member and volunteer. For this he will have to
						complete the formalities of the prescribed procedure of
						the BNP.
					</Typography>
				</Box>
			</Box>
			<Grid container spacing={3} padding={"5%"}>
				<Grid item md={4} xs={12}>
					<CustomCard
						image={membershipImg}
						title={"Membership"}
						content={
							"Bharatiya Nadi Paridhad offers an invaluable opportunity for individuals passionate about conserving India's rivers to join their membership program. Aspiring members gain access to a wealth of resources and networking avenues, fostering a community dedicated to river preservation."
						}
						link={"/membership"}
						button={"Join"}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomCard
						image={volunteerImg}
						title={"Volunteering"}
						content={
							"Bharatiya Nadi Paridhad offers an invaluable opportunity for individuals passionate about conserving India's rivers to join their membership program. Aspiring members gain access to a wealth of resources and networking avenues, fostering a community dedicated to river preservation."
						}
						link={"/volunteer"}
						button={"Join Us"}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomCard
						image={internshipImg}
						title={"Internship"}
						content={
							"Bharatiya Nadi Paridhad offers an invaluable opportunity for individuals passionate about conserving India's rivers to join their membership program. Aspiring members gain access to a wealth of resources and networking avenues, fostering a community dedicated to river preservation."
						}
						link={"/internship"}
						button={"Apply"}
					/>
				</Grid>
			</Grid>

			<Box
				sx={{
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
					backgroundPosition: "center ",
					color: "white",
				}}
			>
				<Box bgcolor={"#00000085"} padding={"60px 5%"}>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "bold",
							textAlign: "justify",
							marginBottom: "10px",
						}}
					>
						“For 21 years, River Network has played an essential
						role in guiding our organization’s growth in strategic
						planning, fundraising, building leaders, and
						professional development skills. River Network also
						brings Southeastern groups together. I don’t know what
						we would do without River Network. “
					</Typography>
					<Typography
						sx={{
							fontWeight: "bold",
							fontSize: "20px",
						}}
					>
						Cindy Lowry
					</Typography>
					<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
						Alabama Rivers Alliance
					</Typography>
				</Box>
			</Box>
		</MainLayout>
	);
}
