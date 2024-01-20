const { APP_ID } = require("../config");

exports.checkAppId = (req, res, next) => {
  const appHeadersId = req.headers["x-app-id"];
  const appQueryId = req.query["x-app-id"];
  const appId = appHeadersId || appQueryId;
  console.log("req headers", req.headers);
  if (!appId || appId.trim() !== APP_ID) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
};
