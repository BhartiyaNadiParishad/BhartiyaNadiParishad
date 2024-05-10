import React from 'react'
import MainLayout from '../Layout/mainLayout'
import { Box, Typography } from '@mui/material'
import TeamList from './teamList'
import { coreTeamData, advisoryCouncilData , technicalCouncilData } from './constant'

export default function Team() {
    return (
        <MainLayout>
            <Box padding={"0 5% 20px 5%"} display={"flex"} rowGap={"40px"} flexDirection={"column"}>
                <Typography variant='h4' fontWeight={"bold"} textAlign={"center"} >Our Team</Typography>
                <Typography variant='h6' textAlign={"justify"} gutterBottom>
                    We are a group of water and river experts who come with years of ground experience in river development.
                    Each of the members has been actively engaged in their region with various forces to uplift the condition of the water situation. 
                    Our learning through our various experiences from national and international exposure is brought forward to Bhartiya Nadi Parishad
                </Typography>
                <TeamList title={"Our Core Team"} data={coreTeamData}/>
                <TeamList title={"Advisory Council"} data={advisoryCouncilData}/>
                <TeamList title={"Technical Council"} data={technicalCouncilData}/>
            </Box>
        </MainLayout>
    )
}
