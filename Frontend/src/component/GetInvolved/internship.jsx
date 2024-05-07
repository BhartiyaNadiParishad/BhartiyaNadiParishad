import React from 'react'
import {List, ListItem, ListItemIcon, Paper, Typography} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import InternshipForm from './internshipForm'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import MainLayout from '../Layout/mainLayout'


export default function Internship() {
    return (
        <>
            <MainLayout>
                <Typography variant='h4' fontWeight={"bold"} textAlign={"center"}> Internship</Typography>
                <Grid2 container justifyContent={"center"} rowGap={4} my={4} columnGap={4}>
                    <Grid2 md={5} xs={12}>
                        <Paper elevation={2} sx={{padding : "30px 30px", height: "100%"}}>
                                <Typography variant='h6' textAlign={"justify"}>
                                Any student with good conduct can do internship with BNP. 
                                For this, the requirements set by BNP will have to be fulfilled. 
                                The student must also give a letter from his college/institute/university.
                                </Typography>
                                <List >
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                            The river kit of the BNP will be received. This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                        The intern will be invited to the annual Rashtriya Nadi Sangam (National River Seminar).
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                        The intern will be informed about all the activities of BNP from time to time.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                        The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                        The intern will be given topic and remuneration as per his interest and qualification.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6' >
                                        After completing the internship, the intern who performs his/her work properly will be given a certificate by BNP.
                                        </Typography>
                                    </ListItem>
                                </List>
                        </Paper>
                    </Grid2>
                    <Grid2 md={5} xs={12}>
                        <Paper elevation={2} sx={{padding : "30px 30px", height: "100%"}}>
                            <InternshipForm />
                        </Paper>
                    </Grid2>
                </Grid2>
            </MainLayout>
        </>
    )
}
