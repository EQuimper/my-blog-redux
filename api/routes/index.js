let routes = require('express').Router();
let posts = require('./posts/index');

routes.get('/api', (req, res) => {
	res
		.json({
			message: "Welcome to the server"
		});
});

routes.use('/api/posts', posts);

module.exports = routes;
