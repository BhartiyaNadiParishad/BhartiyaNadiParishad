import React from 'react'
import { List, ListItem, ListItemIcon, Paper, Typography} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import VolunteerForm from './volunteerForm'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import MainLayout from '../Layout/mainLayout'


export default function Volunteer() {
    return (
        <>
            <MainLayout>
                <Typography variant='h4' fontWeight={"bold"} textAlign={"center"}> Volunteer</Typography>
                <Grid2 container justifyContent={"center"} rowGap={4} my={4} columnGap={4}>
                    <Grid2 md={5} xs={12}>
                        <Paper elevation={2} sx={{padding : "30px 30px", height: "100%"}} >
                            <Typography variant='h6' textAlign={"justify"}>
                            Any river lover can contribute to the work of river revitalization by becoming a BNP volunteer. 
                            The person who wants to become a volunteer of BNP should have clean conduct. One can become a volunteer only through the selection process set by BNP. 
                            By becoming a volunteer of BNP you will get the following benefits.A letter and an identity card will be made available to the person/organization from the BNP Secretariat.
                            </Typography>
                            <List >
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6'>
                                        The river kit of the BNP will be received. 
                                        This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6'>
                                        The person who becomes a volunteer will be known as River Warrior. The word River Warrior will be added to his name.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6'>
                                        The volunteer will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6'>
                                    The member will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).
                                    </Typography >
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6'>
                                        The volunteer will be informed about all the activities of BNP from time to time.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6' >
                                        The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                    </ListItemIcon>
                                    <Typography variant='h6' >
                                        Volunteers working with BNP will be given a certificate by BNP every year.                            
                                    </Typography>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid2>
                    <Grid2 md={5} xs={12}>
                        <Paper elevation={2} sx={{padding : "30px 30px", height: "100%"}}>
                            <VolunteerForm />
                        </Paper>
                    </Grid2>
                </Grid2>
            </MainLayout>
        </>
    )
}
