const express = require("express");
const { PORT } = require("./config");
const { validateMsg } = require("./validation/validation");
const { connectDB } = require("./db/db");
const { messageController } = require("./controller/messages");
const { mailController } = require("./controller/mail");
const {
  redisGetController,
  redisPostController,
  redisDeleteController,
  checkCount,
} = require("./controller/redis");
var morgan = require("morgan");
const { checkAppId } = require("./auth/authMiddleware");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(checkAppId);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/messages", validateMsg, messageController);
app.post("/mail", mailController);
app.get("/redis", redisGetController);
app.post("/redis", redisPostController);
app.delete("/redis", redisDeleteController);
app.get("/check-count", checkCount);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server listening on port 3000");
});
