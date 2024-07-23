import React from "react";
import img from "../../assets/bg/bgl6.jpeg";
import MainLayout from "../Layout/mainLayout";
import NewsVideo from "../HomePage/newsVideo";
import { Grid } from "@mui/material";

const videos = [
	{
		id: 1,
		url: "https://youtu.be/ZC_l58Fo4Dk?feature=shared",
	},
	{
		id: 2,
		url: "https://youtu.be/ZmDG3vjAlNA?feature=shared",
	},
	{
		id: 3,
		url: "https://youtu.be/BUjY3xK8plg?feature=shared",
	},
    {
		id: 4,
		url: "https://youtu.be/ZC_l58Fo4Dk?feature=shared",
	},
    {
		id: 5,
		url: "https://youtu.be/BUjY3xK8plg?feature=shared",
	},
];

export default function RiverVideo() {
	return (
		<>
			<MainLayout title={"River Videos"} bgImg={img}>
				<Grid container spacing={3} padding={6}>
					{videos.map((video) => (
						<Grid item xs={12} md={4} key={video.id}>
							<NewsVideo video={video.url} />
						</Grid>
					))}
				</Grid>
			</MainLayout>
		</>
	);
}
