// npm
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// routes
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Profile from './routes/Profile';
import Chatting from './routes/Chatting';

// style
import './style/App.scss';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes> {/* Route에 path와 element 확인 */}
        <Route path="/" element={<Friends />} />          {/* 01.friends, 친구 리스트 */}
        <Route path="/chats" element={<Chats />} />       {/* 02.Chats, 채팅방 리스트 */}
        <Route path="/find" element={<Find />} />         {/* 03.find, 친구 찾기 */}
        <Route path="/more" element={<More />} />         {/* 04.More, 추가 메뉴 */}
        <Route path="/profile" element={<Profile />} />   {/* 01-1. 프로필 */}
        <Route path="/chatting" element={<Chatting />} /> {/* 02-1. chatting, 채팅방 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
