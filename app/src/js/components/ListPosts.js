import React from 'react';
import { Link } from 'react-router';

const ListPosts = ({ posts }) => {
	return (
		<ul>
			{posts.map((post) => (
				<li key={post._id}>
					<Link
						to={`/posts/${post._id}`}>
						<h3>{post.title}</h3>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ListPosts;