import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from './hooks';
import { Login, Header, Banner, Post, Sidebar } from './components';
import './App.css';

const HomePage = () => {
  const [ isLogin ] = useLocalStorage('isLogin', false);
  if (!isLogin) {
    return <Redirect to="/login"/>
  }
  return (
    <>
    <Header/>
    <Banner/>
    <main>
      <Post.PostList/>
      <Sidebar/>
    </main>
    </>
  )
}

const LoginPage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <main>
        <Login/>
      </main>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/posts/:id" component={Post.PostDetail}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
