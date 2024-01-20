const { MAX_COUNT } = require("../config");
const { sendEmail } = require("../messaging/email");
const { Message } = require("../db/db");

const messageController = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const count = await Message.countDocuments({
    date: new Date().toISOString().slice(0, 10),
  });

  if (count > MAX_COUNT) {
    return res.status(503).json({ error: "Too many messages, try tomorrow!" });
  }

  try {
    const newMessage = new Message({ name, email, subject, text: message });
    newMessage.save();
    await sendEmail(name, email, subject, message);
    res.json({ message: "message sent" });
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to send message" });
  }
};

module.exports = { messageController };
