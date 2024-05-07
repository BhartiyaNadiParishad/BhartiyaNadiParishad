import React, { useState } from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';
import axios from 'axios';

const CustomContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "20px"
}));

function InternshipForm() {


    const [formData, setFormData] = useState({
        service : "Internship form",
        title: "",
        firstName: "",
        lastName: "",
        designation: "",
        organization: "",
        email: "",
        contactNumber: "",
        address: "",
        interest: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const requestBody = {
            service_id: 'service_d52ztbs',
            template_id: 'template_vuwp6vn',
            user_id: 'Z4wj3OTthLutaIT_z',
            template_params: formData,
        }

        axios.post('https://api.emailjs.com/api/v1.0/email/send', requestBody)
        .then(response => {
            console.log('Email sent successfully:', response.data);
            setFormData({
                title: '',
                firstName: '',
                lastName: "",
                designation: "",
                organization: "",
                email: "",
                contactNumber: "",
                address: "",
                interest: "",
            })

        })
        .catch(error => {
            console.error('Error sending email:', error);
        });

    };

    return (
        <CustomContainer>
            <Typography variant="h5">
                Internship Form
            </Typography>
            <Box width={"100%"}>
                <form onSubmit={handleSubmit} >
                    <CustomContainer>
                        <TextField fullWidth id="title" label="Title" variant="standard" value={formData.title} onChange={handleInputChange} />
                        <TextField fullWidth id="firstName" label="First Name" variant="standard" value={formData.firstName} onChange={handleInputChange}/>
                        <TextField fullWidth id="lastName" label="Last Name" variant="standard" value={formData.lastName} onChange={handleInputChange} />
                        <TextField fullWidth id="designation" label="Designation" variant="standard" value={formData.designation} onChange={handleInputChange} />
                        <TextField fullWidth id="organization" label="Organization" variant="standard" value={formData.organization} onChange={handleInputChange} />
                        <TextField fullWidth id="email" label="Email" variant="standard" value={formData.email} onChange={handleInputChange} />
                        <TextField fullWidth id="contactNumber" label="Contact Number" variant="standard" value={formData.contactNumber} onChange={handleInputChange}/>
                        <TextField fullWidth id="address" label="Address" variant="standard" value={formData.address} onChange={handleInputChange}/>
                        <TextField fullWidth id="interest" label="About Your Interest (100 to 500 words)" variant="standard" multiline rows={6} value={formData.interest} onChange={handleInputChange}/>
                    </CustomContainer>
                    <Button type="submit" sx={{marginTop: "20px"}} variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Box>
        </CustomContainer>
    );
}

export default InternshipForm;
