import React from 'react';
import WeChatImg from '../assets/wechat.png';
import AvatarImg from '../assets/avatar.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="avatar"><img src={AvatarImg} alt="avatar"/></div>
        <div className="navigation"><img src={WeChatImg} alt="wechat"/></div>
      </div>
    </div>
  )
}

export default Sidebar;
