import React from "react";
import Card from "../Layout/card";
import imgBG from "../../assets/bg/bgI2.jpeg";
import img from "../../assets/bg/bgI1.jpeg";
import yatra from "../../assets/bg/yatra.jpeg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "../Layout/mainLayout";
import { useTranslation } from "react-i18next";

export default function ProgramPage() {
	const { t } = useTranslation();
	return (
		<>
			<MainLayout>
				<Box
					sx={{
						backgroundImage: `url(${imgBG})`,
						backgroundSize: "cover",
						backgroundPosition: "center ",
					}}
				>
					<Box bgcolor={"#00000059"} padding={"18% 40px 15% 40px"}>
						<Typography
							variant="h4"
							fontWeight={"bold"}
							textAlign={"center"}
							color={"white"}
						>
							{t("Programs.title")}
						</Typography>
					</Box>
				</Box>
				<Grid
					container
					px={4}
					spacing={4}
					position={"relative"}
					top={"-100px"}
				>
					{t("Programs.list", {
						returnObjects: true,
					}).map((item, index) => (
						<Grid item md={4} xs={12} key={index}>
							<Paper elevation={2} sx={{ height: "100%" }}>
								<Box
									sx={{
										backgroundImage: `url(${yatra})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								>
									<Card
										title={item.title}
										icon={`/src/assets/Icons/${item.img}.png`}
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
