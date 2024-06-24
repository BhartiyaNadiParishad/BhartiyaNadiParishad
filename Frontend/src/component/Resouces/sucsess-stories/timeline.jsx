import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const ProjectTimeline = ({ phases }) => {
	return (
		<Timeline position={"alternate-reverse"}>
			{phases.map((phase, index) => (
				<TimelineItem key={index}>
					<TimelineOppositeContent
						color="text.secondary"
						component={"div"}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"flex-end"}
					>
						<Box width={"100%"} p={2}>
							<img
								src={phase.image}
								style={{
									width: "100%",
									height: "300px",
									objectFit: "cover",
								}}
							/>
						</Box>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary" />
						{index < phases.length - 1 && (
							<TimelineConnector
								sx={{
									height: 3,
									backgroundColor: "primary.main",
								}}
							/>
						)}
					</TimelineSeparator>
					<TimelineContent
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"space-around"}
					>
						<Typography
							variant="h5"
							component="span"
							color="primary"
						>
							{phase.year}
						</Typography>
						<Box
							sx={{
								display: "inline-block",
								textAlign: "center",
								padding: 2,
								backgroundColor: "#f9f9f9",
								borderRadius: 1,
								boxShadow: 1,
							}}
						>
							<Typography variant="h5" color="primary" mb={2}>
								{phase.title}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								textAlign={"justify"}
							>
								{phase.description}
							</Typography>
						</Box>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default ProjectTimeline;
