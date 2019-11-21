import React from 'react';
import Room from './Room';
import RoomSearcher from './RoomSearcher';
import FileTranserImg from '../assets/file_transer.png';
import JSAImg from '../assets/epam_jsa.jpg';

function RoomList() {
  return (
    <div className="rooms">
      <div className="room-header">
        <RoomSearcher/>
      </div>
      <div className="room-list">
        <Room title="文件传输助手" description="File Transer" image={FileTranserImg}/>
        <Room title="EPAM JSA 2019" description="Ajax: 遭" image={JSAImg}/>
      </div>
    </div>

  )
}

export default RoomList;
