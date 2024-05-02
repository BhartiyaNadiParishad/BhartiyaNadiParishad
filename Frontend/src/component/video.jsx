import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Video() {
  return (
    <Box sx={{p:4, display: "flex" , columnGap: "16px" , rowGap: "16px"}} justifyContent={"center"} flexWrap={"wrap"}>
        <Box sx={{backgroundColor: "#002641", p: 2}}>
            <video width={500} height={500} controls>
                <source src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Typography mt={2} sx={{textAlign: "center", fontWeight: "bold", color: "white"}}>About BNP</Typography>
        </Box>
        <Box sx={{backgroundColor: "#002641", p: 2}}>
            <video width={500} height={500} controls>
                <source src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Typography mt={2} sx={{textAlign: "center", fontWeight: "bold", color: "white"}}>Indian River System</Typography>
        </Box>

    </Box>
  )
}
