const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route to handle the form submission
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    console.log(process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: 'yashvardhandhondge@gmail.com',
        subject: `Message from ${name}`,
        text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Message sent successfully!' });
    } catch (err) {
        console.log("Error:", err);
        res.json({ message: 'Error sending message, please try again later.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
