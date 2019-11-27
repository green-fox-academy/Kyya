import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendVote, removePost } from '../../redux/actionCreator';
import PostComment from './PostComment';

function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(state => state.posts.find(post => post.id === parseInt(id)));

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
      <PostComment/>
      <div className="post-comments">

      </div>
    </div>
  )
}

export default PostDetail;
