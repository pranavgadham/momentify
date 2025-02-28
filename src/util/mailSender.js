import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'xyz179499@gmail.com',
        pass: 'horncsmsoukejsoq'
    },
});



const sendMail = async (email,otp) => {
    const mailOptions = {
        from: process.env.mail,
        to: email,
        subject: "Otp to reset password for your Momentify account",
        text: `Your otp is ${otp} and it is valid for 5 minutes`
    };
    await transporter.sendMail(mailOptions);
}

export default sendMail;

