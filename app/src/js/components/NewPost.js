import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import { bindActionCreators } from 'redux';
// import { addPost } from '../actions/postActions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { reduxForm } from 'redux-form';

import {addPost} from '../actions/postActions';

class NewPost extends React.Component {
	// handleSubmit(data) {
	// 	debugger;
	// 	console.log(data);
	//
	// 	// setTimeout(() => this.setState({post: true}), 2000);
	//
	// }
	render() {
		const {fields: {title, content}, handleSubmit} = this.props;
		// debugger;
		return (
			<div>
				<h1 style={styles.base}>Add new Post</h1>
				<Paper
					zDepth={3}
					style={styles.paper}
					className="col-md-offset-3 col-md-6">
					<form onSubmit={handleSubmit}>
						<TextField
							{...title}
							style={styles.textField}
							hintText="Title"
							floatingLabelText="Post Title"/>
						<br/>
						<TextField
							{...content}
							style={styles.textField}
							floatingLabelText="Post Content"
							multiLine={true}
							rows={2}/>
						<br/>
						<RaisedButton type="submit" label="Create" primary={true}/>
					</form>
				</Paper>
			</div>
		);
	}
}

const mapActionCreatorsToProps = (dispatch) => bindActionCreators({onSubmit: addPost}, dispatch);

NewPost = reduxForm({
	form: 'post',
	fields: ['title', 'content'],
	onSubmit: addPost
})(NewPost);

export default connect(null, mapActionCreatorsToProps)(NewPost);

let styles = {
	base: {
		textAlign: 'center'
	},
	textField: {
		width: '600px'
	},
	paper: {
		minHeight: '250px',
		height: 'auto',
		width: 'max'
	}
};
