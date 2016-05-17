import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import postReducer from '../reducers/postReducer';

export default function configureStore() {
	const store = createStore(
		combineReducers({
			post: postReducer
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
