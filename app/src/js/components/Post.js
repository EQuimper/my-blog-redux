import React from 'react';
import { connect } from 'react-redux';

const Post = ({post, err, loaded}) => {
	if (!loaded)
		return null;
	else if (err === null)
		return (
			<div>
				<h1>{post.title}</h1>
				<p>{post.date}</p>
				<hr/>
				<p>{post.content}</p>
			</div>
		);
	else
		return <h3>Post not found!</h3>;
};

const mapProps = (state) => state.post;

export default connect(mapProps)(Post);