var mongoose = require('mongoose'),
  userInfo = mongoose.model('Users');

addNewSession = function(req, res) {

// Query First 
console.log(req.body);
userInfo.findOne({'id': req.body.id}, 'session', function(err, user){
    if(err)
    {
       console.log(err);
    }
    
    if(user == null){
        console.log("not found");
        let newVideoSession = new userInfo(req.body);
        newVideoSession.save(function(err, videoSession){
            console.log(videoSession);
              if(err){
                  console.log(err);
                  res.send(err);
              }
              res.json(videoSession);
          });
    }else{
        user.session.concat(req.body.session);
        console.log(user.session.concat(req.body.session));
    }
})
};


module.exports = {addNewSession};
