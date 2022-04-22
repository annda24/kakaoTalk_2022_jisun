// npm
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// component
import Header from '../components/Header';
import Nav from '../components/Nav';
import ProfileList from '../components/ProfileList';

// data
import getImgs from '../data/profileImg.json';

// style
import '../style/Friends.scss';

// Friends.js
function Friends() {
  const [userInfo,setUserInfo] = useState([]);
  const [userText,setUserText] = useState([]);
  const [userImgs,setUserImgs] = useState([]);
  const [myInfo,setMyInfo] = useState([]);
  const [myText,setMyText] = useState([]);
  const [myImgs,setMyImgs] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  
  useEffect( ()=>{
    const fetchUsers = async () => {
      try{
        // 1. 요청 시작, [] state 초기화
        setError(null);
        setUserInfo(null);
        setUserText(null);
        setUserImgs(null);
    
        // 2. loading true
        setLoading(true);

        // 3. axios
        const getInfo = await axios.get('https://jsonplaceholder.typicode.com/users');      // console.log(getInfo);
        const getText = await axios.get('https://jsonplaceholder.typicode.com/comments');   // console.log(getText);
        
        // 4. slice
        const friend_num = 5;

        userInfo = getInfo.data.slice(0,Number(friend_num)+1);  console.log(userInfo);
        userImgs = getImgs.slice(0,Number(friend_num)+1);       console.log(userImgs);
        userText = getText.data.slice(0,Number(friend_num)+1);  console.log(userText);

        const myInfo = userInfo[0];
        const myImgs = userImgs[0];
        const myText = userText[0];
      
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  },[] );
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error has occured!</div>;
  if (!userInfo) return null;
  if (!userText) return null;
  if (!userImgs) return <span className='profile_img empty'></span>


  return (
    <>
      <Header tab_name="Friends" left_btn="Manage" right_btn="fas fa-cog" friend_num />
      <main id="Friends">
        {/* search_box */}
        <form className="search_box">
          <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
            <i className="fas fa-search"></i>
            <input type="search" name="search" id="search" placeholder="Find friends, chats, plus Friends" />
          </fieldset>
        </form>
        {/* My Profile */}
        <section className="main_section">
            <header><h2>My Profile</h2></header>
            <ul>
              <ProfileList id={myInfo.id} name={myInfo.name} email={myInfo.email} message={myText.name} img={myImgs.img} bg={myImgs.bg} />
            </ul>
        </section>
        {/* Friends */}
        <section className="main_section">
            <header><h2>Friends</h2></header>
            <ul>
              {/* <ProfileList /> */}
            </ul>
        </section>
      </main>
      <Nav tab_name="Friends" />
    </>
  )
}

export default Friends;