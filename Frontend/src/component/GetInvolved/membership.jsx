import React from 'react'
import DrawerAppBar from '../drawer'
import Footer from '../footer'
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material'
import img from '../../assets/partners.jpg'
import volunteerImg from "../../assets/volunteer.jpg"
import membership from "../../assets/membership.jpg"
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import MembershipForm from './membershipForm'


export default function Membership() {
    return (
        <>
            <DrawerAppBar />
            <Box 
            sx={{
                // backgroundImage: `url(${img})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                padding: "250px 8% 0 8%"
            }}
            >
                <Typography  gutterBottom variant='h4' fontWeight={"bold"} textAlign={"center"}> Membership</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} rowGap={"20px"}>
                <Box padding= {"30px 30px"} width={"700px"}>
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
                </Box>
                <Box padding= {"30px 30px"} width={"700px"}>
                    <MembershipForm />
                </Box>
            </Box>
            
            <Box display= "flex" flexDirection={"column"} justifyContent={"center"} 
                        sx={{backgroundImage: `url(${img})`, 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            color: "white",
                            padding: "60px 80px 60px 80px"
                            }}>
                        <Typography sx={{fontSize: "20px" ,fontWeight: "bold" , textAlign: "justify" , marginBottom: "10px"}}>
                            “For 21 years, River Network has played an essential role in guiding our organization’s growth in strategic planning, 
                            fundraising, building leaders, and professional development skills. 
                            River Network also brings Southeastern groups together. 
                            I don’t know what we would do without River Network.  “
                        </Typography>
                        <Typography sx={{color: "#fe9e3d" ,fontWeight: "bold", fontSize: "20px"}}>
                            Cindy Lowry
                        </Typography>
                        <Typography sx={{fontWeight: "bold", fontSize: "20px"}}>
                            Alabama Rivers Alliance
                        </Typography>
            </Box>
            <Footer />
        </>
    )
}
