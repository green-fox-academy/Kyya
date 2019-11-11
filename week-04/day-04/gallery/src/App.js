import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Gallery from './containers/Gallery';
import ThumbnailList from './containers/ThumbnailList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Gallery />
          <ThumbnailList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
