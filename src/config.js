const MAX_COUNT = process.env.MAX_COUNT || 20;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const TWILIO_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_NUMBER = process.env.TWILIO_NUMBER;
const MAIL_KEY = process.env.SENDGRID_API_KEY;
const ENV = process.env.ENV;
const PORTFOLIO_ID = process.env.PORTFOLIO_ID;
const PORT = process.env.PORT || 3000;

module.exports = {
  MAX_COUNT,
  MONGO_URI,
  TWILIO_SID,
  TWILIO_TOKEN,
  MAIL_KEY,
  TWILIO_NUMBER,
  ENV,
  PORTFOLIO_ID,
  PORT,
};
