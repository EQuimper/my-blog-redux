import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import configureStore from './stores/configureStore';
import * as routeActions from './actions/routeActions';

import App from './components/App';
import PostApp from './components/PostApp';
import Post from './components/Post';

const store = configureStore();

const boundRouteActions = bindActionCreators(routeActions, store.dispatch);

const wrapper = (Component) => {
	return (props) => {
		return (
			<Provider store={store}>
				<Component {...props} />
			</Provider>
		);
	};
};

const routes = (
	<Router history={hashHistory}>
		<Route path={'/'}>
			<IndexRoute
				component={wrapper(App)}
				/>
		</Route>
		<Route path={'/posts'}>
			<IndexRoute
				component={wrapper(PostApp)}
			    onEnter={boundRouteActions.boundAllPosts} />
			<Route
				path={':id'}
				component={wrapper(Post)}
				onEnter={boundRouteActions.boundOnePost}/>
		</Route>
	</Router>
);

render (
	routes,
	document.getElementById('app')
);
