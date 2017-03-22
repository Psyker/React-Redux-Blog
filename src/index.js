import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore} from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
    appName: 'React-Blog',
    articles: []
};
const reducer = function (state = defaultState, action) {
    console.log(action, state);
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return Object.assign({}, state, {
                articles: action.payload.articles
            });
        default: return state;
    }
};


const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('main'));
