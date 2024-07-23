import React, { useState } from "react";
import { Box } from "@mui/material";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./style.css";

import RRM_hindi_final from "../../../assets/Documents/RRM_hindi_final.pdf";
import GANGA_RIVER_FLYER from "../../../assets/Documents/GANGA RIVER FLYER.pdf";
import NEEM_RIVER_FLYER24 from "../../../assets/Documents/NEEM_RIVER_FLYER24.pdf";
import pond_rev_ENG from "../../../assets/Documents/pond rev ENG.pdf";
import pond_rev_HINDI from "../../../assets/Documents/pond rev HINDI.pdf";
import RRM_ENG from "../../../assets/Documents/RRM_ENG.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFPreview = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<div className="pdf-preview">
					<Document
						file={RRM_hindi_final}
						onLoadSuccess={onDocumentLoadSuccess}
						className="h-[400px] w-full overflow-auto"
					>
						{[...Array(numPages).keys()].map((p) => (
							<Page pageNumber={p + 1} key={p} />
						))}
					</Document>
					<a
						href={RRM_hindi_final}
						download
						className="download-link"
					>
						Download PDF
					</a>
				</div>
				<div className="pdf-preview">
					<Worker
						workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
					>
						<Document
							file={RRM_ENG}
							onLoadSuccess={onDocumentLoadSuccess}
							className="h-[400px] w-full overflow-auto"
						>
							{[...Array(numPages).keys()].map((p) => (
								<Page pageNumber={p + 1} key={p} />
							))}
						</Document>
					</Worker>
					<a href={RRM_ENG} download className="download-link">
						Download PDF
					</a>
				</div>
				<div className="pdf-preview">
					<Worker
						workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
					>
						<Document
							file={NEEM_RIVER_FLYER24}
							onLoadSuccess={onDocumentLoadSuccess}
							className="h-[400px] w-full overflow-auto"
						>
							{[...Array(numPages).keys()].map((p) => (
								<Page pageNumber={p + 1} key={p} />
							))}
						</Document>
					</Worker>
					<a
						href={NEEM_RIVER_FLYER24}
						download
						className="download-link"
					>
						Download PDF
					</a>
				</div>
			</Box>
			<Box sx={{ display: "flex" }}>
				<div className="pdf-preview">
					<Document
						file={pond_rev_ENG}
						onLoadSuccess={onDocumentLoadSuccess}
						className="h-[400px] w-full overflow-auto"
					>
						{[...Array(numPages).keys()].map((p) => (
							<Page pageNumber={p + 1} key={p} />
						))}
					</Document>
					<a href={pond_rev_ENG} download className="download-link">
						Download PDF
					</a>
				</div>
				<div className="pdf-preview">
					<Worker
						workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
					>
						<Document
							file={pond_rev_HINDI}
							onLoadSuccess={onDocumentLoadSuccess}
							className="h-[400px] w-full overflow-auto"
						>
							{[...Array(numPages).keys()].map((p) => (
								<Page pageNumber={p + 1} key={p} />
							))}
						</Document>
					</Worker>
					<a href={pond_rev_HINDI} download className="download-link">
						Download PDF
					</a>
				</div>
				<div className="pdf-preview">
					<Worker
						workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
					>
						<Document
							file={GANGA_RIVER_FLYER}
							onLoadSuccess={onDocumentLoadSuccess}
							className="h-[400px] w-full overflow-auto"
						>
							{[...Array(numPages).keys()].map((p) => (
								<Page pageNumber={p + 1} key={p} />
							))}
						</Document>
					</Worker>
					<a
						href={GANGA_RIVER_FLYER}
						download
						className="download-link"
					>
						Download PDF
					</a>
				</div>
			</Box>
		</>
	);
};

export default PDFPreview;

// const PdfViewer = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const [viewPdf, setViewPdf] = useState(null);

//   const fileType = ["application/pdf"];
//   const handleChange = (e) => {
//     console.log(e.target.files[0]);
//     let selectedFile = e.target.files[0];
//     if (selectedFile) {
//       if (selectedFile && fileType.includes(selectedFile.type)) {
//         let reader = new FileReader();
//         reader.readAsDataURL(selectedFile);
//         reader.onload = (e) => {
//           console.log(e.target.result);
//           setPdfFile(e.target.result);
//         };
//       } else {
//         setPdfFile(null);
//       }
//     } else {
//       console.log("please select");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (pdfFile !== null) {
//       setViewPdf(pdfFile);
//     } else {
//       setViewPdf(null);
//     }
//   };

//   //   const newPlugin = defaultLayoutPlugin();

//   return (
//     <>
//       {/* <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleChange} />
//         <button type="submit">view pdf</button>
//       </form> */}
//       <Box>
//         <Box
//           height={viewPdf ? "100vh" : "0"}
//           display={"flex"}
//           sx={{
//             paddingRight: { xs: 5, md: "20%" },
//             paddingLeft: { xs: 5, md: "20%" },
//           }}
//         >
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//             {viewPdf && (
//               <>
//                 <Viewer
//                   fileUrl={viewPdf}
//                   defaultScale={1.5}
//                   theme="dark"
//                   plugins={[newPlugin]}
//                 />
//               </>
//             )}
//             {!viewPdf && <> No pdf </>}
//           </Worker>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default PdfViewer;
