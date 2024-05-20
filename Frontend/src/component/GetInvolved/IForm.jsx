import React, { useEffect, useRef, useState } from "react";
import {
	Box,
	TextField,
	Button,
	Typography,
	Snackbar,
	Alert,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Grid,
	styled,
} from "@mui/material";

import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "react-country-state-city/dist/react-country-state-city.css";
import FileUpload from "./Form/upload";
import ProfilePicUpload from "./Form/profliePicUpload";

const CustomTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "4px",
		backgroundColor: "#fff",
	},
});

function IForm(props) {
	const [formData, setFormData] = useState({
		service: props.service,
		title: "",
		firstName: "",
		lastName: "",
		designation: "",
		organization: "",
		email: "",
		contactNumber: "",
		country: "",
		state: "",
		city: "",
		address: "",
		workDescription: "",
		interest: "",
		riverLength: "",
		riverName: "",
		originSite: "",
		mergingPlace: "",
		discharge: "",
		presentSituation: "",
		waterQuality: "",
		population: "",
	});

	console.log(formData);

	const recaptchaRef = useRef(null);

	const [CaptchaValue, setCaptchaValue] = useState("");
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success");

	const [countryCode, setCountryCode] = useState("");

	const [stateList, setStateList] = useState([]);
	const [cityList, setCityList] = useState([]);

	const [countryId, setCountryId] = useState("");
	const [stateId, setStateId] = useState("");
	const [cityId, setCityId] = useState("");
	const countryList = Country.getAllCountries();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		console.log(e.target);
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const requestBody = {
			service_id: "service_d52ztbs",
			template_id: "template_35dd4mv",
			user_id: "Z4wj3OTthLutaIT_z",
			template_params: formData,
		};

		try {
			const res = await axios.post("http://localhost:3000/submit-form/", {
				...formData,
				CaptchaValue,
			});
			if (res.data.success) {
				const response = await axios.post(
					"https://api.emailjs.com/api/v1.0/email/send",
					requestBody
				);
				console.log("Email sent successfully:", response.data);
				setFormData({
					service: "",
					title: "",
					firstName: "",
					lastName: "",
					designation: "",
					organization: "",
					email: "",
					contactNumber: "",
					country: "",
					state: "",
					city: "",
					address: "",
					workDescription: "",
					interest: "",
					riverLength: "",
					riverName: "",
					originSite: "",
					mergingPlace: "",
					discharge: "",
					presentSituation: "",
					waterQuality: "",
					population: "",
				});
				setSnackbarMessage("Form submitted successfully");
				setSnackbarSeverity("success");
				setSnackbarOpen(true);
				setCaptchaValue("");
				recaptchaRef.current.reset();
			}
		} catch (err) {
			console.log(err);
			setSnackbarMessage("Failed to submit form");
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
		}
	};
	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	function onChange(value) {
		console.log("Captcha value:", value);
		setCaptchaValue(value);
	}

	return (
		<Box py={4} display={"flex"} justifyContent={"center"}>
			<Box width={{ xs: "100%", md: "60%" }}>
				<Typography
					variant="h4"
					fontWeight={"bold"}
					mb={4}
					textAlign={"center"}
					color={"white"}
				>
					{props.service} Form
				</Typography>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<FormControl
								sx={{ minWidth: "120px", width: "100%" , backgroundColor: "white", borderRadius: "4px"}}
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
							<CustomTextField
								sx={{ width: "100%" }}
								required
								id="firstName"
								label="First Name"
								value={formData.firstName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								sx={{ width: "100%" }}
								required
								id="lastName"
								label="Last Name"
								value={formData.lastName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CustomTextField
								sx={{ width: "100%" }}
								id="designation"
								label="Designation"
								value={formData.designation}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={8}>
							<CustomTextField
								sx={{ width: "100%" }}
								id="organization"
								label="Organization"
								value={formData.organization}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField
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
						<Grid item xs={12} md={4}>
							<FormControl
								sx={{ minWidth: "120px", width: "100%" , backgroundColor: "white", borderRadius: "4px"}}
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
										if (cityList.length !== 0)
											setCityList([]);
										setStateId(null);
										setCityId(null);
										setFormData({
											...formData,
											country: country.name,
											state: "",
											city: "",
										});
										setCountryCode(country.isoCode);
										setStateList(
											State.getStatesOfCountry(
												country.isoCode
											)
										);
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
								sx={{ minWidth: "120px", width: "100%" ,  backgroundColor: "white", borderRadius: "4px"}}
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
										setCityId(null);
										setFormData({
											...formData,
											state: state.name,
											city: "",
										});
										setCityList(
											City.getCitiesOfState(
												countryCode,
												state.isoCode
											)
										);
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
								sx={{ minWidth: "120px", width: "100%" ,  backgroundColor: "white", borderRadius: "4px"}}
							>
								<InputLabel id="city-label">
									Select City
								</InputLabel>
								<Select
									disabled={cityList.length === 0}
									labelId="city-label"
									id="city"
									label="Select City"
									value={cityId}
									name="city"
									onChange={(e) => {
										const city = cityList[e.target.value];
										setCityId(e.target.value);
										setFormData({
											...formData,
											city: city.name,
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
									{cityList.map((item, index) => (
										<MenuItem key={index} value={index}>
											{item.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>

						<Grid item xs={12}>
							<CustomTextField
								sx={{ width: "100%" }}
								required
								id="address"
								label="Address"
								value={formData.address}
								onChange={handleInputChange}
							/>
						</Grid>
						{props.service === "Membership" ? (
							<>
								<Grid item xs={12}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="workDescription"
										label="About Your Work (100 to 500 words)"
										multiline
										rows={4}
										value={formData.workDescription}
										onChange={handleInputChange}
									/>
								</Grid>
							</>
						) : (
							<>
								<Grid item xs={12}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="interest"
										label="About Your Interest (100 to 500 words)"
										multiline
										rows={6}
										value={formData.interest}
										onChange={handleInputChange}
									/>
								</Grid>
							</>
						)}
						<Grid item xs={6}>
							<ProfilePicUpload />
						</Grid>
						<Grid item xs={6}>
							<FileUpload content={"Upload your Resume here"} />
						</Grid>
						{props.service === "Membership" && (
							<>
								<Grid item xs={12}>
									<Typography
										variant="h4"
										fontWeight={"bold"}
										textAlign={"center"}
										color={"white"}
									>
										Your River Details
									</Typography>
								</Grid>
								<Grid item xs={12} md={8}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="riverName"
										label="Name of The River"
										value={formData.riverName}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={12} md={4}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="riverLength"
										label="Length"
										value={formData.riverLength}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="originSite"
										label="Origin Site, District & State"
										value={formData.originSite}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="mergingPlace"
										label="Place of Merging"
										value={formData.mergingPlace}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="discharge"
										label="Discharge of the River (mld)"
										value={formData.discharge}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="presentSituation"
										label="Present Situation"
										multiline
										rows={2}
										value={formData.presentSituation}
										onChange={handleInputChange}
									/>
								</Grid>

								<Grid item xs={12} md={8}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="waterQuality"
										label="Water Quality"
										value={formData.waterQuality}
										onChange={handleInputChange}
									/>
								</Grid>

								<Grid item xs={12} md={4}>
									<CustomTextField
										sx={{ width: "100%" }}
										id="population"
										label="Population"
										value={formData.population}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<FileUpload
										content={"Upload your River files here"}
									/>
								</Grid>
							</>
						)}
						<Grid
							item
							xs={12}
							display={"flex"}
							justifyContent="center"
						>
							<ReCAPTCHA
								ref={recaptchaRef}
								sitekey="6LdEM9YpAAAAAKv2j7jJ0azIsOR88gW97FUo_OkR"
								onChange={onChange}
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
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbarSeverity}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Box>
	);
}

export default IForm;
