import { Box, Grid, Typography } from "@mui/material";
import img from "../../assets/bg/bgl7.jpeg";
import img1 from "../../assets/team/Raman_Kant_2.png";
import { useTranslation } from "react-i18next";

const Founder = () => {

	const {t} = useTranslation();
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
					backgroundPosition: "center bottom",
				}}
			>
				<Grid container sx={{ backgroundColor: "#000000a5" }} >
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
								{t('founder.content')}
							</Typography>
							<Typography
								sx={{
									color: "#f49b0e",
									fontWeight: "bold",
									fontSize: "20px",
								}}
							>
								{t('founder.name')}
							</Typography>
							<Typography
								sx={{ fontWeight: "bold", fontSize: "20px" }}
							>
								{t('founder.title1')}
							</Typography>
							<Typography
								sx={{ fontWeight: "bold", fontSize: "20px" }}
							>
								{t('founder.title2')}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Founder;
