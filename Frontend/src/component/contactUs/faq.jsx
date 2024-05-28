import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import MainLayout from "../Layout/mainLayout";

export default function Faqs() {
	return (
		<>
			<MainLayout title={"FAQs"}>
				<div
					style={{
						background:
							"linear-gradient(to bottom, #a9e0ff, #80aaf5)",
					}}
				>
					<Accordion style={{ backgroundColor: "inherit" }}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1-content"
							id="panel1-header"
							style={{ background: "inherit" }}
						>
							Accordion 1
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</AccordionDetails>
					</Accordion>
					<Accordion style={{ backgroundColor: "inherit" }}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2-content"
							id="panel2-header"
							style={{ background: "inherit" }}
						>
							Accordion 2
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</AccordionDetails>
					</Accordion>
					<Accordion style={{ backgroundColor: "inherit" }}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2-content"
							id="panel2-header"
							style={{ background: "inherit" }}
						>
							Accordion 2
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</AccordionDetails>
					</Accordion>
					<Accordion style={{ backgroundColor: "inherit" }}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2-content"
							id="panel2-header"
							style={{ background: "inherit" }}
						>
							Accordion 2
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</AccordionDetails>
					</Accordion>
					<Accordion style={{ backgroundColor: "inherit" }}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2-content"
							id="panel2-header"
							style={{ background: "inherit" }}
						>
							Accordion 2
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</AccordionDetails>
					</Accordion>
				</div>
			</MainLayout>
		</>
	);
}
