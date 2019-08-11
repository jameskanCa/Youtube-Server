let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
    userId: String,
    session: [{
        videoId: String,
        videoTitle: String,
        purposeDescription: String,
        startTime: Date,
        finishedVideo: Boolean,
        notes: String,
        endTime: Date
     }]
});

module.exports = mongoose.model('Users', UserSchema)