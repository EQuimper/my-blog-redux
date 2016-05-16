let Post = require('../../models/posts');

module.exports = (req, res) => {
	Post.find((err, posts) => {
		if (err)
			res
				.status(404)
				.json({
					error: 'Posts not Found!'
				});
		res
			.status(200)
			.json({
				posts
			});
	});
};
