import React from 'react'
import MainLayout from './Layout/mainLayout'
import Card from './Layout/card'
import { Box, Grid, Typography } from '@mui/material'

const data = [
    {
        heading: "Strength",
        description: "BNP is moving towards working for the betterment of rivers by uniting all the river activists, river researchers, river experts, policy makers, concerned government representatives, saints and river lovers of the country."
    },
    {
        heading: "Respect",
        description: "BNP respects every person who is thinking positively for the betterment of the rivers of India. The views of every such person are welcome on the platform of Indian River Council."
    },
    {
        heading: "Integrity",
        description: "BNP is committed to high ethical values and integrity in its work. We are accountable to every person who is a river lover."
    },
    {
        heading: "Balance",
        description: "BNP is in favor of bringing to the ground the vision of a healthy society along with the pure and uninterrupted nature of the rivers."
    },
    {
        heading: "Development",
        description: "Some priorities have been set by the BNP for the improvement of rivers. Apart from this, we as an organization believe in adopting new technologies and implementing them on the ground. We are also in favor of changing our approach with time."
    },
    {
        heading: "Inclusion",
        description: "There is no discrimination of any kind on the platform of BNP. We do not discriminate based on any kind of color, gender, caste, religion, region, or society. We are in favor of giving equal opportunity to all positive viewpoints. We give priority to making efforts for our rivers with everyone's inclusion and consideration. Indian Rivers Council wants to preserve the values and dignity of all."
    }
];




export default function OurValues() {
    return (
        <MainLayout>
            <Box p={8}>
                <Typography variant='h4' fontWeight={"bold"} textAlign={"center"} gutterBottom>Our Values</Typography>
                <Typography variant='h6' mb={2} textAlign={"justify"}>At BNP, our values run as deep as the waters we safeguard. 
                    We are driven by a commitment to environmental stewardship, teamwork, and community engagement, 
                    ensuring pristine riverways for generations to come. Our core values of sustainability, 
                    collaboration, and passion fuel our relentless dedication to restoring and preserving our precious rivers.
                </Typography>
                <Grid container spacing={4}>                
                    {data.map((item, index) => (
                        <Grid item xs={12} md={4}>
                            <Card key={index} title={item.heading} description={item.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </MainLayout>
    )
}
