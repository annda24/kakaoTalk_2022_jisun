// npm
import React from 'react';
import { Link } from 'react-router-dom';
// style
import '../style/ProfileList.scss';

function ProfileList( { id,name,email,message,img,bg } ) {
  return (
    <li className="profileList">
      <Link to={"/profile"} state={ {id,name,email,message,img,bg} } >
        <span className="profile_img" style={{backgroundImage:"url("+img+")"}}></span>
        <span className="profile_name">{name}</span>
        <span className="profile_message">{message.slice(0,30)}</span>
      </Link>
    </li>
  )
}

export default ProfileList;