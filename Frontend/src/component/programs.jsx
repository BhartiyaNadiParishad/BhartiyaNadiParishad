import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, styled } from '@mui/material';
import img from '../assets/background1.jpg'

const CustomAccordion = styled(Accordion)({
    padding: "10px 15px",
    marginBottom: '7px',
    position: "static",
    maxWidth: "850px",
})

export default function AccordionExpandDefault() {
    return (
    <Box sx={{padding: '60px 10%', 
                backgroundImage: `url(${img})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Box sx={{marginBottom: "60px", width: '100%' , display: 'flex', justifyContent: 'center', flexDirection: 'column' , alignItems: 'center'}}>
            <Typography variant="h3" gutterBottom style={{fontWeight: 'bold' , color: "white"}}> 
            Our Programmes
            </Typography>
            <Typography variant="h6" gutterBottom  style={{fontSize: '18px',  color: "white"}}>
            Below you can find information about our various programmes.
            </Typography>
        </Box>
        <CustomAccordion >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <Typography sx={{fontWeight: "bold"}}>1. River Award</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                The NADI UPASAK Award will be given to 
                the two best efforts made every year at the government and non-government levels for river revitalisation in the country.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <Typography sx={{fontWeight: "bold"}}>2. River Symposium</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            A one-day 'BHARTIYA NADI SANGAM' is organized every year on 22 March. 
            This river confluence is organised in any one city of BHARAT according to the circumstances.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <Typography sx={{fontWeight: "bold"}}>3. River Fellowship</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                BHAGIRATH River Fellowship is provided by the 
                BHARTIYA NADI PARISHAD for river research in BHARAT.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <Typography sx={{fontWeight: "bold"}}>4. River Talk </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                The BHARTIYA NADI PARISHAD will organise NADI KI BAAT 
                from time to time to maintain momentum in the work of river revitalisation in Bharat.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <Typography sx={{fontWeight: "bold"}}>5. River Research Centre </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                A river research centre GAON 
                (Grassroot Academy of Nature) is being established by the BHARTIYA NADI PARISHAD.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <Typography sx={{fontWeight: "bold"}}>6. River Research YATRA</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                From time to time, river research trips will be organised under the ‘Know Your River’ program to know your rivers.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
    </Box>
    );
}