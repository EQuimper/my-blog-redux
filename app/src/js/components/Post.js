import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Radium from 'radium';
import moment from 'moment';
import ReactDisqusThread from 'react-disqus-thread';



const Post = ({post, err, loaded}) => {
	const handleNewComment = (comment) => {
		console.log(comment.text);
	};
	if (!loaded)
		return null;
	else if (err === null)
		return (
			<div className="col-md-offset-3 col-md-6">
				<Paper style={styles.post} zDepth={3}>
					<h1>{post.title}</h1>
					<p>{moment(post.date).endOf('day').fromNow()}</p>
					<hr/>
					<p>{post.content}</p>
				</Paper>

			</div>
		);
	else
		return <h3>Post not found!</h3>;
};



const mapProps = (state) => state.post;


export default connect(mapProps)(Post);

let styles = {
	post: {
		minHeight: '500px',
		height: 'auto',
		width: 'max',
		textAlign: 'center'
	}
};
