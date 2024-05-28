import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import BeforeAfterPhotos from "./BeforeAfterPhotos";
import Phase from "./phase";
import ProjectTimeline from "./timeline";

const phases = [
	{ title: "Planning", description: "Initial planning phase." },
	{ title: "Design", description: "Design phase details." },
	{ title: "Development", description: "Development phase details." },
	{ title: "Testing", description: "Testing phase details." },
	{ title: "Deployment", description: "Deployment phase details." },
];

const beforeAfter = {
	before: "url_to_before_image",
	after: "url_to_after_image",
};

const SuccessStories = () => {
	return (
		<Container>
			<Typography variant="h3" component="h1" gutterBottom>
				Success Stories
			</Typography>
			{/* <Typography variant="h4" component="h2" gutterBottom>
				Work Progress Phases
			</Typography> */}
			<Grid container spacing={3}>
				{phases.map((phase, index) => (
					<Phase
						key={index}
						title={phase.title}
						description={phase.description}
					/>
				))}
			</Grid>
			{/* <Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ marginTop: 4 }}
			>
				Project Timeline
			</Typography> */}
			<ProjectTimeline phases={phases} />
			<Typography
				variant="h4"
				component="h2"
				gutterBottom
				sx={{ marginTop: 4 }}
			>
				Before and After Photos
			</Typography>
			<BeforeAfterPhotos
				before={beforeAfter.before}
				after={beforeAfter.after}
			/>
		</Container>
	);
};

export default SuccessStories;
