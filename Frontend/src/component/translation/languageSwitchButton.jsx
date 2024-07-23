import {
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Switch,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitchButton() {
	const { i18n } = useTranslation();

	const handleChange = (event) => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<FormControl
			variant="outlined"
			size="small"
			sx={{
				minWidth: 100,
				"& .MuiOutlinedInput-root": {
					color: "white",
					"& fieldset": {
						borderColor: "transparent",
					},
					"&:hover fieldset": {
						borderColor: "transparent",
					},
					"&.Mui-focused fieldset": {
						borderColor: "transparent",
					},
				},
				"& .MuiSelect-icon": {
					color: "white",
				},
			}}
		>
			<Select value={i18n.language} onChange={handleChange} >
				<MenuItem value="en">English</MenuItem>
				<MenuItem value="hi">Hindi</MenuItem>
			</Select>
		</FormControl>
	);
}
