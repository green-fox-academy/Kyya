import React from 'react';
import { Provider } from 'react-redux';
import PostList from './components/PostList';

import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <h1>JSON Placeholder</h1>
          <PostList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
