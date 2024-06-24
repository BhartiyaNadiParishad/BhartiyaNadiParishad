import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import MainLayout from "../Layout/mainLayout";
import bg from '../../assets/bg18.jpg';

const faqData = [
    {
        summary: "Why BNP ?",
        details: "BNP is formed because Rivers also need rejuvenation with time and there are a lot of people who are contributing to this cause and BNP will allow these people to work for this together as a Team.",
    },
    {
        summary: "About BNP",
        details: "BHARTIYA NADI PARISHAD has been formed by Mr. Raman Kant to bring together the river revitalization efforts being made in different parts of the country.",
    },
    {
        summary: "Objective of BNP",
        details: "The main work of the BNP is to make the rivers of India clean and uninterrupted by creating mutual coordination.",
    },
    {
        summary: "Target of BNP",
        details: "The main target of BNP is to provide a successful and permanent solution to the pollution, encroachment, and water shortage that India's rivers have been facing since a long time.",
    },
    {
        summary: "How will the society benefit from BNP?",
        details: "By protecting and restoring our rivers, BNP will play a critical role in bending the biodiversity curve and will ensure a sustainable and reliable water source for both human and natural systems.",
    },
    {
        summary: "How to Join BNP",
        details: "If you’re really interested in working for us, contact us at: info@bharatiyanadiparishad.org",
    },
];

const Faqs = () => (
    <MainLayout title="FAQs" bgImg={bg} position="center">
        <div style={{ background: "#f2f2f2", padding: "5% 10%" }}>
            {faqData.map((faq, index) => (
                <Accordion key={index} style={{ backgroundColor: "inherit" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        style={{ background: "inherit" }}
                    >
                        {faq.summary}
                    </AccordionSummary>
                    <AccordionDetails>
                        {faq.details}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    </MainLayout>
);

export default Faqs;
