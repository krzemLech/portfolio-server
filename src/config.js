const MAX_COUNT = process.env.MAX_COUNT ? +process.env.MAX_COUNT : 20;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const TWILIO_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_NUMBER = process.env.TWILIO_NUMBER;
const EMAIL_KEY = process.env.SENDGRID_API_KEY;
const ENV = process.env.ENV;
const APP_ID = process.env.APP_ID;
const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL;
const REDIS_PASS = process.env.REDIS_PASS;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_SERVER = process.env.EMAIL_SERVER;

module.exports = {
  MAX_COUNT,
  MONGO_URI,
  TWILIO_SID,
  TWILIO_TOKEN,
  EMAIL_KEY,
  TWILIO_NUMBER,
  ENV,
  APP_ID,
  PORT,
  REDIS_PASS,
  REDIS_URL,
  EMAIL_PASS,
  EMAIL_USER,
  EMAIL_SERVER,
};
