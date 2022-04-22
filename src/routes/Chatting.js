// npm
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
// style
import '../style/Header.scss';
import '../style/Chatting.scss';

// Chatting.js
function Chatting() {
  const location = useLocation();
  const {name, img} = location.state;
  console.log(location.state);
  
  return (
    <>
      <header id="Chatting">
          <div className="status_bar">
              <div className="left_item">
                  <i className="fas fa-plane"></i>
                  <i className="fas fa-wifi"></i>
              </div>
              <div className="center_item">
                  <span>17</span>:<span>33</span>
              </div>
              <div className="right_item">
                  <i className="far fa-moon"></i>
                  <i className="fab fa-bluetooth-b"></i>
                  <span><span>100</span>%</span>
                  <i className="fas fa-battery-full"></i>
              </div>
          </div>
          <div className="title_bar">
              <h1>{name}</h1>
              <div className="left_item">
                  <Link to="/Chats"><i className="fas fa-angle-left"></i></Link>
              </div>
              <div className="right_item">
                  <a href="#"><i className="fas fa-search"></i></a>
                  <a href="#"><i className="fas fa-bars"></i></a>
              </div>
          </div>
      </header>

      <main id="Chatting">
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
      </main>

      {/* footer */}
      <footer id="Chatting">
        <span className="plus_btn">
          <a href="!#"><i className="fas fa-plus"></i></a>
        </span>
        <form action="/" method="post">
            <fieldset className="text_box">
                <legend className="blind">채팅 입력창</legend>
                <label for="chatting" className="blind">채팅 입력</label>
                <input type="text" id="chatting" className="text_field" />
                <span className="emotion_btn">
                  <a href="!#"><i className="far fa-smile"></i></a>
                </span>
                <span className="voice_btn">
                  <a href="!#"><i className="fas fa-microphone"></i></a>
                </span>
            </fieldset>
        </form>
    </footer>
    </>
  )
}

export default Chatting;