import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={()=><h1>Hello World!</h1>}/>
          <Route path="/error/:errorcode" render={({ match }) => <h1>Error: {match.params.errorcode}</h1>}/>
          <Route path="/error" render={()=><h1>Something bad happened.</h1>}/>
          <Route render={() => <h1>This page is not implemented yet</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
