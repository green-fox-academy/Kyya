import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import {
  Increaser,
  Decreaser,
  Resetter,
  Setter,
  ComplexCounter,
  AsyncIncreaser
} from './components/Counter';

import {
  TagList,
  TagAdder,
  TagRemover,
  TagAllRemover
} from './components/Tags';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="counter">
          <Increaser />
          <Decreaser />
          <Resetter />
          <Setter />
          <AsyncIncreaser/>
        </div>

        <div className="tags">
          <TagList/>
          <TagAdder/>
          <ComplexCounter/>
          <TagRemover/>
          <TagAllRemover/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
