// npm
import React from 'react';
// component
import Header from '../components/Header';
import Nav from '../components/Nav';
// data
import getProfile from '../data/userProfile.json';
// style
import '../style/More.scss';

// More.js
function More() {
  const myProfile = getProfile[0];
  return (
    <>
      <Header tab_name="More" right_btn="fas fa-cog" />
      <main id="More">
        <section className="user_info">
            <h2 className="blind">사용자 정보</h2>
            <span className="profile_img empty" style={{backgroundImage:"url("+myProfile.img+")"}}></span>
            <span className="profile_info">
                <span className="profile_name">{myProfile.name}</span>
                <span className="profile_email">{myProfile.email}</span>
            </span>
            <span className="chat_img"><a href="!#"><i className="far fa-comment"></i></a></span>
        </section>
        <section className="user_menu">
            <h2 className="blind">사용자 메뉴</h2>
            <ul>
                <li><a href="!#"><i className="far fa-smile"></i>Emotions</a></li>
                <li><a href="!#"><i className="fas fa-paint-brush"></i>Themes</a></li>
                <li><a href="!#"><i className="far fa-hand-peace"></i>Plus Friends</a></li>
                <li><a href="!#"><i className="far fa-user-circle"></i>Account</a></li>
            </ul>
        </section>
        <section className="plus_friends">
            <header>
                <h2>Plus Friends</h2>
                <span><i className="fas fa-info-circle"></i> Learn More</span>
            </header>
            <ul className="plus_list">
                <li><a href="!#"><i className="fas fa-utensils"></i>Order</a></li>
                <li><a href="!#"><i className="fas fa-home"></i>Store</a></li>
                <li><a href="!#"><i className="fas fa-tv"></i>TV Channel/Radio</a></li>
                <li><a href="!#"><i className="fas fa-pencil-alt"></i>Creation</a></li>
                <li><a href="!#"><i className="fas fa-graduation-cap"></i>Education</a></li>
                <li><a href="!#"><i className="fas fa-university"></i>Politics/Society</a></li>
                <li><a href="!#"><i className="fas fa-won-sign"></i>Finance</a></li>
                <li><a href="!#"><i className="fas fa-video"></i>Movies/Music</a></li>
            </ul>
        </section>
        <section className="more_app">
            <h2 className="blind">앱 더보기</h2>
            <ul>
                <li><a href="!#"><span className="app_icon"></span>Kakao Story</a></li>
                <li><a href="!#"><span className="app_icon"></span>Path</a></li>
                <li><a href="!#"><span className="app_icon"></span>kakao friends</a></li>
            </ul>
        </section>
      </main>
      <Nav tab_name="More" />
    </>
  )
}

export default More;