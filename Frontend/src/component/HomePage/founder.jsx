import { Box, Grid, Typography } from "@mui/material";
import img from "../../assets/bg/bgl7.jpeg";
import img1 from "../../assets/team/Raman_Kant_2.png";

const Founder = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
					backgroundPosition: "center bottom",
				}}
			>
				<Grid container sx={{ backgroundColor: "#000000a5" }}>
					<Grid item xs={12} md={3} padding={3}>
						<Box
							display={"flex"}
							justifyContent={"flex-end"}
							sx={{
								backgroundColor: "#ffffff38",
								borderRadius: "50%",
							}}
						>
							<img
								src={img1}
								// width={"250px"}
								// style={{ borderRadius: "50%" }}
								style={{
									height: "auto",
									width: "100%",
									borderRadius: "50%",
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={9}>
						<Box
							p={3}
							height={"100%"}
							display="flex"
							flexDirection={"column"}
							justifyContent={"center"}
							sx={{
								color: "white",
							}}
						>
							<Typography
								sx={{
									fontSize: "20px",
									fontWeight: "bold",
									textAlign: "justify",
									marginBottom: "10px",
								}}
							>
								Formation of Bhartiya Nadi Parishad is an
								important step taken after brainstorming with
								stakeholders for rejuvenation of Indian rivers
								towards prosperous India. The aim of Bhartiya
								Nadi Parishad is to contribute towards the
								sustainable development goals (SDG 6, 12, 13, 14
								& 15) of the United Nations with the cooperation
								of the society and the government, and under the
								India's Water Vision 2047 announced by the
								Hon'ble Prime Minister Shri Narendra Modi.
							</Typography>
							<Typography
								sx={{
									color: "#f49b0e",
									fontWeight: "bold",
									fontSize: "20px",
								}}
							>
								Raman Kant
							</Typography>
							<Typography
								sx={{ fontWeight: "bold", fontSize: "20px" }}
							>
								Riverman of India
							</Typography>
							<Typography
								sx={{ fontWeight: "bold", fontSize: "20px" }}
							>
								Founder - Bharatiya Nadi Parishad
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Founder;
