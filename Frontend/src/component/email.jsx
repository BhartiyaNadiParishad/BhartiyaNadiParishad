import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs
            .sendForm('service_d52ztbs', 'template_35dd4mv', form.current, {
                publicKey: 'Z4wj3OTthLutaIT_z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit" value="Send" >submit</button>
        </form>
    );
};