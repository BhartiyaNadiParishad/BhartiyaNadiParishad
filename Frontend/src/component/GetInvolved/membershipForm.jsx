import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, styled, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
// import ReCAPTCHA from "react-google-recaptcha";


const CustomContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "20px",
}));

function MembershipForm() {
    const recaptchaRef = useRef(null);

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        designation: "",
        organization: "",
        email: "",
        contactNumber: "",
        address: "",
        workDescription: "",
        riverLength: "",
        riverName: "",
        originSite: "",
        mergingPlace: "",
        discharge: "",
        presentSituation: "",
        waterQuality: "",
        population: "",
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
        console.log(formData);

        const requestBody = {
            service_id: 'service_d52ztbs', 
            template_id: 'template_35dd4mv', 
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
                        title: "",
                        firstName: "",
                        lastName: "",
                        designation: "",
                        organization: "",
                        email: "",
                        contactNumber: "",
                        address: "",
                        workDescription: "",
                        riverLength: "",
                        riverName: "",
                        originSite: "",
                        mergingPlace: "",
                        discharge: "",
                        presentSituation: "",
                        waterQuality: "",
                        population: "",
                    });
                    setSnackbarMessage('Form submitted successfully');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setCaptchaValue('');
                    recaptchaRef.current.reset();
        }}
        catch(err){
            console.log(err);
            setSnackbarMessage('Failed to submit form');
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
                Membership Form
            </Typography>
            <Box width={"100%"}>
                <form onSubmit={handleSubmit}>
                    <CustomContainer>
                        <TextField fullWidth id="title" label="Title" variant="standard" value={formData.title} onChange={handleInputChange} />
                        <TextField fullWidth id="firstName" label="First Name" variant="standard" value={formData.firstName} onChange={handleInputChange} />
                        <TextField fullWidth id="lastName" label="Last Name" variant="standard" value={formData.lastName} onChange={handleInputChange} />
                        <TextField fullWidth id="designation" label="Designation" variant="standard" value={formData.designation} onChange={handleInputChange} />
                        <TextField fullWidth id="organization" label="Organization" variant="standard" value={formData.organization} onChange={handleInputChange} />
                        <TextField fullWidth id="email" label="Email" variant="standard" value={formData.email} onChange={handleInputChange} />
                        <TextField fullWidth id="contactNumber" label="Contact Number" variant="standard" value={formData.contactNumber} onChange={handleInputChange} />
                        <TextField fullWidth id="address" label="Address" variant="standard" value={formData.address} onChange={handleInputChange} />
                        <TextField fullWidth id="workDescription" label="About Your Work (100 to 500 words)" variant="standard" multiline rows={6} value={formData.workDescription} onChange={handleInputChange} />
                        <Typography variant="h6" mt={2}>
                            Your River Details
                        </Typography>
                        <TextField fullWidth id="riverLength" label="Length" variant="standard" value={formData.riverLength} onChange={handleInputChange} />
                        <TextField fullWidth id="riverName" label="Name of The River" variant="standard" value={formData.riverName} onChange={handleInputChange} />
                        <TextField fullWidth id="originSite" label="Origin Site, District & State" variant="standard" value={formData.originSite} onChange={handleInputChange} />
                        <TextField fullWidth id="mergingPlace" label="Place of Merging" variant="standard" value={formData.mergingPlace} onChange={handleInputChange} />
                        <TextField fullWidth id="discharge" label="Discharge of the River (mld)" variant="standard" value={formData.discharge} onChange={handleInputChange} />
                        <TextField fullWidth id="presentSituation" label="Present Situation" variant="standard" multiline rows={2} value={formData.presentSituation} onChange={handleInputChange} />
                        <TextField fullWidth id="waterQuality" label="Water Quality" variant="standard" value={formData.waterQuality} onChange={handleInputChange} />
                        <TextField fullWidth id="population" label="Population" variant="standard" value={formData.population} onChange={handleInputChange} />
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

export default MembershipForm;
