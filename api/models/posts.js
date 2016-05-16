let mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;
