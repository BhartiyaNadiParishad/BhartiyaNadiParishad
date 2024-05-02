import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, styled } from '@mui/material';
import img from '../assets/background5.jpg'

const CustomAccordion = styled(Accordion)({
    padding: "10px 15px",
    marginBottom: '7px',
    position: "static",
    maxWidth: "850px",
})

export default function GetInvolved() {
    return (
        <Box sx={{  padding: '30px 10%', 
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: '100%' , display: 'flex', 
                    height: '70vh',
                    justifyContent: 'center', flexDirection: 'column' , 
                    rowGap: "30px",
                    alignItems: 'center'}}>
            <Typography variant="h3" gutterBottom style={{fontWeight: 'bold' , color: "white"}}> 
            Get Involved
            </Typography>
            <Typography variant="h6"  gutterBottom  style={{fontSize: '16px',  color: "white", textAlign: "center"}}>
                Every person can join the BHARTIYA NADI PARISHAD who has a strong belief in BHARTIYA traditions, the BHARTIYA Constitution, and the sovereignty of BHARAT, 
                to see the rivers of Bharat flowing clean and uninterrupted. Any river-loving organisation or collective efforts of common people, 
                society and government can become a part of the positive river revitalization mass movement. 
                A river-loving organization or individual can join the BHARTIYA NADI PARISHAD in all three forms - associate, member, and volunteer. 
                For this, they will have to complete the formalities of the prescribed procedure of the BHARTIYA NADI PARISHAD.
            </Typography>
            <Button sx={{backgroundColor: "#1b5076", 
                        fontWeight: "bold" ,
                        color: "white", 
                        padding: "10px 70px 6px 70px",
                        borderRadius: "20px",
                        '&:hover': {  // Corrected: '&' before ':hover'
                            backgroundColor: 'white',
                            color: '#47d0d9',
                            }
                        }}>
                Get Involved
            </Button>
        </Box>
    );
}