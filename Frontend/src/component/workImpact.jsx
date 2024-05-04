import { Box, Typography, styled } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import img4 from '../assets/riverDark.jpg'
import img3 from '../assets/projects.jpg'
import img2 from '../assets/partners.jpg'
import img1 from '../assets/members.jpg'
import logo1 from '../assets/Icons/members.png'
import logo2 from '../assets/Icons/partners.png'
import logo3 from '../assets/Icons/projects.png'
import logo4 from '../assets/Icons/river.png'

const CustomGrid2 = styled(Grid2)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 225,
    height: 200,
    gap: 8,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    '&:hover': {
        backgroundImage: "none",
        backgroundColor: "rgb(0 38 65)"
    },
})

export default function WorkImpact() {
    return (
        <Box sx={{ padding: "70px 10%", backgroundColor: "#daf0fd" }}>
            <Grid2 container justifyContent={'space-around'} columnGap={2} rowGap={2} >
                <CustomGrid2 sx={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <img src={logo1} height={45} width={45} />
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }} >1250</Typography>
                    <Typography variant='h6' sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }} >Members</Typography>
                </CustomGrid2>
                <CustomGrid2 sx={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <img src={logo2} height={45} width={45} />
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }} >531</Typography>
                    <Typography variant='h6' sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }} >Partners</Typography>
                </CustomGrid2>
                <CustomGrid2 sx={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <img src={logo3} height={45} width={45} />
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }} >163</Typography>
                    <Typography variant='h6' sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }} >Projects</Typography>
                </CustomGrid2>
                <CustomGrid2 sx={{
                    backgroundImage: `url(${img4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <img src={logo4} height={45} width={45} />
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "white" }} >215</Typography>
                    <Typography variant='h6' sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }} >Rivers Covered</Typography>
                </CustomGrid2>
            </Grid2>
        </Box>
    )
}
