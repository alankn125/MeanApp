// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    _id: String //email
});

var User = mongoose.model('User', userSchema);
