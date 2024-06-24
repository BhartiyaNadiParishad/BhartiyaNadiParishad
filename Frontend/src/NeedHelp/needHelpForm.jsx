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
	Snackbar,
	Alert,
} from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Country, State, City } from "country-state-city";
import country_state_district from "@coffeebeanslabs/country_state_district";
import emailjs from "emailjs-com";

export default function NeedHelpForm() {
	const [countryCode, setCountryCode] = useState("");
	const [stateList, setStateList] = useState([]);
	const [districtList, setDistrictList] = useState([]);
	const [countryId, setCountryId] = useState("");
	const [stateId, setStateId] = useState("");
	const [districtId, setDistrictId] = useState("");
	const countryList = Country.getAllCountries();
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success");

	const [formData, setFormData] = useState({
		service: "Need help Form",
		title: "",
		firstName: "",
		lastName: "",
		email: "",
		contactNumber: "",
		country: "",
		state: "",
		district: "",
		address: "",
		query: "",
	});

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const templateParams = {
			...formData,
		};

		try {
			await emailjs.send(
				"service_d52ztbs",
				"template_vuwp6vn",
				templateParams,
				"Z4wj3OTthLutaIT_z"
			);
			setSnackbarMessage("Form submitted successfully");
			setSnackbarSeverity("success");
			setFormData({
				service: "Need help Form",
				title: "",
				firstName: "",
				lastName: "",
				email: "",
				contactNumber: "",
				country: "",
				state: "",
				district: "",
				address: "",
				query: "",
			});
			setCountryId("");
			setStateId("");
			setDistrictId("");
		} catch (err) {
			console.log(err);
			setSnackbarMessage("Failed to submit form");
			setSnackbarSeverity("error");
		} finally {
			setSnackbarOpen(true);
		}
	};

	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	return (
		<>
			<Box width={{ xs: "100%", md: "60%" }} mb={2}>
				<form onSubmit={handleSubmit}>
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
								sx={{ width: "100%", backgroundColor: "white" }}
								required
								id="firstName"
								label="First Name"
								value={formData.firstName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								sx={{ width: "100%", backgroundColor: "white" }}
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
									backgroundColor: "white",
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
								value={formData.contactNumber}
								onChange={(value) => {
									setFormData({
										...formData,
										contactNumber: value,
									});
								}}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormControl
								sx={{
									minWidth: "120px",
									width: "100%",
									backgroundColor: "white",
									borderRadius: "4px",
								}}
							>
								<InputLabel id="country-label">
									Select Country
								</InputLabel>
								<Select
									labelId="country-label"
									id="country"
									value={countryId}
									label="Select Country"
									name="country"
									onChange={(e) => {
										const country =
											countryList[e.target.value];
										setCountryId(e.target.value);
										if (stateList.length !== 0)
											setStateList([]);
										if (districtList.length !== 0)
											setDistrictList([]);
										setStateId(null);
										setDistrictId(null);
										setFormData({
											...formData,
											country: country.name,
											state: "",
											district: "",
										});
										setCountryCode(country.isoCode);
										if (country.name === "India") {
											setStateList(
												country_state_district.getStatesByCountryId(
													1
												)
											);
										} else {
											setStateList(
												State.getStatesOfCountry(
													country.isoCode
												)
											);
										}
									}}
									MenuProps={{
										PaperProps: {
											style: {
												maxHeight: "250px",
												zIndex: 1302,
											},
										},
									}}
								>
									{countryList.map((item, index) => (
										<MenuItem key={index} value={index}>
											{item.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormControl
								sx={{
									minWidth: "120px",
									width: "100%",
									backgroundColor: "white",
									borderRadius: "4px",
								}}
							>
								<InputLabel id="country-label">
									Select State
								</InputLabel>
								<Select
									disabled={stateList.length === 0}
									labelId="state-label"
									id="state"
									label="Select State"
									value={stateId}
									name="state"
									onChange={(e) => {
										const state = stateList[e.target.value];
										setStateId(e.target.value);
										setDistrictId(null);
										setFormData({
											...formData,
											state: state.name,
											district: "",
										});
										if (formData.country === "India") {
											setDistrictList(
												country_state_district.getDistrictsByStateId(
													e.target.value + 1
												)
											);
										} else {
											setDistrictList(
												City.getCitiesOfState(
													countryCode,
													state.isoCode
												)
											);
										}
									}}
									MenuProps={{
										PaperProps: {
											style: {
												maxHeight: "250px",
												zIndex: 1302,
											},
										},
									}}
								>
									{stateList.map((item, index) => (
										<MenuItem key={index} value={index}>
											{item.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormControl
								sx={{
									minWidth: "120px",
									width: "100%",
									backgroundColor: "white",
									borderRadius: "4px",
								}}
							>
								<InputLabel id="district-label">
									Select District
								</InputLabel>
								<Select
									disabled={districtList.length === 0}
									labelId="district-label"
									id="district"
									label="Select District"
									value={districtId}
									name="district"
									onChange={(e) => {
										const district =
											districtList[e.target.value];
										setDistrictId(e.target.value);
										setFormData({
											...formData,
											district: district.name,
										});
									}}
									MenuProps={{
										PaperProps: {
											style: {
												maxHeight: "250px",
												zIndex: 1302,
											},
										},
									}}
								>
									{districtList.map((item, index) => (
										<MenuItem key={index} value={index}>
											{item.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<TextField
								sx={{ width: "100%", backgroundColor: "white" }}
								required
								id="address"
								label="Address"
								value={formData.address}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								sx={{ width: "100%", backgroundColor: "white" }}
								id="query"
								label="Please tell us name of river and its problem"
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
								size="large"
								variant="contained"
								sx={{backgroundColor:"#1cabe2"}}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbarSeverity}
					sx={{ width: "100%" }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</>
	);
}
