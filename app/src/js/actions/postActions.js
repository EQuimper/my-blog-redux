import request from 'superagent';

import * as types from '../constants/actions';

export const fetchPosts = (posts) => {
	const promise = new Promise((resolve, reject) => {
		request
			.get('/api/posts')
			.end((err, res) => {
				if (err)
					reject(err);
				resolve(res.body);
			});
	});
	return {
		type: types.FETCH_POSTS,
		payload: promise
	};
};

export const fetchPost = (id) => {
	const promise = new Promise((resolve, reject) => {
		request
			.get(`/api/posts/${id}`)
			.end((err, res) => {
				if (err)
					reject(err);
				resolve(res.body);
			});
	});
	return {
		type: types.FETCH_POST,
		payload: promise
	};
};

export const addPost = (data) => {
	const promise = new Promise((resolve, reject) => {
		request
			.post(`/api/posts`)
			.send(data)
			.end((err, res) => {
				if (err)
					reject(err);
				resolve(res.body);
			});
	});
	return {
		type: types.ADD_POST,
		payload: promise
	};
};
