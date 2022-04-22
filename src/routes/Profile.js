/// npm
import React from 'react'
import {Link, useLocation} from 'react-router-dom';
// style
import '../style/Header.scss';
import '../style/Profile.scss';

// Profile.js
function Profile() {
  const location = useLocation([]);
  const {name,email,message,img,bg} = location.state;

  if(name == undefined ) return console.log(name);
  if(email == undefined ) return console.log(email);
  if(message == undefined ) return console.log(message);
  if(img == undefined ) return console.log(img);
  if(bg == undefined ) return console.log(bg);
  
  return (
    <>
      <header id="Profile">
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
              <h1 className="blind">Profile</h1>
              <div className="left_item">
                <Link to="/">
                    <i className="fas fa-times"></i>
                </Link>
              </div>
              <div className="right_item">
                <a href="!#">
                  <i className="fas fa-user"></i>
                </a>
              </div>
          </div>
      </header>
      <main id="Profile">
        <section className="background" style={{backgroundImage:"url("+bg+")"}}>
          <h2 className="blind">My profile background</h2>
          <span className="profile_msg">{message}</span>
        </section>
        <section className="profile">
          <h2 className="blind">My profile info</h2>
          <div className="profile_img" style={{backgroundImage:"url("+img+")"}}></div>
          <div className="profile_cont">
              <span className="profile_name">{name}</span>
              <input type="mail" className="profile_email" placeholder={email} />
              <ul className="profile_menu">
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-comment"></i>
                      </span>
                      My Chatroom
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      Edit Profile
                    </a>
                  </li>
              </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile