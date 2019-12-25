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
        videoMetadata: {
                url: String,
                videoTitle : String,
                videoDuration : String,
                videoDescription : String,
                videoCategory : Number
        },
        notes: String,
        endTime: Date
     }]
});

module.exports = mongoose.model('Users', UserSchema)