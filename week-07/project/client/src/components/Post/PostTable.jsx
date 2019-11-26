import React from 'react';
import { useSelector } from 'react-redux';

function PostTable() {
  const posts = useSelector(state => state.posts);
  return (
    <div className="post-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {
          posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.url}</td>
              <td>{post.score}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default PostTable;
