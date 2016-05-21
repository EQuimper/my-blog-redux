import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


const ListPosts = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<Card style={styles.card} key={post._id}>
					<CardHeader
						title={post.title}
						subtitle="Subtitle"
						avatar="https://avatars2.githubusercontent.com/u/15819498?v=3&s=460"/>
						<CardMedia>
							<img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c2447a69043e39f174216c5440f0fb2d" height="185"/>
						</CardMedia>
						<CardTitle title={post.title} subtitle="Card subtitle" />
						<CardText>
							{post.snippet}
						</CardText>
						<CardActions>
							<Link to={`/posts/${post._id}`} key={`${post._id}_Link`}>
								<FlatButton label="Read" />
							</Link>
							<FlatButton label="Share" />
						</CardActions>
				</Card>
		))}
		</div>
	);
};

export default Radium(ListPosts);

let styles = {
	title: {
		textAlign: 'center'
	},
	card: {
		marginTop: 50,
		height: 470,
		width: 750
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	grid: {
		width: 700,
		height: 500,
		overflowY: 'auto',
		marginBottom: 24,
	}
};

{/*<div>
	<h1 style={styles.title}>My Posts</h1>
	<div style={styles.root}>
		<GridList
			cols={2}
			cellHeight={200}
			style={styles.grid}>
			{posts.map((post) => (
				<Link to={`/posts/${post._id}`} key={`${post._id}_Link`}>
					<GridTile
						title={post.title}
						key={post._id}
						actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
							<img src="https://images.unsplash.com/photo-1442551382982-e59a4efb3c86?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=e131e5a1a12b40fca905f81eb90df89d" alt=""/>
					</GridTile>
				</Link>
			))}
		</GridList>
	</div>
</div>*/}
