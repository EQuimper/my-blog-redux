let Post = require('../../models/posts');

module.exports = (req, res) => {
	Post.findById({_id: req.params.id}, (err, post) => {
		// Not update the id
		if (req.body._id)
			delete req.body._id;

		for (var p in req.body) {
			post[p] = req.body[p];
		}

		post.save((err) => {
			if (err)
				res
					.status(500)
					.json({
						error: 'Can\'t update the post'
					});
			res
				.json({post});
		});
	});
};
