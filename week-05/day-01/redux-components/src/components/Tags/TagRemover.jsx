import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tag from './Tag';
import { removeTag } from './actionCreator';

function TagRemover() {
  const tags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Remove Tag</h1>
      <ul>
      {
        tags.map((tag, index) => (
          <li key={index} onClick={() => dispatch(removeTag(tag))}>
            <Tag tag={tag} color="#dc143c"/>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default TagRemover;
