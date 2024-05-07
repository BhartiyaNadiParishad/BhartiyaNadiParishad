import React from 'react'
import DrawerAppBar from '../drawer'
import { Box, Typography } from '@mui/material'
import Footer from '../footer'
import img from '../../assets/partners.jpg'

export default function MainLayout({children}) {
    return (
        <>
            <DrawerAppBar />
            <Box sx={{marginTop: "220px"}}>
                {children}
            </Box>
            <Box display= "flex" flexDirection={"column"} justifyContent={"center"} 
                    sx={{backgroundImage: `url(${img})`, 
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                        padding: "60px 80px 60px 80px"
                        }}>
                    <Typography sx={{fontSize: "20px" ,fontWeight: "bold" , textAlign: "justify" , marginBottom: "10px"}}>
                            “For 21 years, River Network has played an essential role in guiding our organization’s growth in strategic planning, 
                            fundraising, building leaders, and professional development skills. 
                            River Network also brings Southeastern groups together. 
                            I don’t know what we would do without River Network.  “
                    </Typography>
                    <Typography sx={{color: "#fe9e3d" ,fontWeight: "bold", fontSize: "20px"}}>
                        Cindy Lowry
                    </Typography>
                    <Typography sx={{fontWeight: "bold", fontSize: "20px"}}>
                        Alabama Rivers Alliance
                    </Typography>
            </Box>
            <Footer />
        </>    
    )
}
