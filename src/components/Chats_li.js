// npm
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'; 
// style
import '../style/Chats_li.scss';

function Chats_li( {id,img,name,lastest_msg,lastest_time} ) {
  return (
    <li>
        <Link to={"/chatting"} state={{id,img,name}} >
          <span className="chats_img" style={{backgroundImage:"url("+img+")"}}></span>
          <span className="chats_cont">
              <span className="chats_name">{name}</span>
              <span className="chats_lastest">test message</span>
          </span>
          <span className="chats_time">12:34</span>
        </Link>
    </li>
  )
}

export default Chats_li;