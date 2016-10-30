import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {browserHistory, hashHistory, Router, Route, IndexRoute} from 'react-router';

import reducer from './reducers';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Admin from './containers/Admin';
import Login from './containers/Login';
import NotFound from 'containers/NotFound';

import {getToken} from './actions/user';

import './styles';


const store = createStore(
    reducer,
    reducer(),  // initial store
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f  // redux dev tools
    )
);

const requireCredentials = (nextState, replace, next) => {

    const state = store.getState();
    const user = state.user;

    if (user.isAuthenticated) {
        console.log('user is authenticated');
        next();
    } else if (nextState.location.query.code) {
        console.log('have code, get token: ', nextState.location.query.code);

        next();
    } else {
        console.log('not authenticated, go code');
        window.location = 'http://localhost:3000/auth/github';
        next();
    }


    // console.log('needs login access', user);

    next();
};

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                { /* Home (main) route */}
                <IndexRoute component={Home}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>

                <Route path="*" component={NotFound} status={404}/>
            </Route>
        </Router>
    </Provider>,

    document.getElementById('root')
);


