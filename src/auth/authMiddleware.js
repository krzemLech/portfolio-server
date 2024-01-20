const { APP_ID } = require("../config");

exports.checkAppId = (req, res, next) => {
  const appId = req.headers["x-app-id"];
  if (appId !== APP_ID) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
};
