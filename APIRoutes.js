'use strict';
module.exports = function(app) {
	var youtubeLearning = require('./APIContoller');

	app.route('/storeInitialReview').post(youtubeLearning.addNewSession);
	app.route('/storeEndSessionInfo/:videoSessionId').post(youtubeLearning.addEndSession);
};
