import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory, hashHistory, Router, Route, IndexRoute } from 'react-router';

import reducer from './reducers';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Admin from './containers/Admin';
import NotFound from 'containers/NotFound';

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
    // TODO: implement login check

    console.log('needs login access');

    next();
};

render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={App} onEnter="">
                { /* Home (main) route */}
                <IndexRoute component={Home} />

                { /* Routes requiring login */}
                <Route onEnter={requireCredentials}>
                    <Route path="/admin" component={Admin} />
                </Route>

                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />

                <Route path="*" component={NotFound} status={404} />
            </Route>
        </Router>
    </Provider>,

    document.getElementById('root')
);
