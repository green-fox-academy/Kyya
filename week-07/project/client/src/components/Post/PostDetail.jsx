import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config';
import { sendVote, removePost } from '../../redux/actionCreator';
import PostTextArea from './PostTextArea';
import PostComment from './PostComment';

function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const commentEnd = useRef(null);
  const post = useSelector(state => state.posts.find(post => post.id === parseInt(id)));
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}/comments`)
      .then(response => response.json())
      .then(response => setComments(response));
  }, [id]);

  useEffect(() => {
    if (commentEnd.current) {
      commentEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);
  
  function handleComment(text) {
    fetch(`${API_URL}/posts/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid: 1, text })
    })
    .then(response => response.json())
    .then(response => setComments([...comments, response]));
  }

  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <div className="post-detail">
      <div className="post-vote">
        <button className="vote-button" onClick={() => dispatch(sendVote(post.id, 'upvote'))}>
          <i className="fa fa-chevron-up"/>
        </button>
        <span>{post.score}</span>
        <button className="vote-button" onClick={() => dispatch(sendVote(post.id, 'downvote'))}>
        <i className="fa fa-chevron-down"/>
        </button>
      </div>
      <div className="post-title">{post.title}</div>
      <div className="post-link">
        <a target="_blank" rel="noopener noreferrer" href={post.url}>{post.url.replace(/https?:\/\//, '')}</a>
      </div>
      <div className="post-action">
        <span><i className="fa fa-comments"/>comments({comments.length})</span>
        <span className="modify"><i className="fa fa-edit"/>modify</span>
        <span className="remove" onClick={() => dispatch(removePost(post.id))}>
          <i className="fa fa-trash"/>
          delete
        </span>
      </div>
      <PostTextArea onComment={handleComment}/>
      <div className="post-comments">
        {comments.map(comment => <PostComment key={comment.id} {...comment}/>)}
        <div ref={commentEnd} className="comment-end"></div>
      </div>
    </div>
  )
}

export default PostDetail;
