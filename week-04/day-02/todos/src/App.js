import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoMain from './components/TodoMain';
import ThemeSwitcher from './components/ThemeSwitcher';

import './App.css';

function TodoContainer(props) {
  return <main className="container">{props.children}</main>
}

function App() {
  return (
    <Router>
      <TodoContainer>
        <Route exact path="/" component={TodoMain}/>
        <Route path ="/theme" component={ThemeSwitcher}/>
      </TodoContainer>
    </Router>
  );
}

export default App;
