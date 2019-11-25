import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PostList } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
