const { APP_ID } = require("../config");

exports.checkAppId = (req, res, next) => {
  const appId = req.headers["x-app-id"];
  console.log("req headers", req.headers);
  if (!appId || appId.trim() !== APP_ID) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
};
