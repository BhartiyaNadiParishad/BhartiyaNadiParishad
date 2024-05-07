import React from 'react'
import MainLayout from '../Layout/mainLayout'
import { Box, Typography } from '@mui/material'
import Faqs from './faq'

export default function Contact() {
    return (
        <MainLayout>
            <Typography variant='h4' fontWeight={"bold"} textAlign={"center"} color={"#1364ad"}>Contact Us </Typography>
            <Box display={"flex"} 
                flexDirection={"column"} 
                rowGap={"30px"} 
                maxWidth={"600px"} 
                sx={{margin : "40px auto"}} 
                padding={"20px"}>
                <Typography variant='h5' fontWeight={"bold"} color={"#1364ad"}>Registered Office</Typography>
                <Typography variant='h6' sx={{fontSize: "18px"}}>
                    Village and Post – Poothi <br/>
                    Tehsil – Mawana <br />
                    District – Meerut, Pin – 250406 <br/>
                    Uttar Pradesh - India
                </Typography>
                <Typography variant='h5' fontWeight={"bold"} color={"#1364ad"}>Working Office</Typography>
                <Typography variant='h6' sx={{fontSize: "18px"}}>
                    Ist Floor, Samrat Shopping Mall <br/>
                    Garh Road, Meerut, Pin – 250001 <br />
                    Uttar Pradesh – India
                </Typography>
                <Typography variant='h6'>
                    <strong>Phone -</strong> 0121-3596749 <br/>
                    <strong>Email:</strong> info@bhartiyanadiparishad.org
                </Typography>
                <Typography variant='h5' fontWeight={"bold"} textAlign={"center"} color={"#1364ad"}>Frequently Asked Question</Typography>
                <Faqs />
            </Box>
        </MainLayout>
    )
}
