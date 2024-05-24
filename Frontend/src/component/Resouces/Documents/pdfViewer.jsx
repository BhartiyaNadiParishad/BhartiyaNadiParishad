import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Box } from "@mui/material";
import file from "../../../assets/Documents/book nadi neeti a5.pdf";

const PdfViewer = () => {
	const [pdfFile, setPdfFile] = useState(null);
	const [viewPdf, setViewPdf] = useState(null);

	const fileType = ["application/pdf"];
	const handleChange = (e) => {
		console.log(e.target.files[0]);
		let selectedFile = e.target.files[0];
		if (selectedFile) {
			if (selectedFile && fileType.includes(selectedFile.type)) {
				let reader = new FileReader();
				reader.readAsDataURL(selectedFile);
				reader.onload = (e) => {
					console.log(e.target.result);
					setPdfFile(e.target.result);
				};
			} else {
				setPdfFile(null);
			}
		} else {
			console.log("please select");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pdfFile !== null) {
			setViewPdf(pdfFile);
		} else {
			setViewPdf(null);
		}
	};
	const newPlugin = defaultLayoutPlugin();
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="file" onChange={handleChange} />
				<button type="submit">view pdf</button>
			</form>
			<Box>
				<Box
					height={viewPdf ? "100vh" : "0"}
					display={"flex"}
					sx={{
						paddingRight: { xs: 5, md: "20%" },
						paddingLeft: { xs: 5, md: "20%" },
					}}
				>
					<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
						{viewPdf && (
							<>
								<Viewer
									fileUrl={viewPdf}
									defaultScale={1.5}
									theme="dark"
									plugins={[newPlugin]}
								/>
							</>
						)}
						{!viewPdf && <> No pdf </>}
					</Worker>
				</Box>
			</Box>
		</>
	);
};

export default PdfViewer;
