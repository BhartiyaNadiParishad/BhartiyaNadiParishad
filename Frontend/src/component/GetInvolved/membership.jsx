import React from 'react'
import { List, ListItem, ListItemIcon, Paper, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import MembershipForm from './membershipForm'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import MainLayout from '../Layout/mainLayout'


export default function Membership() {
    return (
        <>
            <MainLayout>
                <Typography variant='h4' fontWeight={"bold"} textAlign={"center"}> Membership</Typography>
                <Grid2 container justifyContent={"center"} rowGap={4} my={4} columnGap={4}>
                    <Grid2 md={5} xs={12} >
                        <Paper elevation={2} sx={{padding : "30px 30px", height: "100%"}}>
                                <Typography variant='h6' textAlign={"justify"}>
                                Any Indian Civil/Social Organization/University/Research Institute/Company, a member of the BNP, 
                                can be contributed in any way, a river lover and its conduct is clean. 
                                Such dignitaries or organizations can also become a member of the BNP who want to make some positive efforts/cooperation for the river/rivers in the country in collaboration with the BNP. 
                                A member of the BNP can be made only under a selected process fixed. Members of the BNP will get the following benefits.
                                </Typography>
                                <List >
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                            A letter and an identity card will be made available to the person/organization from the BNP Secretariat.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                        The river kit of the BNP will be received. This river kit will have a Brochure, T-shirt, Pan, Pad, Water Bottle, Sticker, Mug and other materials of the BNP.
                                        </Typography >
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6'>
                                        The river on which the person who is working on a member will be made a River Warrior that is, the person working on the River Warrior will be named the Hindon River Warrior. A person or organization can also become a Warrior of more than one river.
                                        </Typography >
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
                                        The member will be informed about all the activities of BNP from time to time.
                                        </Typography >
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{fontSize: "10px" , color: "black"}} />
                                        </ListItemIcon>
                                        <Typography variant='h6' >
                                        The newsletter of the BNP will get every issue of 'NADI GATHA’ (River Saga).
                                        </Typography >
                                    </ListItem>
                                </List>
                                <Typography gutterBottom variant='h5' fontWeight={"bold"}>
                                    Requirements to become members - 
                                </Typography>
                                <Typography variant='h6' gutterBottom  textAlign={"justify"} >
                                    To become a member of the BNP, a form will have to be filled and the annual 5000 Indian rupees will 
                                    have to be deposited in the account of the BNP. 
                                    This fee will be for lifetime membership.
                                </Typography>
                                <Typography variant='h6' fontWeight={"bold"}>Bank Details</Typography>
                                <Typography variant='h6' fontWeight={"bold"}>Bhartiya Nadi Parishad</Typography>
                                <Typography variant='h6' fontWeight={"bold"}>A/C - </Typography>
                                <Typography variant='h6' fontWeight={"bold"}>IFSC - </Typography>
                                <Typography variant='h6' fontWeight={"bold"}>Indian Bank</Typography>
                                <Typography variant='h6' fontWeight={"bold"}>CCSU Campus, Meerut (UP)</Typography>
                        </Paper>
                    </Grid2>
                    <Grid2  md={5} xs={12}>
                        <Paper elevation={2} sx={{padding : "30px 30px", height: "100%"}}>  
                            <MembershipForm />
                        </Paper> 
                    </Grid2>
                </Grid2>
            </MainLayout>
        </>
    )
}
