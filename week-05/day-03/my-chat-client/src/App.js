import React from 'react';
import { Provider } from 'react-redux';
import MessageRoom from './components/MessageRoom';
import MessageList from './components/MessageList';
import MessageSender from './components/MessageSender';

import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MessageRoom />
        <MessageList />
        <MessageSender />
      </div>
    </Provider>
  );
}

export default App;
