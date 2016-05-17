import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {reducer as formReducer} from 'redux-form';
import postReducer from '../reducers/postReducer';

export default function configureStore() {
	const store = createStore(
		combineReducers({
			post: postReducer,
			form: formReducer
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
