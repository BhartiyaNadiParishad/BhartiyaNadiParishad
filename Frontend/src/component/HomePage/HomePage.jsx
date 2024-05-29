import DrawerAppBar from "./drawer";
import Founder from "./founder";
import { Testimonials } from "./testimonial";
import Programs from "./programs";
import GetInvolved from "./getInvolved";
import WorkImpact from "../AboutUs/workImpact";
import Footer from "../footer";
import FrontDisplay from "./frontDisplay";
import Video from "./video";
import Quote from "./quote";
import News from "./news";
import VerticalScroll from "../news/verticalScroll";
import { Box, Button, Fab, colors } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const fabStyle = {
	position: "fixed",
	bottom: 70,
	backgroundColor: "#055fb8",
	borderRadius: 0,
	padding: "16px",
	color: "#fff",
	width: 150,
	"&:hover": {
		color: "#055fb8",
	},
};

const fab = {
	color: "primary",
	sx: fabStyle,
	icon: <AddIcon />,
	label: "Add",
};

export default function HomePage() {
	return (
		<Box sx={{ position: "relative" }}>
			<Fab
				sx={{ ...fab.sx , left: 70 }}
				variant="extended"
				aria-label="get-involved"
			>
				<Link to="/getInvolvedMenu" style={{ textDecoration: "none" }}>
					Get Involved
				</Link>
			</Fab>
			<Fab
				sx={{ ...fab.sx, right: 70 }}
				variant="extended"
				aria-label="get-involved"
			>
				<Link to="/getInvolvedMenu" style={{ textDecoration: "none" }}>
					Take Action
				</Link>
			</Fab>
			<DrawerAppBar />
			<FrontDisplay />
			<Quote />
			<Founder />
			<Video />
			<Testimonials />
			<Programs />
			<News />
			{/* <GetInvolved /> */}
			{/* <WorkImpact /> */}
			<Footer />
		</Box>
	);
}
