const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email address
    pass: process.env.EMAIL_PASS,  // Replace with your email password or app password if 2FA is enabled
  },
});

// Function to send email
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: 'yashvardhandhondge@gmail.com', // Sender address
    to,                         // Receiver address
    subject,                    // Subject line
    text, 
    html                      // Plain text body
                       
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
