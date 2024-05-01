import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Vision() {
    return (
        <Box p={5} sx={{ width: '100%' , display: 'flex', justifyContent: 'center', flexDirection: 'column' , alignItems: 'center'}}>
            <Typography variant="h3" gutterBottom style={{fontWeight: 'bold' ,fontFamily: 'Comfortaa'}}> 
                Vision
            </Typography>
            <Typography variant="h6" gutterBottom  style={{fontSize: '18px', fontFamily: 'Comfortaa'}}>
                BNP aims to coordinate society and government efforts for river rejuvenation in India, promoting clean, uninterrupted rivers.
            </Typography>
        </Box>
    )
}
