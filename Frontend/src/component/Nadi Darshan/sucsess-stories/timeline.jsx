import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const ProjectTimeline = ({ phases }) => {
	return (
		<Timeline
			position="alternate"
			sx={{
				flexDirection: "row",
				overflowX: "auto",
				whiteSpace: "nowrap",
			}}
		>
			{phases.map((phase, index) => (
				<TimelineItem
					key={index}
					sx={{ display: "inline-block", minWidth: 200 }}
				>
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
					<TimelineContent>
						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant="h6"
								component="span"
								color="primary"
							>
								{phase.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
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
