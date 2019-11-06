import React from 'react';
import Article from './Article';

const API_KEY = 'd28fd6323d62488a9b0cd2f643080904';

export default class ArticleList extends React.Component {
  state = {
    posts: []
  }

  __fetchAsyncData(country) {
    const requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
    if (country !== "") {
      fetch(requestURL)
        .then(res => res.json())
        .then(res => this.setState({ posts: res.articles }))
    }
  }

  componentDidMount() {
    this.__fetchAsyncData(this.props.country);
  }

  componentDidUpdate(prevProps) {
    if (this.props.country !== prevProps.country) {
      this.__fetchAsyncData(this.props.country);
    }
  }

  render() {
    return (
      <div className="article-list">
        {this.state.posts.length === 0
          ? <div className="lds-dual-ring"></div>
          : this.state.posts.map(post => <Article key={post.title} {...post} />)
        }
      </div>
    )
  }
}
