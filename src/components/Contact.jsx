import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wwyv5zh',
            'template_c7bsi1p',
            form.current,
            'HtmyPQfWiVNNlPvPF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <section className='form_container'>
            <h2>Get in touch!</h2>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="Name" />
                    <label>Email</label>
                    <input type="email" name="Email" />
                    <label>Message</label>
                    <textarea name="Message" />
                    <input type="submit" value="Send message" />
                </form>
            </section>
        </>
    );
};