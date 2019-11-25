import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchPost } from './redux/actionCreator';
import { PostList, PostTable, PostCreator } from './components';
import './App.css';

const Home = () => (
  <>
    <PostTable/>
    <PostCreator/>
    <PostList/>
  </>
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
