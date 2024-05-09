import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


export default function Testing() {
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
    })
    const [CaptchaValue , setCaptchaValue] = useState("")

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/submit-form/', {
            ...formData,
            CaptchaValue
        }).then(res => console.log(res.data.success))
    }    
    function onChange(value) {
        setCaptchaValue(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="title"
                label="Title"
                variant="standard"
                value={formData.title}
                onChange={handleInputChange}
            />
            <TextField
                id="firstName"
                label="First Name"
                variant="standard"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <ReCAPTCHA
                sitekey="6LdEM9YpAAAAAKv2j7jJ0azIsOR88gW97FUo_OkR"
                onChange={onChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
