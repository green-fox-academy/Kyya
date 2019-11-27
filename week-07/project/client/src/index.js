import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { config } from 'dotenv';
import App from './App';
import store from './store';
import { fetchPost } from './redux/actionCreator';

config();

store.dispatch(fetchPost());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
