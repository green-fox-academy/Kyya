import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import TodoMain from './components/TodoMain';
import ThemeSwitcher from './components/ThemeSwitcher';

import './App.css';
import './styles/theme-superman.css';
import './styles/theme-batman.css';

function TodoContainer(props) {
  return <main className="container">{props.children}</main>
}

function App() {
  return (
    <Provider store={store}>
    <Router>
      <TodoContainer>
        <Route exact path="/" component={TodoMain}/>
        <Route path ="/themes" component={ThemeSwitcher}/>
        <Route path="/themed/:name" component={TodoMain}/>
      </TodoContainer>
    </Router>
    </Provider>
  );
}

export default App;
