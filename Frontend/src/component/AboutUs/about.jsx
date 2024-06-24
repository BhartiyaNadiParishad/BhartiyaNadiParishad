import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bg from "../../assets/bg/bgl-9.jpeg";
import bg1 from "../../assets/bg/bgl-20.jpg";
import bg2 from "../../assets/bg/bgl-17.jpg";
import QuoteSection from "../Layout/contentLayout/quoteSection";
import { useTranslation } from "react-i18next";

export default function AboutBNP() {
	const { t } = useTranslation();
	return (
		<MainLayout title={t("about.title")} bgImg={bg} position={"bottom"}>
			<Box padding={"50px 17%"}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Typography
							variant="h6"
							fontSize={"20px"}
							textAlign={"justify"}
							color={"#1cabe2"}
						>
							{t("about.sections.0.content")}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<QuoteSection
							quoteColor="white"
							backgroundImage={bg1}
							quoteLine1="पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः।"
							quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
							translationLine1={t(
								"about.sections.6.translationLine1"
							)}
							translationLine2={t(
								"about.sections.6.translationLine2"
							)}
						/>
					</Grid>
					<Grid item xs={6}>
						<Box backgroundColor={"#acd3fb24"} padding={"30px"}>
							<Typography
								variant="h6"
								fontSize={"20px"}
								textAlign={"justify"}
								color={"#1cabe2"}
							>
								{t("about.sections.1.content")}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box backgroundColor={"#acd3fb24"} padding={"30px"}>
							<Typography
								variant="h6"
								fontSize={"20px"}
								textAlign={"justify"}
								color={"#1cabe2"}
							>
								{t("about.sections.2.content")}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<img
							src={bg}
							style={{ objectFit: "cover", width: "100%" }}
							alt="Background"
						/>
					</Grid>
					<Grid item xs={12}>
						<Box>
							<Grid container spacing={3}>
								{t("about.objective", {
									returnObjects: true,
								}).map((item, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
										key={index}
									>
										<Box
											sx={{
												backgroundColor: "#1cabe2",
												color: "white",
												padding: 3,
												height: "100%",
											}}
										>
											<Typography
												variant="h6"
												gutterBottom
												fontWeight={"bold"}
											>
												{item.title}
											</Typography>
											<Typography variant="body1">
												{item.text}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="h6"
							fontSize={"20px"}
							textAlign={"justify"}
							color={"#1cabe2"}
						>
							{t("about.sections.3.content")}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								backgroundColor: "#1cabe2",
								color: "white",
								padding: 4,
								border: "1px solid #fff",
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								textAlign: "left",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Typography
								variant="h5"
								gutterBottom
								fontWeight={"bold"}
								textAlign={"center"}
							>
								{t("about.sections.4.title")}
							</Typography>
							<Typography variant="h6" paragraph 
								>
								{t("about.sections.4.content1")}
							</Typography>
							<Typography variant="h6" mb={2}>
								{t("about.sections.4.content2")}
							</Typography>
							<Button
								component={Link}
								to="/getInvolvedMenu"
								variant="contained"
								sx={{
									backgroundColor: "white",
									color: "#1cabe2",
									"&:hover": {
										backgroundColor: "#1cabe2",
										color: "white",
									},
								}}
							>
								{t("about.sections.4.button")}
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<img
							src={bg2}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
								maxHeight: "400px",
								objectPosition: "bottom",
							}}
							alt="Background 2"
						/>
					</Grid>
					<Grid item xs={12}>
						<Box sx={{ color: "#1cabe2", textAlign: "left" }}>
							<Typography
								variant="h5"
								color={"white"}
								p={2}
								mb={2}
								fontWeight={"bold"}
								backgroundColor={"#1cabe2"}
								textAlign={"center"}
							>
								{t("about.sections.5.title")}
							</Typography>
							<Typography variant="h6" paragraph>
								{t("about.sections.5.content1")}
							</Typography>
							<Typography variant="h6" paragraph>
								{t("about.sections.5.content2")}
							</Typography>
							<Typography
								variant="h6"
								paragraph
								fontWeight={"bold"}
							>
								वे शृण्वन्ति नदीनां य ऋषभाः
							</Typography>
							<Typography variant="h6" paragraph>
								{t("about.sections.5.content3")}
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<img
							src={bg}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<img
							src={bg2}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			{/* <FooterSection
        backgroundImage="https://images01.nicepage.com/36/ce/36ced675fffdf7503938e3778dc8b3ca.jpeg"
        textColor="#1cabe2"
        content="Understanding the ancient knowledge of India tells us that clean and uninterrupted rivers are essential for our prosperity. Therefore, society and the system must make appropriate efforts in this direction. In this context, the formation of BNP is an important step taken by the society with the cooperation of the system for the prosperity of the rivers of India. When all the relevant sections of society and system are involved in this step, then the destination will be achieved by following the path of prosperity of rivers. BNP strongly believes in making joint efforts with society and the government to achieve its goals. In India, we can understand the importance of rivers through this verse said in Van Parva of Mahabharata."
      /> */}
		</MainLayout>
	);
}
