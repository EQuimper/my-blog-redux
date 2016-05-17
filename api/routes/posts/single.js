let Post = require('../../models/posts');

module.exports = (req, res) => {
	Post.findById({_id: req.params.id}, (err, post) => {
		if (err)
			res
				.status(404)
				.json({
					error: 'Post not found!'
				});
		res
			.json(
				post
			)
			.status(200);
	});
};
