const { createClient } = require("redis");
const { REDIS_URL, REDIS_PASS, MAX_COUNT } = require("../config");

const redisConnect = () => {
  const client = createClient({
    url: REDIS_URL,
    username: "default",
    password: REDIS_PASS,
  });
  client.on("error", (err) => console.log("Redis Client Error", err));
  return client.connect();
};

exports.redisPostController = async (req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  let num;
  try {
    const client = await redisConnect();
    num = await client.get(now);
    await client.set(now, num ? +num + 1 : 0);
  } catch (error) {
    console.log(error);
  }

  res.json({ msg: "added", num });
};

exports.redisGetController = async (req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  const client = await redisConnect();
  const num = await client.get(now);

  res.json({ date: now, num });
};

exports.redisDeleteController = async (req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  const client = await redisConnect();
  const num = await client.del(now);

  res.json({ date: now, msg: "deleted" });
};

exports.checkCount = async (req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  const client = await redisConnect();
  const num = await client.get(now);
  console.log(num);
  if (!num) await client.set(now, 0);
  if (+num > MAX_COUNT) {
    return res.json({ msg: "too many messages today", canSend: false });
  }
  client.set(now, +num + 1);
  res.json({ msg: "can send", canSend: true });
};
