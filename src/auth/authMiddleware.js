const { APP_ID, ALLOWED_HOST } = require("../config");

exports.checkAppId = (req, res, next) => {
  const appHeadersId = req.headers["x-app-id"];
  const appQueryId = req.query["x-app-id"];
  const appId = appHeadersId || appQueryId;
  const host = req.hostname;
  console.log("req headers", req.headers);
  console.log("req query", req.query);
  console.log("req host", req.hostname);
  if (appId?.trim() !== APP_ID) return next();
  if (host === ALLOWED_HOST) return next();
  return res.status(401).json({ msg: "Unauthorized" });
};
