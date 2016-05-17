import * as types from '../constants/actions';

const postReducer = (post = {loaded: false}, action) => {
	switch (action.type) {
		case `${types.FETCH_POSTS}_FULFILLED`:
			return {
				post: action.payload,
				err: null,
				loaded: true
			};
		case `${types.FETCH_POSTS}_REJECTED`:
			return {
				post: null,
				err: action.payload,
				loaded: true
			};
		case `${types.FETCH_POST}_FULFILLED`:
			return {
				post: action.payload,
				err: null,
				loaded: true
			};
		case `${types.FETCH_POST}_REJECTED`:
			return {
				post: null,
				err: action.payload,
				loaded: true
			};
		default:
			return post;
	}
};

export default postReducer;