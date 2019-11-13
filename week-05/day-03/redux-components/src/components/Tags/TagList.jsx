import React from 'react';
import { useSelector } from 'react-redux';
import Tag from './Tag';

function TagList() {
  const tags = useSelector(state => state.tags);
  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag, index) => <li key={index}><Tag tag={tag} color="#6495ed"/></li>)}
      </ul>
    </div>
  )
}

export default TagList;
