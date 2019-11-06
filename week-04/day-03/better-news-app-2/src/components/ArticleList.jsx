import React, { useState, useEffect } from 'react';
import Article from './Article';

const API_KEY = 'd28fd6323d62488a9b0cd2f643080904';

export default function ArticleList(props) {
  const [posts, setPosts] = useState([]);
  const requestURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${API_KEY}`;

  useEffect(() => {
    if (props.country !== "") {
      fetch(requestURL)
      .then(res => res.json())
      .then(res => setPosts(res.articles))
      
    }
  }, [props.country, requestURL]);

  return (
    <div className="article-list">
      {posts.length === 0
        ? <div className="lds-dual-ring"></div>
        : posts.map(post => <Article key={post.title} {...post}/>)
      }
    </div>
  )
}
