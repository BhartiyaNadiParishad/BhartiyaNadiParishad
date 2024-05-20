import React from "react";
import Card from "./Layout/card";
import imgBG from "../assets/bg12.jpg";
import Icon1 from "../assets/Icons/1.png";
import Icon2 from "../assets/Icons/2.png";
import Icon3 from "../assets/Icons/3.png";
import Icon4 from "../assets/Icons/4.png";
import Icon5 from "../assets/Icons/5.png";
import Icon6 from "../assets/Icons/6.png";
import img from "../assets/bg22.jpg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "./Layout/mainLayout";

const data = [
	{
		number: "1",
		title: "River Award",
		description:
			"The 'Nadh Upasak Award' will be given to the two best efforts made every year at the government and non-government levels for river rejuvenation in the country. In this award, Rs 50 thousand, certificate and memento will be given. For this award, every participant can send information regarding the river rejuvenation efforts made every year between January 1 and December 31 under the prescribed response. Applications for the award can be sent in both institutional and individual categories. Applications for the award can be sent to the Award Committee of the BNP between 1st January to 31st January every year. This award will be given every year on 22 March.",
		img: Icon1,
	},
	{
		number: "2",
		title: "River Symposium",
		description:
			"A one-day 'Bharatiya Nadi Sangam' is organized every year on 22 March. This 'Bharatiya Nadi Sangam' is organized in any one city of India according to the circumstances. It includes all the river lovers associated with the BNP as well as all the great people who think about the river. At the 'Bharatiya Nadi Sangam', where the works of the past year are reviewed, plans for the coming year are made.",
		img: Icon2,
	},
	{
		number: "3",
		title: "River Fellowship",
		description:
			"‘Bhagirath River Fellowship’ is provided by the BNP for river research in India. In this, this fellowship is provided for detailed study of any river of the country. In this fellowship, the river lover receiving the fellowship is expected to present the scientific aspect of the solution to the problems of the river including the complete information about the river (river ancient history, legends, current conditions, and information about the river basin). One lakh rupee is provided in this fellowship. To get the fellowship, your application can be sent to the BNP Secretariat from 1st January to 25th January every year. Fellowship work will have to be completed every year from 1st February to 30th April and a copy of the same will have to be submitted to the BNP Secretariat.",
		img: Icon3,
	},
	{
		number: "4",
		title: "River Talk",
		description:
			"The BNP will organize ‘River Talks’ from time to time to maintain momentum in the work of river rejuvenation in India. Through this program the aim has been set to discuss every small and big river of India. This discussion is conducted online. ‘Nadi Ki Baat’ is organized on the first Sunday of every month from 12 noon to 1 pm. The entire discussion is done regarding the river selected for discussion. In the discussion, all the representatives working on that river and associated with that river are included and they are given an opportunity to express their views. The solutions obtained from the discussion to solve the current problems of that river are presented by the Technical Committee of the BNP and efforts are also made for its improvement.",
		img: Icon4,
	},
	{
		number: "5",
		title: "River Research Centre",
		description:
			"A river research centre (Grassroot Academy of River) is being established by the BNP. This centre is being established on the banks of river Ganga in the historical city of Hastinapur in Uttar Pradesh or Haridwar in Uttarakhand. While there will be studies related to rivers, practical training on river rejuvenation will also be given here. This centre will be a unique repository of river knowledge. Here, while scientific understanding of the river can be developed, religious, spiritual, and cultural knowledge of the river can also be learned. Through the River Research Centre, where the techniques for keeping the rivers flowing clean and uninterrupted will be taught, river warriors will also be created from here who will go into the society and work for the betterment of the rivers. The target for complete establishment of the river research centre has been fixed for December 2024.",
		img: Icon5,
	},
	{
		number: "6",
		title: "River Research YATRA",
		description:
			"From time to time, river research trips will be organised under the ‘Know Your River’ program to know your rivers. While this will provide an opportunity to know and understand the current scenario of the rivers, we will also get to know the ancient knowledge and legends of the rivers regarding the rivers. Under the River Yatra, stay programs will also be made in the villages, towns and cities along the riverbanks. With this, the communities living on the banks of the river will get various information regarding the river which will be helpful in the work of river revitalization. Through river tours, the society living on the riverbanks will also be made aware of their river. These journeys will also be documented.",
		img: Icon6,
	},
];

export default function ProgramPage() {
	return (
		<>
			<MainLayout>
				<Box
					display={"flex"}
					justifyContent={"center"}
					paddingBottom={33}
					alignItems={"flex-end"}
					sx={{
						// backgroundImage: `url(${imgBG})`,
						// backgroundSize: "cover",
						// backgroundPosition: "center ",
            backgroundColor: "#daf0fd",
						height: "80vh",
						width: "100%",
					}}
				>
					<Typography
						variant="h4"
						fontWeight={"bold"}
					>
						Our Program
					</Typography>
				</Box>
				<Grid
					container
					px={4}
					spacing={4}
					position={"relative"}
					top={"-200px"}
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
