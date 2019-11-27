import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from './hooks';
import { Login, Header, Banner, Post, Sidebar } from './components';
import './App.css';

const Home = () => {
  const [ isLogin ] = useLocalStorage('isLogin', false);
  if (!isLogin) {
    return <Redirect to="/login"/>
  }
  return (
    <>
      <Post.PostList/>
      <Sidebar/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/posts/:id" component={Post.PostDetail}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
