import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import img4 from "../../assets/riverDark.jpg";
import img3 from "../../assets/projects.jpg";
import img2 from "../../assets/partners.jpg";
import img1 from "../../assets/members.jpg";
import logo1 from "../../assets/Icons/members.png";
import logo2 from "../../assets/Icons/partners.png";
import logo3 from "../../assets/Icons/projects.png";
import logo4 from "../../assets/Icons/river.png";
import { Link } from "react-router-dom";

const CustomBox = styled(Box)(({ backgroundImg }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 4,
	boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
	transition: "0.3s",
	backgroundImage: `url(${backgroundImg})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundColor: "#1cabe2",
	"&:hover": {
		backgroundImage: "none",
		backgroundColor: "#0682b2",
	},
}));

const ImpactCard = ({ backgroundImg, logo, count, label, link }) => (
	<Grid item xs={12} sm={6} md={3} backgroundImg={backgroundImg}>
		<Link to={link}>
			<CustomBox p={2}>
				<img src={logo} height={45} width={45} alt={label} />
				<Typography
					variant="h5"
					sx={{ fontWeight: "bold", color: "white" }}
				>
					{count}
				</Typography>
				<Typography
					variant="h6"
					sx={{
						fontSize: "18px",
						fontWeight: "bold",
						color: "white",
					}}
				>
					{label}
				</Typography>
			</CustomBox>
		</Link>
	</Grid>
);

export default function WorkImpact() {
	const impactData = [
		{
			backgroundImg: img1,
			logo: logo1,
			count: 1250,
			label: "Members",
			link: "/coreteam",
		},
		{
			backgroundImg: img2,
			logo: logo2,
			count: 531,
			label: "Partners",
			link: "/partners",
		},
		{
			backgroundImg: img3,
			logo: logo3,
			count: 163,
			label: "Projects",
			link: "/nadiDarshanMenu",
		},
		{
			backgroundImg: img4,
			logo: logo4,
			count: 215,
			label: "Rivers Covered",
			link: "/success-stories",
		},
	];

	return (
		<Box p={6}>
			<Typography
				variant="h4"
				style={{
					fontWeight: "bold",
					textAlign: "center",
					marginBottom: "30px",
					color: "#1cabe2",
				}}
			>
				Our Work Impact
			</Typography>
			<Grid container  columnSpacing={3} rowSpacing={3}>
				{impactData.map((data, index) => (
					<ImpactCard
						key={index}
						// backgroundImg={data.backgroundImg}
						logo={data.logo}
						count={data.count}
						label={data.label}
						link={data.link}
					/>
				))}
			</Grid>
		</Box>
	);
}
