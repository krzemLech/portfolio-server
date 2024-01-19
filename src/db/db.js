const mongoose = require("mongoose");
const { MONGO_URI } = require("../config");

const connectDB = () => {
  return mongoose.connect(MONGO_URI).then(() => console.log("DB Connected!"));
};

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  text: String,
  date: {
    type: String,
    default: () => new Date().toISOString().slice(0, 10),
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = { connectDB, Message };
