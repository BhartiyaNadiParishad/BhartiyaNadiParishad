import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Vision() {
    return (
        <Box pt={4} pb={3} px={2} sx={{ color: "rgb(19 100 173)", width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: "#daf0fd" }}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                Vision
            </Typography>
            <Typography variant="h6" style={{ color: "rgb(19 100 173)", fontSize: '18px', textAlign: "justify" }}>
                BNP aims to coordinate society and government efforts for river rejuvenation in India, promoting clean, uninterrupted rivers.
            </Typography>
        </Box>
    )
}
