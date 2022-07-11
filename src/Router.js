import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Create from './pages/Create/Create';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />;
        <Route path="/list" element={<List />} />;
        <Route path="/login" com element={<Login />} />;
        <Route path="/oauth/kakao" element={<KakaoLogin />} />
        <Route path="/detail/:id" element={<Detail />} />;
        <Route path="/create" element={<Create />} />;
        <Route path="/mypage" element={<MyPage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
