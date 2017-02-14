var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    password: String,
    status: String,
    email: String
});

var Model = mongoose.model('User', UserSchema);

module.exports = Model;