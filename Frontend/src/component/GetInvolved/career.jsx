import React from "react";
import MainLayout from "../Layout/mainLayout";
import bgImg from "../../assets/bg/bgl-15.jpeg";
import {
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	Box,
	Avatar,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

const jobs = [
	{
		title: "Software Engineer",
		description:
			"Develop and maintain web applications using React and Node.js.",
		location: "New York, NY",
	},
	{
		title: "Product Manager",
		description:
			"Lead the product team to deliver excellent user experiences.",
		location: "San Francisco, CA",
	},
	{
		title: "UX Designer",
		description: "Design user interfaces with a focus on user experience.",
		location: "Austin, TX",
	},
	{
		title: "Software Engineer",
		description:
			"Develop and maintain web applications using React and Node.js.",
		location: "New York, NY",
	},
	{
		title: "Product Manager",
		description:
			"Lead the product team to deliver excellent user experiences.",
		location: "San Francisco, CA",
	},
	{
		title: "UX Designer",
		description: "Design user interfaces with a focus on user experience.",
		location: "Austin, TX",
	},
];

export default function Career() {
	return (
		<MainLayout>
			<Box
				height={"80vh"}
				sx={{
					backgroundImage: `url(${bgImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Box
					px={5}
					height={"100%"}
					sx={{
						bgcolor: "#00000087",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						color: "white",
						paddingTop: "150px",
					}}
				>
					<Typography variant="h2" fontWeight={"bold"} gutterBottom>
						Bhartiya Nadi Parishad
					</Typography>
					<Typography variant="h5" mb={5}>
						Discover exciting opportunities and be part of a dynamic
						team.
					</Typography>
				</Box>
			</Box>
			<Box p={6} bgcolor={"#f2f2f2"}>
				<Box>
					<Typography variant="h4" align="center">
						Join Our Team
					</Typography>
					<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						paragraph
					>
						Explore current job openings and find a role that suits
						you.
					</Typography>
				</Box>
				<Grid container spacing={5} py={6}>
					{jobs.map((job, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Card>
								<CardContent>
									<Typography variant="h5" component="h2">
										{job.title}
									</Typography>
									<Typography color="textSecondary">
										{job.location}
									</Typography>
									<Typography variant="body2" component="p">
										{job.description}
									</Typography>
									<Box mt={2}>
										<Link to="/internship">
											<Button
												variant="contained"
												color="primary"
											>
												Apply Now
											</Button>
										</Link>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</MainLayout>
	);
}
