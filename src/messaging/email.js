const sgMail = require("@sendgrid/mail");
const { EMAIL_KEY, EMAIL_USER } = require("../config");

sendEmail = (name, email, subject, message) => {
  sgMail.setApiKey(EMAIL_KEY);
  const msg = {
    to: EMAIL_USER,
    from: EMAIL_USER,
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
