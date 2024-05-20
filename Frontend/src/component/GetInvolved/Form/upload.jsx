import React, { useState } from "react";
import {
	Box,
	Button,
	IconButton,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import {
	CloudUpload,
	InsertDriveFile,
	Delete,
	Label,
} from "@mui/icons-material";

const FileUpload = ({ content }) => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
		const files = Array.from(event.target.files);
		setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
		// onFilesSelect((prevFiles) => [...prevFiles, ...files]);
	};

	const handleRemove = (index) => {
		const newFiles = selectedFiles.filter((_, i) => i !== index);
		setSelectedFiles(newFiles);
		// onFilesSelect(newFiles);
	};

	return (
		<Box
			htmlFor="file-upload"
			component="Label"
			sx={{
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
				accept="image/*,video/*"
				style={{ display: "none" }}
				id="file-upload"
				type="file"
				multiple
				onChange={handleFileChange}
			/>
			<IconButton
				color="primary"
				aria-label="upload file"
				component="span"
			>
				<CloudUpload fontSize="large" />
			</IconButton>
			<Typography variant="h6" gutterBottom>
				{content}
			</Typography>
			<Typography variant="body2" color="textSecondary">
				click to select files
			</Typography>
			{selectedFiles.length > 0 && (
				<List sx={{ width: "100%", mt: 2 }}>
					{selectedFiles.map((file, index) => (
						<ListItem
							key={index}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexWrap: "wrap",
                                columnGap: 1,
                                rowGap: 1,
								border: "1px solid #ccc",
								borderRadius: "4px",
								p: 1,
								mb: 1,
							}}
						>
							<ListItemIcon sx={{minWidth: "0"}}>
								<InsertDriveFile />
							</ListItemIcon>
                            <Typography variant="h6" fontSize={"16px"} textAlign={"center"}>
                                {file.name}
                            </Typography>
							<Button
								variant="contained"
								startIcon={<Delete />}
								onClick={() => handleRemove(index)}
							>
								Remove
							</Button>
						</ListItem>
					))}
				</List>
			)}
		</Box>
	);
};

export default FileUpload;
