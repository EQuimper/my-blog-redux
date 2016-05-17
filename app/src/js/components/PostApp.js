import React from 'react';
import { connect } from 'react-redux';

import ListPosts from './ListPosts';

const PostApp = ({post, err, loaded}) => {
	if (!loaded)
		return null;
	else if (err === null)
		return (
			<ListPosts {...post} />
		);
	else
		return <h2>Posts not found</h2>;
};

const mapProps = (state) => state.post;

export default connect(mapProps)(PostApp);
