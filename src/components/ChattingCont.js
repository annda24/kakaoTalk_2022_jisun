// npm
import React from 'react';
import { useLocation } from 'react-router';
import { Link,useLocation } from 'react-router-dom';
// data
// import chatHistory from '../data/chat_rec.json';

function ChattingCont() {
  const location = useLocation();
  const {name, img} = location.state;
  return (
    <>
      <span className="date_info">Monday, April 18, 2022</span>
      {/* my */}
      <div className="chat_box my">
          <span className="chat">Hello</span>
          <span className="chat">Hello! This is a test message. </span>
          <span className="chat">This is a test message. </span>
          <span className="chat_time"><span>16</span>:<span>30</span></span>
      </div>
      {/* other */}
      <div className="chat_box other">
          <div className="other_info">
              <Link to="/profile">
                <span className="profile_img" style={{backgroundImage:"url("+img+")"}}></span>
              </Link>
              <span className="profile_name">{name}</span>
          </div>
          <span className="chat">Hello</span>
          <span className="chat">Hello! This is a test message. </span>
          <span className="chat">This is a test message. </span>
          <span className="chat_time"><span>16</span>:<span>30</span></span>
      </div>
    </>
  )
}

// export default ChattingCont