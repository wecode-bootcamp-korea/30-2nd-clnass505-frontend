import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';

const KakaoLogin = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const getToken = () => {
    const authMessage = window.location.search.slice(6);
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&code=${authMessage}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          sendToken(res.access_token);
        } else {
          alert('다시 시도해주세요! :(');
        }
      });
  };

  const sendToken = accessToken => {
    fetch(API.KakaoLogin, {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('access_token', accessToken);
        goToMain();
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div />;
};

export default KakaoLogin;
