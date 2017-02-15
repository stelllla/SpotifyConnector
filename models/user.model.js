var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    password: String,
    status: String,
    email: String
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;