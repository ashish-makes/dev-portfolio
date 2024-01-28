import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/contact.webp';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [messageStatus, setMessageStatus] = useState({
        type: null,
        text: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            message: '',
        };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Valid email is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => !error);
    };

    const sendEmail = async () => {
        try {
            const emailJSResult = await emailjs.send(
                'service_ijaiqoh',
                'template_noj986l',
                {
                    ...formData,
                    from_name: formData.name,
                },
                'IjOyQd2RtoujTYM0g'
            );

            console.log('EmailJS Response:', emailJSResult);

            setMessageStatus({
                type: 'success',
                text: 'Message sent successfully!',
            });

        } catch (error) {
            console.error('Error sending email:', error);
            
            setMessageStatus({
                type: 'error',
                text: 'Error sending message. Please try again later.',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            sendEmail();
        } else {
            console.log('Form has errors. Please fix them before submitting.');
        }
    };

    return (
        <div className='container contact'>
            <h1 style={{ fontSize: '60px' }}>get in touch.</h1>
            <div className='contact-form'>
            <img src={contactImg} alt='contact-img' />
                <form onSubmit={handleSubmit}>
                    <div className='name-container'>
                        <label htmlFor='name'>name</label>
                        <input
                            type='text'
                            id='name'
                            placeholder='john doe'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p style={{ marginTop: '5px', color: '#fc4103' }} className='error-message'>{errors.name}</p>}
                    </div>
                    <div className='email-container'>
                        <label htmlFor='email'>email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='john.doe@gmail.com'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p style={{ marginTop: '5px', color: '#fc4103' }} className='error-message'>{errors.email}</p>}
                    </div>
                    <div className='message-container'>
                        <label htmlFor='message'>message</label>
                        <textarea
                            rows={10}
                            id='message'
                            placeholder='type your message here...'
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        {errors.message && <p style={{ marginTop: '5px', color: '#fc4103' }} className='error-message'>{errors.message}</p>}
                    </div>
                    <div>
                        <button className='btn' type='submit'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2209 21.6301C13.0409 21.6301 11.3709 20.8001 10.0509 16.8301L9.33086 14.6701L7.17086 13.9501C3.21086 12.6301 2.38086 10.9601 2.38086 9.78007C2.38086 8.61007 3.21086 6.93007 7.17086 5.60007L15.6609 2.77007C17.7809 2.06007 19.5509 2.27007 20.6409 3.35007C21.7309 4.43007 21.9409 6.21007 21.2309 8.33007L18.4009 16.8201C17.0709 20.8001 15.4009 21.6301 14.2209 21.6301ZM7.64086 7.03007C4.86086 7.96007 3.87086 9.06007 3.87086 9.78007C3.87086 10.5001 4.86086 11.6001 7.64086 12.5201L10.1609 13.3601C10.3809 13.4301 10.5609 13.6101 10.6309 13.8301L11.4709 16.3501C12.3909 19.1301 13.5009 20.1201 14.2209 20.1201C14.9409 20.1201 16.0409 19.1301 16.9709 16.3501L19.8009 7.86007C20.3109 6.32007 20.2209 5.06007 19.5709 4.41007C18.9209 3.76007 17.6609 3.68007 16.1309 4.19007L7.64086 7.03007Z" fill="#fff" />
                                    <path d="M10.1108 14.4C9.92078 14.4 9.73078 14.33 9.58078 14.18C9.29078 13.89 9.29078 13.41 9.58078 13.12L13.1608 9.53C13.4508 9.24 13.9308 9.24 14.2208 9.53C14.5108 9.82 14.5108 10.3 14.2208 10.59L10.6408 14.18C10.5008 14.33 10.3008 14.4 10.1108 14.4Z" fill="#fff" />
                                </svg>
                            </svg>
                            <span>send message</span>
                        </button>
                    </div>
                </form>
                {messageStatus.type && (
                    <p
                        className={`message ${messageStatus.type === 'success' ? 'success' : 'error'
                            }`}
                    >
                        {messageStatus.text}
                    </p>
                )}
            </div>
        </div>
    );
}
