const { APP_ID } = require("../config");

exports.checkAppId = (req, res, next) => {
  const appId = req.headers["x-app-id"];
  console.log(req.headers);
  if (appId.trim() !== APP_ID) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
};
