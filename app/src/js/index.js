import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './stores/configureStore';
import * as routeActions from './actions/routeActions';

// Components
import App from './containers/App';
import PostApp from './components/PostApp';
import Post from './components/Post';
import NewPost from './components/NewPost';
import NewPostApp from './containers/NewPostApp';
import Home from './components/Home';

injectTapEventPlugin();

const store = configureStore();

const boundRouteActions = bindActionCreators(routeActions, store.dispatch);

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="posts">
					<IndexRoute
						component={PostApp}
						onEnter={boundRouteActions.boundAllPosts} />
					<Route
						path={':id'}
						component={Post}
						onEnter={boundRouteActions.boundOnePost}/>
				</Route>
				<Route path={'new-post'} component={NewPost} />
			</Route>
		</Router>
	</Provider>
);

render (
	routes,
	document.getElementById('app')
);
