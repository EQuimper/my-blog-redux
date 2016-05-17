import {
	fetchPosts,
	fetchPost
} from './postActions';

export const boundAllPosts = (nextState, replaceState) => {
	return fetchPosts(nextState);
};

export const boundOnePost = (nextState, replaceState) => {
	return fetchPost(nextState.params.id);
};