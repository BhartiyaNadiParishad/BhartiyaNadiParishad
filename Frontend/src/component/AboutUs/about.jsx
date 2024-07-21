import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bg from "../../assets/bg/dirty-river.jpeg";
import bg1 from "../../assets/bg/bgl-20.jpg";
import bg2 from "../../assets/bg/bgl-15.jpeg";
import bg3 from "../../assets/bg/sangam.jpeg";
import QuoteSection from "../Layout/contentLayout/quoteSection";
import { useTranslation } from "react-i18next";
import HistoryTree from "./historyTree";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function AboutBNP() {
	const { t } = useTranslation();
	return (
		<MainLayout title={t("about.title")} bgImg={bg} position={"bottom"}>
			<Box padding={"20px 5%"} mt={2}>
				<Grid container spacing={5}>
					{/* <Grid item xs={12}>
            <Typography
              variant="h6"
              fontSize={"20px"}
              textAlign={"justify"}
              color={"#1cabe2"}
            >
              {t("about.sections.0.content")}
            </Typography>
          </Grid> */}
					<Grid
						item
						xs={12}
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Box
							backgroundColor={"#acd3fb24"}
							padding={"30px"}
							width={"100%"}
						>
							<Typography
								variant="h6"
								fontSize={"28px"}
								textAlign={"center"}
								color={"#1cabe2"}
							>
								History
							</Typography>
						</Box>
						<Box>
							<ArrowDownwardIcon
								sx={{ color: "#1cabe2", fontSize: "40px" }}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} 
          position="relative"
						sx={{
							"&::after": {
								content: '""',
								position: "absolute",
								top: 20,
								left: "40%",
								transform: "translateX(-35%)",
								width: "1040px",
								borderTop: "3px solid #1cabe2",
							},
						}}>
						<Grid container spacing={4} >
							<Grid
								item
								xs={12}
								md={3}
								display={"flex"}
								alignItems={"center"}
								flexDirection={"column"}
							>
								<Box>
									<ArrowDownwardIcon
										sx={{
											color: "#1cabe2",
											fontSize: "40px",
										}}
									/>
								</Box>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										borderRadius: "10px",
									}}
								>
									<Typography>
										India, the country of rivers, is
										currently going through a difficult
										phase, causing economic, social, and
										environmental damage. The rivers of the
										country are facing three major problems:{" "}
										<br />
										1. Water shortage <br />
										2. Pollution <br />
										3. Encroachment
									</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								display={"flex"}
								alignItems={"center"}
								flexDirection={"column"}
							>
								<Box>
									<ArrowDownwardIcon
										sx={{
											color: "#1cabe2",
											fontSize: "40px",
										}}
									/>
								</Box>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										borderRadius: "10px",
									}}
								>
									<Typography>
										This idea gained more strength when I
										came across the collective efforts of
										river rejuvenation being done by the
										Water Keeper Alliance for the rivers of
										Buffalo City, USA, in 2018.
									</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								display={"flex"}
								alignItems={"center"}
								flexDirection={"column"}
							>
								<Box>
									<ArrowDownwardIcon
										sx={{
											color: "#1cabe2",
											fontSize: "40px",
										}}
									/>
								</Box>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										borderRadius: "10px",
									}}
								>
									<Typography>
										The idea of forming the Bhartiya Nadi
										Parishad to address these issues first
										started brewing in my mind in June 2015,
										when we faced practical difficulties
										during river rejuvenation work at the
										grassroots level.
									</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								display={"flex"}
								alignItems={"center"}
								flexDirection={"column"}
							>
								<Box>
									<ArrowDownwardIcon
										sx={{
											color: "#1cabe2",
											fontSize: "40px",
										}}
									/>
								</Box>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										borderRadius: "10px",
									}}
								>
									<Typography>
										The idea took a decisive turn in 2020
										during the difficult times of COVID-19
										when the rivers of the country started
										getting cleaner without any human
										intervention. After preliminary talks
										with dignitaries from various fields
										engaged in river rejuvenation work
										across the country, the Bhartiya Nadi
										Parishad was constituted on 2 February
										2023 under the Indian Trusts Act, 1882.
									</Typography>
								</Box>
							</Grid>
						</Grid>
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
					<Grid item xs={12}>
						<Box
							backgroundColor={"#acd3fb24"}
							padding={"10px"}
							display={"flex"}
							justifyContent={"center"}
						>
							<Typography
								variant="h6"
								fontSize={"30px"}
								fontWeight={"bold"}
								textAlign={"justify"}
								color={"#1cabe2"}
							>
								Core values
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={9}>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										display: "flex",
										alignItems: "center",
									}}
								>
									<Typography>
										Our organizational thinking and actions
										are rooted in respect for the
										communities with which we work and in
										respect for their collective wisdom in
										promoting sustainable levels of human
										interaction with the environment.
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Box>
									<img src={bg3} />
								</Box>
							</Grid>
							<Grid item xs={12} sm={9}>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										display: "flex",
										alignItems: "center",
									}}
								>
									<Typography>
										Our organizational thinking and actions
										are rooted in respect for the
										communities with which we work and in
										respect for their collective wisdom in
										promoting sustainable levels of human
										interaction with the environment.
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Box>
									<img src={bg3} />
								</Box>
							</Grid>
							<Grid item xs={12} sm={9}>
								<Box
									sx={{
										backgroundColor: "#1cabe2",
										color: "white",
										padding: "20px",
										height: "100%",
										display: "flex",
										alignItems: "center",
									}}
								>
									<Typography>
										Our organizational thinking and actions
										are rooted in respect for the
										communities with which we work and in
										respect for their collective wisdom in
										promoting sustainable levels of human
										interaction with the environment.
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Box>
									<img src={bg3} />
								</Box>
							</Grid>
						</Grid>
					</Grid>

					{/* <Grid item xs={6}>
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
					</Grid> */}
					<Grid item xs={12}>
						<img
							src={bg}
							style={{
								objectFit: "cover",
								width: "100%",
								maxHeight: "300px",
								objectPosition: "center",
							}}
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
										md={3}
										key={index}
									>
										<Box
											sx={{
												backgroundColor: "#1cabe2",
												color: "white",
												padding: "20px",
												height: "100%",
											}}
										>
											<Typography
												variant="h5"
												fontWeight={"bold"}
												textAlign={"center"}
												mb={2}
											>
												{item.title}
											</Typography>
											<Typography
												fontSize={18}
												textAlign={"justify"}
											>
												{item.text}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
					</Grid>
					{/* <Grid item xs={12}>
            <Typography
              variant="h6"
              fontSize={"20px"}
              textAlign={"justify"}
              color={"#1cabe2"}
            >
              {t("about.sections.3.content")}
            </Typography>
          </Grid> */}
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Button
							component={Link}
							to="/getInvolvedMenu"
							variant="contained"
							sx={{
								fontWeight: "bold",
								fontSize: "15px",
								padding: "5px 30px",
								marginBottom: "20px",
								borderRadius: "5px",
								border: "2px solid #1cabe2",
								backgroundColor: "#1cabe2",
								color: "white",
								"&:hover": {
									backgroundColor: "white",
									color: "#1cabe2",
								},
							}}
						>
							{t("about.sections.4.title")}
						</Button>
					</Grid>
					{/* <Grid item xs={12}>
            <img
              src={bg3}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                maxHeight: "300px",
                objectPosition: "bottom",
              }}
              alt="Background 2"
            />
          </Grid> */}
					{/* <Grid item xs={12}>
            <Box sx={{ color: "#1cabe2", textAlign: "left" }}>
              <Typography
                variant="h5"
                color={"#1cabe2"}
                mb={3}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {t("about.sections.5.title")}
              </Typography>
              <Typography variant="h6" paragraph>
                {t("about.sections.5.content1")}
              </Typography>
              <Typography variant="h6" paragraph mb={4}>
                {t("about.sections.5.content2")}
              </Typography>

              <QuoteSection
                quoteColor="white"
                backgroundImage={bg1}
                quoteLine1="वे शृण्वन्ति नदीनां य ऋषभाः"
                // quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
                translationLine1={t("about.sections.5.content3")}
                // translationLine2={t("about.sections.6.translationLine2")}
              />
            </Box>
          </Grid> */}

					{/* <Grid item xs={12} sx={{ height: "400px", mb: 2 }}>
            <img
              src={bg2}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                objectPosition: "center",
              }}
            />
          </Grid> */}
				</Grid>
			</Box>
		</MainLayout>
	);
}
