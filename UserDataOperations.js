let mongoose = require("mongoose"),
  userInfo = mongoose.model("Users");

function getUserSessions(req, res) {
  let userId = req.params.userId.toString();
  userInfo.findOne({ userId: userId }, function (err, userInfo) {
    if (err != null || userInfo == null) {
      console.log(err);
      res.send(err);
    } else {
      res.set("Access-Control-Allow-Origin", "*");
      res.send(JSON.stringify(userInfo));
    }
  });
}

module.exports = { getUserSessions };
