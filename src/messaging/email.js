const sgMail = require("@sendgrid/mail");
const { MAIL_KEY } = require("../config");

sendEmail = (name, email, subject, message) => {
  sgMail.setApiKey(MAIL_KEY);
  const msg = {
    to: "lech@krzem.dev", // Change to your recipient
    from: "lech@krzem.dev", // Change to your verified sender
    subject: subject,
    text: `from: ${name}\nemail: ${email}\nsubject: ${subject}\nmessage: ${message}}`,
    html: `<h1>${subject}</h1><h4>from: ${name}</h4><p>email address: ${email}</p><p>${message}</p>`,
  };
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.response.body.errors);
    });
};

module.exports = { sendEmail };
