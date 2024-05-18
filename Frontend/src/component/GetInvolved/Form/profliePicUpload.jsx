import React, { useState } from "react";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material";
import { PhotoCamera, Delete, Close } from "@mui/icons-material";

const ProfilePicUpload = ({ onFileSelect }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setSelectedFile(file);
			setPreview(URL.createObjectURL(file));
			onFileSelect(file);
		}
	};

	const handleRemove = () => {
		setSelectedFile(null);
		setPreview(null);
		onFileSelect(null);
	};

	return (
		<Box
			component="label"
			htmlFor="profile-pic-upload"
			sx={{
                width: {xs: "100%" ,md:"40%"},
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				p: 3,
				border: "2px dashed #ccc",
				borderRadius: "8px",
				textAlign: "center",
				backgroundColor: "#fafafa",
				"&:hover": {
					backgroundColor: "#f1f1f1",
				},
			}}
		>
			<input
				accept="image/*"
				style={{ display: "none" }}
				id="profile-pic-upload"
				type="file"
				onChange={handleFileChange}
			/>
				<IconButton
					color="primary"
					aria-label="upload picture"
					component="span"
				>
					<PhotoCamera fontSize="large" />
				</IconButton>
			<Typography variant="h6" gutterBottom>
				Upload Profile Picture
			</Typography>
			{preview && (
				<Box
					sx={{
						position: "relative",
						width: 150,
						height: 150,
						mt: 2,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
					}}
                    p={2}
                    backgroundColor="white"
				>
					<Avatar
						src={preview}
						alt="Profile Picture"
						sx={{ width: "100%", height: "100%" }}
					/>
					<IconButton
						sx={{
							position: "absolute",
							top: 0,
							right: 0,
                            color: "#d65a5a",
						}}
						size="small"
						onClick={handleRemove}
					>
						<Close />
					</IconButton>
				</Box>
			)}
			{!preview && (
				<Typography variant="body2" color="textSecondary">
					No file selected
				</Typography>
			)}
		</Box>
	);
};

export default ProfilePicUpload;
