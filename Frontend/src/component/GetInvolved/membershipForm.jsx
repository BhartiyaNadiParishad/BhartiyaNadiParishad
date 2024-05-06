import React from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';

const FormContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "12px",
}));

function MembershipForm() {
    return (
        <FormContainer>
            <Typography variant="h5">
                Membership Form
            </Typography>
            <form>
                <FormContainer sx={{width: 400}}>
                    <TextField fullWidth id="title" label="Title" variant="standard" />
                    <TextField fullWidth id="firstName" label="First Name" variant="standard" />
                    <TextField fullWidth id="lastName" label="Last Name" variant="standard" />
                    <TextField fullWidth id="designation" label="Designation" variant="standard" />
                    <TextField fullWidth id="organization" label="Organization" variant="standard" />
                    <TextField fullWidth id="email" label="Email" variant="standard" />
                    <TextField fullWidth id="contactNumber" label="Contact Number" variant="standard" />
                    <TextField fullWidth id="address" label="Address" variant="standard" />
                    <TextField fullWidth id="workDescription" label="About Your Work (100 to 500 words)" variant="standard" rows={6}/>
                    <Typography variant="h6" mt={2}>
                        Your River Details
                    </Typography>
                    <TextField fullWidth id="riverLength" label="Length" variant="standard" />
                    <TextField fullWidth id="riverName" label="Name of The River" variant="standard" />
                    <TextField fullWidth id="originSite" label="Origin Site, District & State" variant="standard" />
                    <TextField fullWidth id="mergingPlace" label="Place of Merging" variant="standard" />
                    <TextField fullWidth id="discharge" label="Discharge of the River (mld)" variant="standard" />
                    <TextField fullWidth id="presentSituation" label="Present Situation" variant="standard" multiline rows={2} />
                    <TextField fullWidth id="waterQuality" label="Water Quality" variant="standard" />
                    <TextField fullWidth id="population" label="Population" variant="standard" />
                    <TextField fullWidth id="riverPhotos" label="River Photos" variant="standard" />
                </FormContainer>
                <Button variant="contained" color="primary" sx={{marginTop: "20px"}}>
                    Submit
                </Button>
            </form>
        </FormContainer>
    );
}

export default MembershipForm;
