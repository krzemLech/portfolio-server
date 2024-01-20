const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS, EMAIL_SERVER } = require("../config");

exports.mailController = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: EMAIL_SERVER,
    port: 465,
    secureConnection: false,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  async function main() {
    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: "Test message ✔",
      text: "Test message from portfolio server ✔",
      html: "<p>Test message from portfolio server ✔</p>",
    });

    console.log("Message sent: %s", info.messageId);
  }

  await main().catch(console.error);
  res.json({ msg: "test message sent" });
};
