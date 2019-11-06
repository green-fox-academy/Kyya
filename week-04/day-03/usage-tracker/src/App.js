import React, { useState } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Usage from './components/Usage';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item])
  }

  return (
    <div className="App">
      <Router>
        <Usage items={items}/>
        <Switch>
          <Route path="/component/1" render={() => <Component1 onMount={addItem}/>}/>
          <Route path="/component/2" render={() => <Component2 onMount={addItem}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
