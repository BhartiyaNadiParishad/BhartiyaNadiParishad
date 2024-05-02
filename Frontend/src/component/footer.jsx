import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const DotIcon = styled(FiberManualRecordIcon)(() => ({
    marginRight: 8,
    fontSize: 8,
}));

const CustomTypography = styled(Typography)(() => ({
    color: '#47d0d9',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
}));

export default function Footer() {
    return (
        <>
            <Grid container py={2} m={4} justifyContent={'space-between'} rowGap={4} sx={{ borderBottom: "1px solid grey" }}>
                <Grid display="flex" flexDirection="column" alignItems={"center"} rowGap={2} sx={{ paddingRight: 6 }}>
                    <img src='src\assets\logo1.png' height="125px" width="125px" alt="Logo" />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontSize: 24,
                            fontFamily: 'yatra',
                            fontWeight: "bold",
                        }}
                    >
                        भारतीय नदी परिषद
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid display="flex" flexDirection="column" rowGap={3} xs={12} md={3}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Useful Links</Typography>
                        <Box>
                            <CustomTypography><DotIcon />Home</CustomTypography>
                            <CustomTypography><DotIcon />About us</CustomTypography>
                            <CustomTypography><DotIcon />Programmes</CustomTypography>
                            <CustomTypography><DotIcon />Terms of service</CustomTypography>
                            <CustomTypography><DotIcon />Terms of service</CustomTypography>
                        </Box>
                    </Grid>
                    <Grid display="flex" flexDirection="column" rowGap={3} xs={12} md={5}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>River Rejuvenation Blueprint</Typography>
                        <Box>
                            <CustomTypography><DotIcon />Raman River Rejuvenation Model</CustomTypography>
                            <CustomTypography><DotIcon />Uttar Pradesh River Policy Draft 2024</CustomTypography>
                            <CustomTypography><DotIcon />Ponds Rejuvenation Model</CustomTypography>
                        </Box>
                    </Grid>
                    <Grid display="flex" flexDirection="column" rowGap={3} xs={12} md={4}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>River Rules, Treaty , Acts and Guidelines</Typography>
                        <Box>
                            <CustomTypography><DotIcon />River and related orders</CustomTypography>
                            <CustomTypography><DotIcon />River Policy of Uttar Pradesh</CustomTypography>
                            <CustomTypography><DotIcon />Indian Water Policy</CustomTypography>
                            <CustomTypography><DotIcon />Uttar Pradesh Ground Water Bill</CustomTypography>

                        </Box>
                    </Grid>
                </Grid>
                <Grid display="flex" flexDirection="column" alignItems={"center"} rowGap={1}>
                    <img src='src\assets\logo1.png' height="125px" width="125px" alt="Logo" className='mr-9' />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontSize: 22,
                            fontFamily: 'yatra',
                            fontWeight: "bold",
                        }}
                    >
                        Indian River Council
                    </Typography>
                </Grid>
            </Grid>
            <Grid mb={2} container justifyContent={'center'}>
                <Typography sx={{ fontSize: "12px" }}>© Copyright Bhartiya Nadi Parishad. All Rights Reserved</Typography>
            </Grid>
        </>
    )
}
