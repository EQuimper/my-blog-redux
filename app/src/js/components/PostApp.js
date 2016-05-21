import React from 'react';
import { connect } from 'react-redux';

import ListPosts from './ListPosts';

const PostApp = ({posts, err, loaded}) => {
	if (!loaded)
		return null;
	else if (err === null)
		return (
			<ListPosts posts={posts} />
		);
	else
		return <h2>Posts not found</h2>;
};

const mapProps = (state) => state.posts;

export default connect(mapProps)(PostApp);
