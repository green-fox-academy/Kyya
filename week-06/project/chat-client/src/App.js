import React from 'react';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import RoomList from './components/RoomList';
import MessageRoom from './components/MessageRoom';
import MessageList from './components/MessageList';
import MessageSender from './components/MessageSender';

import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <div className="rooms">
          <RoomList/>
        </div>
        <main>
          <MessageRoom />
          <MessageList />
          <MessageSender />
        </main>
      </div>
    </Provider>
  );
}

export default App;
