import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose
} from 'redux';
// import { browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { reducer as formReducer } from 'redux-form';
import postReducer from '../reducers/postReducer';
import postsReducer from '../reducers/postsReducer';

export default function configureStore() {
	const store = createStore(
		combineReducers({
			post: postReducer,
			posts: postsReducer,
			form: formReducer,
			routing: routerReducer
		}),
		compose(
			applyMiddleware(
				promiseMiddleware()
			),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
	return store;
}
