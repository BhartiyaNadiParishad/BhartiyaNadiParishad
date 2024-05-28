import React from "react";
import MainLayout from "../Layout/mainLayout";
import img from "../../assets/bg/bgl6.jpeg";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	Container,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import Contact from "../contactUs/contact";
export default function AboutLogo() {
	return (
		<>
			<MainLayout title={"About logo"} bgImg={img}>
				<Box sx={{ padding: 4, backgroundColor: "#f2f2f2" }}>
					<Box display={"flex"} justifyContent={"center"}>
                
						<img src={logo} height={"250px"} />
                    </Box>
                    <Box display={"flex"} justifyContent={"center"}>
						<List sx={{ maxWidth: "700px" }}>
							<ListItem>
								<ListItemText
									primary="Blue Stream"
									secondary="This blue stream indicates a river originating from the mountains. This clearly gives the impression of a river."
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Sadhu Taking Bath"
									secondary="The sadhu bathing in the river and giving water to the sun is a symbol of the uninterrupted, cleanliness, purity, equality, and tolerance of the river. The sadhu offering water to the sun symbolizes peace, harmony, spiritual strength, and fairness of the river."
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Birds"
									secondary="The 6 birds flying in the sky represent the 6 directions of the entire universe and are an important part of the entire biodiversity."
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Mountains"
									secondary="While the mountains shown in it represent the Himalayas, they also symbolize the home of the river. It has been shown through mountains that mountains are very important for rivers because most of the big rivers flow throughout the year due to the melting of snow."
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Sun"
									secondary="The presence of Sun plays a helpful role in purifying the flow of the river. Sun rays are essential for the entire river system. The speed of the sun is necessary to maintain the purity of the river."
								/>
							</ListItem>
						</List>
					</Box>
				</Box>
			</MainLayout>
		</>
	);
}
