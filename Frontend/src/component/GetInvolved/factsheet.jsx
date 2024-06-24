// src/pages/Faqs.js
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import MainLayout from "../Layout/mainLayout";
import Typography from "@mui/material/Typography";
import bgImg from "../../assets/bg/bgl7.jpeg"
import { Box } from "@mui/material";

const faqs = [
	{
		question: "What is the longest river in India?",
		answer: "The Ganges River, also known as the Ganga, is the longest river in India, stretching approximately 2,525 kilometers (1,569 miles).",
	},
	{
		question: "Which river is considered the holiest in Hinduism?",
		answer: "The Ganges River holds immense religious significance in Hinduism and is considered the holiest river in India.",
	},
	{
		question: "How many major river systems are there in India?",
		answer: "India has seven major river systems: the Ganges, Indus, Brahmaputra, Godavari, Narmada, Krishna, and Mahanadi.",
	},
	{
		question:
			"What is the significance of the Ganges River in Indian culture?",
		answer: "The Ganges River is revered as the epitome of purity and spirituality in Indian culture. It is believed to wash away sins and provide salvation.",
	},
	{
		question:
			'Which river is known as the "Sorrow of Bihar" due to its frequent floods?',
		answer: 'The Kosi River is often referred to as the "Sorrow of Bihar" due to its propensity for flooding, causing widespread devastation.',
	},
	{
		question: "What is the main source of water for the Indus River?",
		answer: "The Indus River originates in the Tibetan Plateau and is primarily fed by the melting glaciers of the Himalayas.",
	},
	{
		question: "Which river forms India's eastern border with Bangladesh?",
		answer: "The Brahmaputra River forms India's eastern border with Bangladesh before flowing into the Bay of Bengal.",
	},
	{
		question:
			"What is the largest river island in India, located in the Brahmaputra River?",
		answer: "Majuli is the largest river island in India, situated in the Brahmaputra River in the state of Assam.",
	},
	{
		question:
			'Which river is known as the "Turbulent River" due to its erratic behavior?',
		answer: 'The Chambal River is often referred to as the "Turbulent River" due to its unpredictable flow and rugged terrain.',
	},
	{
		question: "Which river basin is the largest in India?",
		answer: "The Ganges-Brahmaputra-Meghna basin is the largest river basin in India, covering parts of India, Nepal, Bhutan, China, and Bangladesh.",
	},
	{
		question:
			"What is the significance of the Yamuna River in Hindu mythology?",
		answer: "The Yamuna River is revered as the sister of the Ganges in Hindu mythology and holds significant religious importance.",
	},
	{
		question:
			"Which river is considered the lifeline of the desert state of Rajasthan?",
		answer: "The Luni River is considered the lifeline of Rajasthan, providing crucial water for irrigation and drinking purposes.",
	},
	{
		question: "What is the primary source of water for the Godavari River?",
		answer: "The Godavari River is primarily fed by rainfall and streams originating in the Western Ghats.",
	},
	{
		question: 'Which river is also known as the "South Ganges"?',
		answer: 'The Godavari River is often referred to as the "South Ganges" due to its cultural and religious significance in southern India.',
	},
	{
		question:
			"What is the name of the river that flows through the Sundarbans mangrove forest?",
		answer: "The Ganges and Brahmaputra Rivers merge to form a complex network of waterways in the Sundarbans mangrove forest.",
	},
	{
		question: 'Which river is known as the "River of Bengal"?',
		answer: 'The Brahmaputra River is often called the "River of Bengal" as it flows through the region and empties into the Bay of Bengal.',
	},
	{
		question:
			"What is the significance of the Narmada River in Indian folklore?",
		answer: "The Narmada River is considered one of the holiest rivers in India and is associated with various myths and legends.",
	},
	{
		question:
			'Which river is considered the "Giver of Life" in the state of Tamil Nadu?',
		answer: "The Kaveri River is often called the 'Giver of Life' in Tamil Nadu as it provides water for irrigation and sustains agriculture.",
	},
	{
		question: "What is the primary source of water for the Mahanadi River?",
		answer: "The Mahanadi River is primarily fed by rainfall and streams originating in the Chhattisgarh region.",
	},
	{
		question:
			'Which river is known as the "Sorrow of Assam" due to its devastating floods?',
		answer: "The Brahmaputra River is often referred to as the 'Sorrow of Assam' due to its destructive floods.",
	},
	{
		question: "What is the primary source of water for the Kaveri River?",
		answer: "The Kaveri River is primarily fed by rainfall and streams originating in the Western Ghats.",
	},
	{
		question: "Which river forms the largest delta in the world?",
		answer: "The Ganges-Brahmaputra Delta, also known as the Sundarbans Delta, is the largest delta in the world.",
	},
	{
		question:
			"What is the significance of the Krishna River in Indian mythology?",
		answer: "The Krishna River is associated with various legends and is revered as a sacred river in Hinduism.",
	},
	{
		question: 'Which River is known as the "Lifeline of Kerala"?',
		answer: "The Periyar River is often called the 'Lifeline of Kerala' as it provides water for irrigation, drinking, and hydroelectric power generation.",
	},
	{
		question: "What is the primary source of water for the Tapti River?",
		answer: "The Tapti River is primarily fed by rainfall and streams originating in the Satpura Range.",
	},
];

export default function Factsheet() {
	return (
		<MainLayout title={"Factsheet"} bgImg={bgImg} position={"bottom"}>
			<Box p={10} px={"15%"} bgcolor={"#f2f2f2"}>
				{faqs.map((faq, index) => (
					<Accordion
						key={index}
						style={{ backgroundColor: "white" , marginBottom: "20px"}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel${index}-content`}
							id={`panel${index}-header`}
						>
							<Typography variant="h6" fontWeight={600} color={"#264e79"}>{faq.question}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="h6" color={"#264e79"}>{faq.answer}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</Box>
		</MainLayout>
	);
}
