import React from "react";
import Card from "./Layout/card";
import imgBG from "../assets/bg15.jpg";
import Icon1 from "../assets/Icons/1.png";
import Icon2 from "../assets/Icons/2.png";
import Icon3 from "../assets/Icons/3.png";
import Icon4 from "../assets/Icons/4.png";
import Icon5 from "../assets/Icons/5.png";
import Icon6 from "../assets/Icons/6.png";
import Icon7 from "../assets/Icons/partners.png";
import Icon8 from "../assets/Icons/8.png";
import Icon9 from "../assets/Icons/9.png";
import img from "../assets/bg22.jpg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "./Layout/mainLayout";

const data = [
	{
		title: "River Award",
		description:
			"The 'Nadh Upasak Award' will be given to the two best efforts made every year at the government and non-government levels for river rejuvenation in the country. In this award, Rs 50 thousand, certificate and memento will be given. For this award, every participant can send information regarding the river rejuvenation efforts made every year between January 1 and December 31 under the prescribed response. Applications for the award can be sent in both institutional and individual categories. Applications for the award can be sent to the Award Committee of the BNP between 1st January to 31st January every year. This award will be given every year on 22 March.",
		img: Icon1,
	},
	{
		title: "River Symposium",
		description:
			"A one-day 'Bharatiya Nadi Sangam' is organized every year on 22 March. This 'Bharatiya Nadi Sangam' is organized in any one city of India according to the circumstances. It includes all the river lovers associated with the BNP as well as all the great people who think about the river. At the 'Bharatiya Nadi Sangam', where the works of the past year are reviewed, plans for the coming year are made.",
		img: Icon2,
	},
	{
		title: "River Fellowship",
		description:
			"‘Bhagirath River Fellowship’ is provided by the BNP for river research in India. In this, this fellowship is provided for detailed study of any river of the country. In this fellowship, the river lover receiving the fellowship is expected to present the scientific aspect of the solution to the problems of the river including the complete information about the river (river ancient history, legends, current conditions, and information about the river basin). One lakh rupee is provided in this fellowship. To get the fellowship, your application can be sent to the BNP Secretariat from 1st January to 25th January every year. Fellowship work will have to be completed every year from 1st February to 30th April and a copy of the same will have to be submitted to the BNP Secretariat.",
		img: Icon3,
	},
	{
		title: "River Talk",
		description:
			"The BNP will organize ‘River Talks’ from time to time to maintain momentum in the work of river rejuvenation in India. Through this program the aim has been set to discuss every small and big river of India. This discussion is conducted online. ‘Nadi Ki Baat’ is organized on the first Sunday of every month from 12 noon to 1 pm. The entire discussion is done regarding the river selected for discussion. In the discussion, all the representatives working on that river and associated with that river are included and they are given an opportunity to express their views. The solutions obtained from the discussion to solve the current problems of that river are presented by the Technical Committee of the BNP and efforts are also made for its improvement.",
		img: Icon4,
	},
	{
		title: "River Research Centre",
		description:
			"A river research centre (Grassroot Academy of River) is being established by the BNP. This centre is being established on the banks of river Ganga in the historical city of Hastinapur in Uttar Pradesh or Haridwar in Uttarakhand. While there will be studies related to rivers, practical training on river rejuvenation will also be given here. This centre will be a unique repository of river knowledge. Here, while scientific understanding of the river can be developed, religious, spiritual, and cultural knowledge of the river can also be learned. Through the River Research Centre, where the techniques for keeping the rivers flowing clean and uninterrupted will be taught, river warriors will also be created from here who will go into the society and work for the betterment of the rivers. The target for complete establishment of the river research centre has been fixed for December 2024.",
		img: Icon5,
	},
	{
		title: "River Research YATRA",
		description:
			"From time to time, river research trips will be organised under the ‘Know Your River’ program to know your rivers. While this will provide an opportunity to know and understand the current scenario of the rivers, we will also get to know the ancient knowledge and legends of the rivers regarding the rivers. Under the River Yatra, stay programs will also be made in the villages, towns and cities along the riverbanks. With this, the communities living on the banks of the river will get various information regarding the river which will be helpful in the work of river revitalization. Through river tours, the society living on the riverbanks will also be made aware of their river. These journeys will also be documented.",
		img: Icon6,
	},
	{
		title: "Field Actions",
		description:
			"Through the BNP, river rejuvenation models have been developed for the river warriors engaged in the rejuvenation of their rivers in different parts of the country, which is helping them in their river work. Apart from this, a system has also been developed by the BNP in which any river warrior can solve his problems through the technical committee of the BNP. Some models of river rejuvenation have also been developed by the BNP, based on which successful efforts have been made at the origin of some rivers like Eastern Kali and Neem. The efforts of Neem River were told to the entire country by Honorable Prime Minister Shri Narendra Modi in the 102nd episode of his ‘Mann Ki Baat’ program on June 18, 2023. In different states of India, good efforts are being made for river revitalization by river activists in different ways, privately and with government or other collaboration. BNP is providing technical support to such river rejuvenation efforts. This is increasing accuracy and speed in their work. BNP promotes such works which are being done at the grassroots level for the betterment of rivers. The BNP priorities also include conducting and helping in conducting studies on the adverse effects of floods, droughts, and pollution from time to time.",
		img: Icon7,
	},
	{
		title: "Research & Development",
		description:
			"Finding policy solutions to any problem related to rivers is part of the main work of the BNP. In India, thinking about rivers has increased at both the society and government levels. Due to this thinking, efforts are being made continuously through governments at the policy level to find solutions to the problems of rivers. The BNP is collaborating with various state governments in preparing policy documents on river related issues. While India's river system extends outside India to Pakistan, China, and Bangladesh, it also extends to various states within India. In such a situation, there are treaties established with other countries regarding rivers and some rules and regulations regarding the rights of rivers between the states of India. The BNP is ready to play its role in finalizing the agreements.",
		img: Icon8
		},
	{
		title: "Community Engagement",
		description:
			"While India has a physical relationship with the rivers, India also has a deep spiritual connection with the rivers. There is still a greater need to spread knowledge regarding rivers in India. Efforts are also being made by the BNP to increase the understanding of all aspects of Indian rivers among every person of India and to re-establish their connection with their rivers. For this, a river philosophy has been developed by the BNP, encompassing the Indian river system within its scope. Through river darshan, any person from India and abroad can know and understand the river system of India. New methods have been developed through river philosophy to understand the rivers of India and its related aspects in depth and easily. River researchers can take help in their research work through the river philosophy developed through the BNP. Any river in the country and all the subjects related to it can be easily understood through NADI DARSHAN. River Darshan will prove helpful in the work being done for river rejuvenation in the country by both society and government levels. Various types of public awareness programs are conducted by the BNP to further increase the love and respect for the rivers of the country in society.",
		img: Icon9
		},
];

export default function ProgramPage() {
	return (
		<>
			<MainLayout>
				<Box
					sx={{
						backgroundImage: `url(${imgBG})`,
						backgroundSize: "cover",
						backgroundPosition: "center ",
					}}
				>
					<Box bgcolor={"#00000059"} padding={"18% 40px 15% 40px"}>
						<Typography
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
							color={"white"}
						>
							Our Program
						</Typography>
					</Box>
				</Box>
				<Grid
					container
					px={4}
					spacing={4}
					position={"relative"}
					top={"-100px"}
				>
					{data.map((item, index) => (
						<Grid item md={4} xs={12} key={index}>
							<Paper elevation={2} sx={{ height: "100%" }}>
								<Box
									sx={{
										backgroundImage: `url(${img})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								>
									<Card
										title={item.title}
										icon={item.img}
										number={item.number}
									/>
								</Box>
								<Box p={4}>
									<Typography
										variant="h6"
										textAlign={"justify"}
										fontSize={"16px"}
									>
										{item.description}
									</Typography>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</MainLayout>
		</>
	);
}
