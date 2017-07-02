const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || 'mongodb://localhost/auth_practice';
const options = {promiseLibrary: require('bluebird')};
mongoose.Promise = require('bluebird');

module.exports = mongoose.connect(URI, options);
