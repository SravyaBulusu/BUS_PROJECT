
const express = require('express');
const nodemailer = require('nodemailer');

const mailSender = async (req, res) => {
    const { name, email, subject, phone, message } = req.body;

    // Create transporter object with Gmail service
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sravyabulusu2005@gmail.com", // Your Gmail address
            pass: "kllo jvng xbml qswy" // Your Gmail app-specific password (not regular password)
        }
    });

    // Mail options
    const mailOptions = {
        from: "req.body.email", // Sender address\
        to: "sravyabulusu2005@gmail.com", // Destination email
        subject: subject || 'New Contact Form Submission', // Email subject
        text: `You received a message from:
               Name: ${name}
               Email: ${email}
               Phone: ${phone}
               Message: ${message}` // Email content with form data
    };
    console.log(req.body.email);

    // Send mail
    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!", info });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { mailSender };