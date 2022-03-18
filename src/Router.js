import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/list" element={<List />} />;
        <Route path="/login" com element={<Login />} />;
        <Route path="/oauth/kakao" element={<KakaoLogin />} />
        <Route path="/detail/:id" element={<Detail />} />;
        <Route path="/create" element={<Create />} />;
        <Route path="/mypage" element={<MyPage />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
