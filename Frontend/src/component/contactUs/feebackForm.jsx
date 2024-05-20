import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function FeebackForm() {
	const [formData, setFormData] = useState({
		title: "",
		firstName: "",
		lastName: "",
		email: "",
		contactNumber: "",
		query: "",
	});

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		console.log(e.target);
		setFormData({
			...formData,
			[id]: value,
		});
	};

	return (
		<>
			<Box width={{ xs: "100%", md: "60%" }} mb={2}>
				<Typography
					variant="h4"
					fontSize={"24px"}
					fontWeight={"bold"}
					mb={4}
					textAlign={"center"}
				>
					Feedback/Query Form
				</Typography>
				<form>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<FormControl
								sx={{
									minWidth: "120px",
									width: "100%",
									backgroundColor: "white",
									borderRadius: "4px",
								}}
							>
								<InputLabel id="title-label">Title</InputLabel>
								<Select
									labelId="title-label"
									id="title"
									value={formData.title}
									label="Title"
									onChange={(e) => {
										setFormData({
											...formData,
											title: e.target.value,
										});
									}}
								>
									<MenuItem value={"Miss"}>Miss</MenuItem>
									<MenuItem value={"Mr"}>Mr</MenuItem>
									<MenuItem value={"Mrs"}>Mrs</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								sx={{ width: "100%" }}
								required
								id="firstName"
								label="First Name"
								value={formData.firstName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								sx={{ width: "100%" }}
								required
								id="lastName"
								label="Last Name"
								value={formData.lastName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								sx={{
									width: "100%",
									height: "100%",
									"& .MuiInputBase-root": {
										height: "100%",
									},
								}}
								required
								id="email"
								label="Email"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<PhoneInput
								inputProps={{
									name: "phone",
									required: true,
									autoFocus: true,
								}}
								inputStyle={{ width: "100%" }}
								country={"in"}
								onChange={(e) => {
									setFormData({
										...formData,
										contactNumber: e,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								sx={{ width: "100%" }}
								id="query"
								label="Please tell us about your Feedback/query"
								multiline
								rows={6}
								value={formData.query}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							display={"flex"}
							justifyContent="center"
						>
							<Button
								type="submit"
								variant="contained"
								color="primary"
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</>
	);
}
