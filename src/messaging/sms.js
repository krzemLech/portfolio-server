const { TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER } = require("../config");
const client = require("twilio")(TWILIO_SID, TWILIO_TOKEN);

const sendSMS = (sender, number) => {
  return client.messages
    .create({
      body: `You have a new message from ${sender}`,
      from: TWILIO_NUMBER,
      to: number,
    })
    .then((message) => console.log(message.sid));
};

module.exports = { sendSMS };
