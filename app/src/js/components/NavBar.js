import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Radium from 'radium';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const NavBar = () => (
	<div>
		<AppBar
			title={<Link style={styles.title} to="/">CodingWorldBlog</Link>}
			iconElementLeft={<IconButton><ContentFilter /></IconButton>}
			linkButton={true}/>
	</div>
);

let styles = {
	title: {
		textDecoration: 'none',
		color: 'white'
	}
};

export default Radium(NavBar);
