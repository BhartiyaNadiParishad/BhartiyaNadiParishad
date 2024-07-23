import React, { useState } from "react";
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
	Modal,
	TextField,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import IForm from "./IForm";

const jobs = [
	{
		title: "Coordinator (Documentation)",
		description:
			"Minimum one year experience of river and water related work.",
		salary: "Stipend - 20K per month",
	},
	{
		title: "Coordinator (Field Work)",
		description:
			"Minimum one year experience of river and water related work.",
		salary: "Stipend - 20K per month",
	},
];

export default function Career() {
	const [open, setOpen] = useState(false);
	const [selectedJob, setSelectedJob] = useState(null);

	const handleOpen = (job) => {
		setSelectedJob(job);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedJob(null);
	};

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
				<Grid container spacing={5} py={6} justifyContent={"center"}>
					{jobs.map((job, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Card p={5}>
								<CardContent>
									<Typography variant="h5" component="h2" mb={1}>
										{job.title}
									</Typography>
									<Typography variant="body2" mb={1}>
										{job.salary}
									</Typography>
									<Typography color="textSecondary" component="p">
										{job.description}
									</Typography>
									<Box mt={2}>
										<Button
											variant="contained"
											sx={{backgroundColor: "#1cabe2"}}
											onClick={() => handleOpen(job)}
										>
											Apply Now
										</Button>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
			<Modal open={open} onClose={handleClose} sx={{maxWidth: "90%"}}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: "90vh",
						overflow: "auto",
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 2,
					}}
				>
					<Box display="flex" justifyContent="flex-end" alignItems="flex-end" flexDirection={"column"}>
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
						<IForm service={selectedJob?.title} />
					</Box>
				</Box>
			</Modal>
		</MainLayout>
	);
}
