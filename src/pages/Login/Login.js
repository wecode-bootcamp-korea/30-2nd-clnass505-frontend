import React from 'react';
import './Login.scss';

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <div className="login">
      <div className="loginBox">
        <div className="loginBoxSub">
          <div className="flexbox">
            <div className="leftBox">
              <div className="leftBoxDetail">
                <div className="leftLogoBox">
                  <h1 className="islogin">CLNASS505</h1>
                </div>
                <div className="kakaoLogin">
                  <div className="loginTextBox">
                    <p>3초만에 카카오로 로그인하기!</p>
                    <div>
                      <a href={KAKAO_AUTH_URL} className="KakaoBtn">
                        <img
                          alt="kakaoLoginBtnImage"
                          src="/images/kakao_login3.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightBox">
              <img alt="backgroundImg" src="/images/yoojung2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
