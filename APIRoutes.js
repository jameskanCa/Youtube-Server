
module.exports = function(app) {
	let youtubeLearning = require('./APIContoller');
	app.route('/storeInitialReview').post(youtubeLearning.addNewSession);
	app.route('/storeEndSessionInfo/:videoSessionId').post(youtubeLearning.addEndSession);

	// Unimplemented Ports
	let dataRetrevial = require('./UserDataOperations')
	app.route("/getUserSessions/:userId").get(dataRetrevial.GetUserSessions);
};
