import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from './hooks';
import { Login, User, Header, Banner, Post, NotFound } from './components';
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
          <Route path="/my" component={User}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
