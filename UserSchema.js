let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
    userId: String,
    session: [{
        videoURL: String,
        videoTitle: String,
        purposeDescription: String,
        startTime: Date,
        finishedVideo: Boolean,
     }]
});

module.exports = mongoose.model('Users', UserSchema)