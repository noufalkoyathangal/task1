const nodemailer = require("nodemailer");

const smtp = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ernestina.shanahan@ethereal.email",
      pass: "4sKjrhnE5MHer9QmRK",
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "Jonas Schmedtmann <hello@jonas.io>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  await transporter.sendMail(mailOptions);
};

module.exports = smtp;
