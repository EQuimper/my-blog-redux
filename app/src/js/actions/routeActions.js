import {
	fetchPosts,
	fetchPost,
	addPost
} from './postActions';

export const boundAllPosts = (nextState, replaceState) => {
	return fetchPosts(nextState);
};

export const boundOnePost = (nextState, replaceState) => {
	return fetchPost(nextState.params.id);
};

export const boundAddPost = (nextState, replaceState) => {
	return addPost(nextState + post);
};
