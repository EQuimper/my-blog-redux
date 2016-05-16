let Post = require('../../models/posts');

module.exports = (req, res) => {
	Post.findById({_id: req.params.id}, (err, post) => {
		if (err)
			res
				.json({
					error: 'Post not deleted!'
				});
		post.remove(() => {
			res
				.json({
					message: 'Post deleted!'
				});
		});
	});
};
