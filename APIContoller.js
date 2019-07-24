var mongoose = require('mongoose'),
  videoSession = mongoose.model('Sessions');

addNewSession = function(req, res) {
  let newVideoSession = new videoSession(req.body);
  newVideoSession.save(function(err, videoSession){
      console.log(videoSession);
        if(err){
            console.log(err);
            res.send(err);
        }
        res.json(videoSession);
    });
};


module.exports = {addNewSession};
