module.exports = function (app) {
  let youtubeLearning = require("./APIContoller");
  let dataRetrevial = require("./UserDataOperations");

  app.route("/storeInitialReview").post(youtubeLearning.addNewSession);
  app.route("/getUserSessions/:userId").get(dataRetrevial.getUserSessions);

  app
    .route("/storeEndSessionInfo/:videoSessionId")
    .post(youtubeLearning.addEndSession);

  app
    .route("/delete/:userId/:videoSessionId")
    .delete(youtubeLearning.deleteSession);

  app.route("/").get(() => {
    return "Youtube Notes Reminder Server!";
  });
};
