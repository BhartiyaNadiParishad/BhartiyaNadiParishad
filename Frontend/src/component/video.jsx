import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Video() {
    return (
        <Box sx={{ p: 3, display: "flex", width: "100vw", columnGap: 2, rowGap: 2, backgroundColor: "#daf0fd" }} justifyContent={"space-between"} flexWrap={"wrap"}>
            <video className='lg:w-[49%] md:w-[100%]' height={"auto"} controls>
                <source src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video className='lg:w-[49%] md:w-[100%]' height={"auto"} controls>
                <source src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    )
}
