let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let SessionSchema = new Schema({
    videoURL: String,
    purposeDescription: String,
    startTime: Date, // should be date at the end
    finishedVideo: Boolean,
});

module.exports = mongoose.model('Sessions', SessionSchema)