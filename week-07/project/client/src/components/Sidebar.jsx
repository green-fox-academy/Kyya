import React from 'react';
import Post from './Post';

function Sidebar() {
  return (
    <div className="sidebar">
      <Post.PostCreator/>
    </div>
  )
}

export default Sidebar;
