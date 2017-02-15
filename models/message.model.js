var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new Schema({
    author: String,
    newDate: String,
    message: String
});

var MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;