let Post = require('../../models/posts');

module.exports = (req, res) => {
	let post = new Post(req.body);

	post.save((err) => {
		if (err)
			res
				.json({
					error: 'The post are not created'
				});
		res.json({post});
	});
};
