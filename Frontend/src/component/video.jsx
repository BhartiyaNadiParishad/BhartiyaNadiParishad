import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Video() {
  return (
    <Box sx={{p:5, display: "flex" , columnGap: "32px" , rowGap: "16px"}} justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box>
            <video width={700} height={700} controls>
                <source src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
        <Box>
            <video width={700} height={700} controls>
                <source src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    </Box>
  )
}
