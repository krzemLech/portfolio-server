const express = require("express");
const { validateMsg } = require("./validation/validation");
const { connectDB } = require("./db/db");
const { messageController } = require("./controller/messages");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/messages", validateMsg, messageController);

app.listen(3000, async () => {
  await connectDB();
  console.log("Server listening on port 3000");
});
