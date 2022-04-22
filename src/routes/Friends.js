// npm
import React,{useEffect, useState} from 'react';
// component
import Header from '../components/Header';
import Nav from '../components/Nav';
import ProfileList from '../components/ProfileList';
// data
import getProfile from '../data/userProfile.json';
// style
import '../style/Friends.scss';

// Friends.js
function Friends() {
  // state
  const [profile,setProfile] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  // 필요 변수
  const myProfile = getProfile[0];
  const friend_num = getProfile.length-1;   // 현재 예제에서 Header에 전달 data 이자, profile.json에 저장된 친구 수

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
      <Header tab_name="Friends" left_btn="Manage" right_btn="fas fa-cog" friend_num={friend_num} />
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
              <ProfileList id={myProfile.id} name={myProfile.name} email={myProfile.email} message={myProfile.message} img={myProfile.img} bg={myProfile.bg} />
            </ul>
        </section>
        {/* Friends */}
        <section className="main_section">
            <header><h2>Friends</h2></header>
            <ul>
              {/* useEffect의 try문에서 친구 프로필을 1번 객체부터로 정의 하였으므로 if (user.id!=0)return ~ 을 생략함. */}
              {profile.map( (user,index) => {return( 
                <ProfileList key={index} id={user.id} name={user.username} email={user.email} message={user.message} img={user.img} bg={user.bg}/> 
              )} )}
            </ul>
        </section>
      </main>
      <Nav tab_name="Friends" />
    </>
  )
}

export default Friends;