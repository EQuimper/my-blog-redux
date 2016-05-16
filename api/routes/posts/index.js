let posts = require('express').Router();

let
	list = require('./list'),
	single= require('./single'),
	update = require('./update'),
	create = require('./create'),
	destroy = require('./destroy');

posts
	.get('/', list)
	.get('/:id', single)
	.patch('/:id', update)
	.post('/', create)
	.delete('/:id', destroy);

module.exports = posts;
