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
      <div className="post-content">
        <p>Please sort comments by 'new' to find questions that would otherwise be buried.</p>
        <p>In this thread you can ask any space related question that you may have.</p>
        <p>Two examples of potential questions could be; "How do rockets work?", or "How do the phases of the Moon work?"</p>
        <p>If you see a space related question posted in another subeddit or in this subreddit, then please politely link them to this thread.</p>
        <p>Ask away!</p>
      </div>
      <div className="post-action">
        <span><i className="fa fa-comments"/>comments(0)</span>
        <span onClick={() => dispatch(removePost(post.id))}>
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
