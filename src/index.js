import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './front-src/components/App';
import investmentApp from './front-src/reducers';

const store = createStore(investmentApp);
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);