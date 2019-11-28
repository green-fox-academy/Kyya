import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from './hooks';
import { Login, Header, Banner, Post, Sidebar } from './components';
import './App.css';

function CheckLogin() {
  const [ isLogin ] = useLocalStorage('isLogin', false);
  if (!isLogin) {
    return <Redirect to="/login"/>
  }
  return '';
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <main>
        <Route component={CheckLogin}/>
        <Switch>
          <Route exact path="/" component={Post.PostList}/>
          <Route path="/login" component={Login}/>
          <Route path="/posts/create" component={Post.PostCreator}/>
          <Route path="/posts/:id" component={Post.PostDetail}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
