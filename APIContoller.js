let mongoose = require('mongoose'),
	userInfo = mongoose.model('Users');

function addNewSession(req, res) {
	userInfo.findOne({ userId: req.body.userId }, 'userId session', function(err, user) {
		if (err) {
			console.log(err);
		}

		if (user == null) {
			let newVideoSession = new userInfo(req.body);
			newVideoSession.save(function(err, videoSession) {
				if (err) {
					console.log(err);
					res.send(err);
				}
				res.json(videoSession);
			});
		} else {
			// Concat doesn't work because it retuns a new instance
			let sessionCheck = user.session.find((sessionTemp) => {
				return sessionTemp.videoId.toString() == req.body.session[0].videoId.toString();
			});
			if (sessionCheck != null) {
				res.send(req.body.session[0].videoId);
			} else {
				user.session.push(req.body.session[0]);
				user.save(function(err, user) {
					if (err) {
						console.log(err);
						res.send(err);
					}
					console.log(req.body.session[0]);
					let lengthOfSessions = user.session.length;
					res.send(user.session[lengthOfSessions - 1].videoId);
				});
			}
		}
	});
}

function addEndSession(req, res) {
	let videoSessionId = req.params.videoSessionId.toString();
	userInfo.findOne({ userId: req.body.userId }, function(err, userInfo) {
		if (err != null || userInfo == null) {
			console.log(err);
			res.send(err);
		} else {
			let expected = userInfo.session.find((session) => {
				return session.videoId.toString() == videoSessionId.toString();
			});
			expected.finishedVideo = true;
			expected.endTime = req.body.endTime;
			expected.notes = req.body.notes;
			userInfo.save(function(err) {
				if (err) {
					console.log(err);
					res.send(err);
				}
			});
		}
	});
}

module.exports = { addNewSession, addEndSession };
