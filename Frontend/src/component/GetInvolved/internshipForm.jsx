import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, styled, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const CustomContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "20px"
}));

function InternshipForm() {

    const recaptchaRef = useRef(null);

    const [formData, setFormData] = useState({
        service: "Internship form",
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
    const [CaptchaValue , setCaptchaValue] = useState("")
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const requestBody = {
            service_id: 'service_d52ztbs',
            template_id: 'template_vuwp6vn',
            user_id: 'Z4wj3OTthLutaIT_z',
            template_params: formData,
        }
        try{
            const res = await axios.post('http://localhost:3000/submit-form/', {
                ...formData,
                CaptchaValue
            })
            if(res.data.success){
                    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', requestBody)
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
                    });
                    setSnackbarMessage('Form submitted successfully');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    recaptchaRef.current.reset();
            }
            else {
                throw new Error('Form submission failed');
            }
        }
        catch(err){
            console.log(err.message);
            setSnackbarMessage(`${err.message}`);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    }

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    function onChange(value) {
        setCaptchaValue(value);
    }

    return (
        <CustomContainer>
            <Typography variant="h5">
                Internship Form
            </Typography>
            <Box width={"100%"}>
                <form onSubmit={handleSubmit} >
                    <CustomContainer>
                        <TextField fullWidth id="title" label="Title" variant="standard" value={formData.title} onChange={handleInputChange} />
                        <TextField fullWidth id="firstName" label="First Name" variant="standard" value={formData.firstName} onChange={handleInputChange} />
                        <TextField fullWidth id="lastName" label="Last Name" variant="standard" value={formData.lastName} onChange={handleInputChange} />
                        <TextField fullWidth id="designation" label="Designation" variant="standard" value={formData.designation} onChange={handleInputChange} />
                        <TextField fullWidth id="organization" label="Organization" variant="standard" value={formData.organization} onChange={handleInputChange} />
                        <TextField fullWidth id="email" label="Email" variant="standard" value={formData.email} onChange={handleInputChange} />
                        <TextField fullWidth id="contactNumber" label="Contact Number" variant="standard" value={formData.contactNumber} onChange={handleInputChange} />
                        <TextField fullWidth id="address" label="Address" variant="standard" value={formData.address} onChange={handleInputChange} />
                        <TextField fullWidth id="interest" label="About Your Interest (100 to 500 words)" variant="standard" multiline rows={6} value={formData.interest} onChange={handleInputChange} />
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LdEM9YpAAAAAKv2j7jJ0azIsOR88gW97FUo_OkR"
                            onChange={onChange}
                        />
                    </CustomContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>

                </form>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </CustomContainer>
    );
}

export default InternshipForm;
