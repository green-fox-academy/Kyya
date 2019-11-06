import React from 'react';

export default class Article extends React.Component {

  render() {
    return (
      <article>
        <span className="time">{new Date(this.props.publishedAt).toLocaleDateString('zh-CN')}</span>
        <a className="title" target="_blank" href={this.props.url} rel="noopener noreferrer">{this.props.title}</a>
        <p>{this.props.description}</p>
      </article>
    )
  }
} 
