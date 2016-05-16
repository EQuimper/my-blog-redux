let mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost/blog');

module.exports = db;
