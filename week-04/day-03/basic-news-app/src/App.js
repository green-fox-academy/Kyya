import React, { useState, useEffect } from 'react';
import Article from './components/Article';

import './App.css';

const API_KEY = 'd28fd6323d62488a9b0cd2f643080904';
const requestURL = `https://newsapi.org/v2/top-headlines?country=cn&apiKey=${API_KEY}`;

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://slowwy.greenfox.academy/delay/3000/url/${requestURL}`)
      .then(res => res.json())
      .then(res => setPosts(res.articles))
  }, []);

  return (
    <div className="App">
      <div className="posts">
        {posts.length === 0
          ? <div className="lds-dual-ring"></div>
          : posts.map(post => <Article key={post.title} {...post}/>)
        }
      </div>
    </div>
  );
}

export default App;
