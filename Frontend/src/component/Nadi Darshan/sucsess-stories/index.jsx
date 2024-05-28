import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import BeforeAfterPhotos from "./BeforeAfterPhotos";
import Phase from "./phase";
import ProjectTimeline from "./timeline";
import MainLayout from "../../Layout/mainLayout";
import img from "../../../assets/bg/bgl-13.jpeg";
import img1 from "../../../assets/bg/bgl-11.jpeg";
import img2 from "../../../assets/bg/bgl-12.jpeg";
import img3 from "../../../assets/bg/bgl-13.jpeg";


const phases = [
	{ year: 2024,image: img1, title: "Planning", description: "Embracing change is crucial for personal growth and adaptation in a rapidly evolving world. Change, often met with resistance, is an inevitable part of life, pushing individuals out of their comfort zones and into new experiences. It fosters resilience and creativity, enabling people to develop new skills and perspectives. By accepting change, one can find opportunities in challenges and transform setbacks into valuable lessons. It’s important to remain flexible and open-minded, as this mindset not only enhances personal development but also improves problem-solving abilities. Ultimately, change is a powerful catalyst for innovation, progress, and a more fulfilling life." },
	{ year: 2025,image: img2, title: "Design", description: "Embracing change is crucial for personal growth and adaptation in a rapidly evolving world. Change, often met with resistance, is an inevitable part of life, pushing individuals out of their comfort zones and into new experiences. It fosters resilience and creativity, enabling people to develop new skills and perspectives. By accepting change, one can find opportunities in challenges and transform setbacks into valuable lessons. It’s important to remain flexible and open-minded, as this mindset not only enhances personal development but also improves problem-solving abilities. Ultimately, change is a powerful catalyst for innovation, progress, and a more fulfilling life." },
	{ year: 2026,image: img3, title: "Development", description: "Embracing change is crucial for personal growth and adaptation in a rapidly evolving world. Change, often met with resistance, is an inevitable part of life, pushing individuals out of their comfort zones and into new experiences. It fosters resilience and creativity, enabling people to develop new skills and perspectives. By accepting change, one can find opportunities in challenges and transform setbacks into valuable lessons. It’s important to remain flexible and open-minded, as this mindset not only enhances personal development but also improves problem-solving abilities. Ultimately, change is a powerful catalyst for innovation, progress, and a more fulfilling life." },
	{ year: 2027,image: img, title: "Testing", description: "Embracing change is crucial for personal growth and adaptation in a rapidly evolving world. Change, often met with resistance, is an inevitable part of life, pushing individuals out of their comfort zones and into new experiences. It fosters resilience and creativity, enabling people to develop new skills and perspectives. By accepting change, one can find opportunities in challenges and transform setbacks into valuable lessons. It’s important to remain flexible and open-minded, as this mindset not only enhances personal development but also improves problem-solving abilities. Ultimately, change is a powerful catalyst for innovation, progress, and a more fulfilling life." },
	{ year: 2028,image: img1, title: "Deployment", description: "Embracing change is crucial for personal growth and adaptation in a rapidly evolving world. Change, often met with resistance, is an inevitable part of life, pushing individuals out of their comfort zones and into new experiences. It fosters resilience and creativity, enabling people to develop new skills and perspectives. By accepting change, one can find opportunities in challenges and transform setbacks into valuable lessons. It’s important to remain flexible and open-minded, as this mindset not only enhances personal development but also improves problem-solving abilities. Ultimately, change is a powerful catalyst for innovation, progress, and a more fulfilling life." },
];

const beforeAfter = {
	before: "url_to_before_image",
	after: "url_to_after_image",
};

const SuccessStories = () => {
	return (
		<MainLayout title={"Success Stories"} bgImg={img} position={"center"}>
			<Box p={6}>
                <ProjectTimeline phases={phases} />
			</Box>
			{/* <BeforeAfterPhotos
					before={beforeAfter.before}
					after={beforeAfter.after}
				/> */}
		</MainLayout>
	);
};

export default SuccessStories;
