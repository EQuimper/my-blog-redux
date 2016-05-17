import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Radium from 'radium';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

let menuItem = [
	{route: '/post', text: 'Posts'}
];

const NavBar = () => (
	<div>
		<AppBar
			title="CodingWorldBlog"
			iconElementLeft={<IconButton><ContentFilter /></IconButton>}
			linkButton={true}
		/>
	</div>
);

let styles = {
	title: {
		cursor: 'pointer'
	}
};

export default Radium(NavBar);
