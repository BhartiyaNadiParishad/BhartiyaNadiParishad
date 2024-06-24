import React from "react";
import { Box } from "@mui/material";
import ProjectTimeline from "./timeline";
import MainLayout from "../../Layout/mainLayout";
import img from "../../../assets/bg/bgl-13.jpeg";
import img1 from "../../../assets/bg/bgl-11.jpeg";
import img2 from "../../../assets/bg/bgl-12.jpeg";
import img3 from "../../../assets/bg/bgl-13.jpeg";


const phases = [
	{ year: 2006,image: img1, title: "Hindon River", description: "Raman started his efforts to change the feeling of despair towards small rivers in the country into hope in the year 2006 by doing a technical study of the Hindon River and doing a trek on it. Based on ground experiences of river trekking and technical study, a map of Hindon and its tributaries was prepared, which is used today at all government and non-government levels. During this period, the origins and flow paths of the Hindon and all its tributaries Kali West, Krishna, Nagdeh, Pavdhoi, Chhajjewali, Peerwali, Barsani, Sapolia, Peerwali and Andhakundi were discovered." },
	{ year: 2012,image: img2, title: "East kali River", description: "In the year 2012, Raman completed the technical study of the East Kali River, the main tributary of Ganga, in collaboration with WWF. In the year 2016, the origin of East Kali River was identified in Antwada village of Muzaffarnagar district. With the cooperation of society and administration, 15 hectares of land at the river source was freed from encroachment and the river source was revived by constructing a lake here. At present there is 15 feet of water here. Due to these efforts, East Kali and Hindon rivers were included in the Namami Gange scheme. Due to the efforts made for the East Kali River, Raman was given the National Water Award in the year 2020 by the Ministry of Jal Shakti, Government of India." },
	{ year: 2023,image: img3, title: "Neem River", description: "After finding the origin of NEEM River, the main tributary of Kali River East, in Dattayana village of Hapur district, about 8 hectares of land was freed from the river and a lake was constructed there with the help of society and administration. At present there is about 10 feet of water at the source of NEEM River. The successful efforts made for the revival of NEEM River source were also appreciated by the Honorable Prime Minister of India, Shri Narendra Modi in the 102nd episode of his ‘Mann Ki Baat’ program on June 18, 2023. " },
];


const SuccessStories = () => {
	return (
		<MainLayout title={"Success Stories"} bgImg={img} position={"center"}>
			<Box p={6}>
                <ProjectTimeline phases={phases} />
			</Box>
		</MainLayout>
	);
};

export default SuccessStories;
