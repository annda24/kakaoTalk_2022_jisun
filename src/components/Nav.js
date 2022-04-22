// npm
import React from 'react';
import { Link } from 'react-router-dom';

// style
import '../style/Nav.scss';

// Nav.js
function Nav( {tab_name} ) { //각 페이지에서 가져오는 값
  return (
    <nav className="tab_bar" id={tab_name} >
        <ul>
            <li>
                <Link to="/" className="tab_list">
                    <i className="fas fa-user"></i>Friends
                </Link>
            </li>
            <li>
                <Link to="/chats" className="tab_list">
                    <i className="fas fa-comment"></i>Chats
                </Link>
            </li>
            <li>
                <Link to="/find" className="tab_list">
                    <i className="fas fa-search"></i>Find
                </Link>
            </li>
            <li>
                <Link to="/more" className="tab_list">
                    <i className="fas fa-ellipsis-h"></i>More
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;