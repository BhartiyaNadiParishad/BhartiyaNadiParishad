import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bg/bgl6.jpeg";
import ContentSection from "../Layout/contentLayout/contentSection";
import QuoteSection from "../Layout/contentLayout/quoteSection";
import HeroSection from "../Layout/contentLayout/heroSection";
import FooterSection from "../Layout/contentLayout/footerSection";
import { useTranslation } from "react-i18next";



export default function NadiPortal() {
	const {t} = useTranslation();
	
	const sections = [
		{
			content: t('IndianRiverSystem.description.paragraph_1'),
			backgroundColor: "",
			textColor: "#1cabe2",
		},
		{
			content: t('IndianRiverSystem.description.paragraph_2'),			
			backgroundColor: "#1cabe2",
			textColor: "white",
		},
		{
			content: t('IndianRiverSystem.description.paragraph_3'),
			backgroundColor: "",
			textColor: "#1cabe2",
		},
		{
			content: t('IndianRiverSystem.description.paragraph_4'),
			backgroundColor: "",
			textColor: "#1cabe2",
		},
	];
	
	const drainageSystem = t('IndianRiverSystem.description.drainageSystem.data', {
		returnObjects: true,
	})
	
	const drainageClassification = t('IndianRiverSystem.description.drainageClassification.data', {
		returnObjects: true,
	})
	
	const riverTypes = t('IndianRiverSystem.description.riverTypes.data', {
		returnObjects: true,
	})

	return (
		<MainLayout title={"Indian River System"} bgImg={bg}>
			<Grid container spacing={3} sx={{ padding: "50px 17%" }}>
				{sections.map((section, index) => (
					<Grid item xs={12} key={index}>
						<ContentSection
							content={section.content}
							backgroundColor={section.backgroundColor}
							textColor={section.textColor}
						/>
					</Grid>
				))}
				<Grid item xs={12}>
					<QuoteSection
						backgroundImage={bg}
						quoteLine1= {t('IndianRiverSystem.description.quote_1')}
						quoteLine2= {t('IndianRiverSystem.description.quote_2')}
						translationLine1= {t('IndianRiverSystem.description.translation')}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box
						height={"100%"}
						color={"#1cabe2"}
						backgroundColor={"#acd3fb24"}
						p={3}
					>
						<Typography variant="h6" fontSize={"18px"}>
							{t('IndianRiverSystem.description.drainageSystem.content')}
						</Typography>
						<Box
							component="ul"
							sx={{ pl: 2, listStyleType: "disc" }}
						>
							{drainageSystem.map((item, index) => (
								<Typography
									component="li"
									variant="body1"
									fontSize={"20px"}
									key={index}
								>
									{item}
								</Typography>
							))}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box p={3} color={"#1cabe2"} backgroundColor={"#acd3fb24"} height={"100%"}>
						<Typography variant="h6" fontSize={"20px"}>
						{t('IndianRiverSystem.description.drainageClassification.content')}
						</Typography>
						<Box
							component="ul"
							sx={{ pl: 2, listStyleType: "disc" }}
						>
							{drainageClassification.map((item, index) => (
								<Typography
									component="li"
									variant="body1"
									fontSize={"20px"}
									key={index}
								>
									{item}
								</Typography>
							))}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box color={"#1cabe2"}>
						<Typography variant="h6" fontSize={"18px"}>
							{t('IndianRiverSystem.description.riverTypes.content')}
						</Typography>
						<Box
							component="ul"
							sx={{ pl: 2, listStyleType: "disc" }}
						>
							{riverTypes.slice(0, 2).map((item, index) => (
								<Typography
									component="li"
									variant="body1"
									fontSize={"20px"}
									key={index}
								>
									{item}
								</Typography>
							))}
						</Box>
						<Typography
							variant="h6"
							fontSize={"20px"}
							sx={{ mt: 2 }}
						>
							{t('IndianRiverSystem.description.paragraph_6')}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
}
