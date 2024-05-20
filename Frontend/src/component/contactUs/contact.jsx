import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Faqs from "./faq";
import "../../index.css";
import img from "../../assets/bg21.jpg";
import FeebackForm from "./feebackForm";
export default function Contact() {
	return (
		<MainLayout>
			<Box
				sx={{
					padding: "220px 40px 50px 40px",
					overflow: "hidden",
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
					backgroundPosition: "center bottom",
				}}
			>
				{/* <Typography
					variant="h4"
					fontWeight="bold"
					color="white"
					mb={4}
					textAlign={"center"}
				>
					Contact Us
				</Typography> */}
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Paper elevation={3} sx={{ height: "100%", backgroundColor: "#ffffffb7" }}>
							<Box
								border={"1px solid white"}
								height={"100%"}
								padding={"10%"}
							>
								<Typography
									variant="h6"
									fontWeight="bold"
									gutterBottom
								>
									Office Address
								</Typography>
								<Typography
									variant="body1"
									sx={{ fontSize: "16px" }}
								>
									Ist Floor, Samrat Shopping Mall <br />
									Garh Road, Meerut, <br />
									Pin – 250001 <br />
									Uttar Pradesh – India <br />
								</Typography>
								<Typography variant="body1" mt={3}>
									<strong>Phone -</strong> 0121-3596749 <br />
									<strong>Email:</strong>{" "}
									info@bhartiyanadiparishad.org
								</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} md={8}>
						<Paper width={"100%"} height={"100%"} overflow={"hidden"} sx={{border: "1px solid white", borderRadius: "0"}}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111679.9824696052!2d77.61655834975961!3d28.987387246495427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716162748445!5m2!1sen!2sin"
								width="100%"
								height="300"
								// style="border:0;"
								allowFullscreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</Paper>
					</Grid>
				</Grid>
			</Box>
			<Box padding={"50px "} display={"flex"} justifyContent={"center"}>
				<FeebackForm />
			</Box>
		</MainLayout>
	);
}
