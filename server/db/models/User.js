const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;