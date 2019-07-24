'use strict';
module.exports = function(app) {
  var youtubeLearning = require('./APIContoller');

  // todoList Routes
  app.route('/test')
    .post(youtubeLearning.addNewSession);

};
