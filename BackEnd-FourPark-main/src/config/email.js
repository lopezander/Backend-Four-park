const nodemailer = require("nodemailer");
require("dotenv").config();

class EmailService {
  constructor() {
    const auth = {
      type: "oauth2",
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
      accessToken: process.env.ACCESS_TOKEN,
      refreshToken: process.env.REFRESH_TOKEN,
      clientId: process.env.EMAIL_CLIENT,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
    };
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth,
    });
    this.transporter.verify(function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  }

  async sendEmail(data) {
    this.transporter.sendMail(data, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo enviado: " + info.response);
      }
    });
  }
}

const emailService = new EmailService();

module.exports = emailService;
