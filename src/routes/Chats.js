// npm
import React,{useEffect, useState} from 'react';
// component
import Header from '../components/Header';
import Nav from '../components/Nav';
import Chats_li from '../components/Chats_li';
// data
import getProfile from '../data/userProfile.json';
// style
import '../style/Chats.scss';

// Chats.js : 채팅리스트
function Chats() {
  // state
  const [profile,setProfile] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  // 필요 변수
  // const myProfile = getProfile[0];
  const friend_num = getProfile.length-1;

  useEffect(() => {
    const fetchUsers = async() => {
      try{
        // 1. state 초기화
        // console.log("state 초기화 실행");
        setProfile(null);
        setError(null);
  
        // 2. 로딩 시작
        // console.log("state 초기화 완료, 로딩 시작");
        setLoading(true);
  
        // 3. 데이터 로딩 - 프로필data
        // console.log("data 확인중");
        const profile = getProfile.slice(1);  // 1번부터 끝까지, 0번:myProfile
        setProfile(profile);
        // console.log("data 확인 완료");
      }
      catch(e){
        // 에러 발생시 예외 처리 작업
        // console.log("에러 발생");
        setError(e);
        console.log(error);
      }
      // 4. 로딩 완료
      setLoading(false);
      // console.log("로딩 완료, 페이지 실행");
    };  // const fetchUsers
    fetchUsers();
  },[]);  // useEffect

  if(!profile)  return null;
  if(loading)   return <div>Loading...</div>;
  if(error)     return <div>An error has occured!</div>;

  return (
    <>
      <Header tab_name="Chats" header_icon="fas fa-caret-down" left_btn="Edit" />
      <main id="Chats">
        {/* search_box */}
        <form className="search_box">
          <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
            <i className="fas fa-search"></i>
            <input type="search" name="search" id="search" placeholder="Find friends, chas, plus Friends" />
          </fieldset>
        </form>

        {/* 채팅방 */}
        <section className="main_section">
            <header>
              <h2 className="blind">Chast</h2>
            </header>
            <ul>
              {profile.map( (chat,index) => {return( 
                <Chats_li 
                    key={index}
                    id={chat.id}
                    img={chat.img}
                    name={chat.username}
                /> 
              )} )}
            </ul>
        </section>

        {/* floating action btn */}
        <div className="chat_fa_btn">
            <a href="#"><i className="fas fa-comment"></i></a>
        </div>
      </main>
      <Nav tab_name="Chats" />
    </>
  )
}

export default Chats;