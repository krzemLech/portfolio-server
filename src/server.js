const express = require("express");
const { PORT } = require("./config");
const { validateMsg } = require("./validation/validation");
const { connectDB } = require("./db/db");
const { messageController } = require("./controller/messages");
var morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/messages", validateMsg, messageController);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server listening on port 3000");
});
