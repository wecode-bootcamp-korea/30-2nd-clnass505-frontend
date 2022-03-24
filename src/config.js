const BASE_URL = 'http://172.20.10.3:8000';

export const API = {
  login: `${BASE_URL}/users/login`,
  lectures: `${BASE_URL}/lectures`,
  likes: `${BASE_URL}`,
  KakaoLogin: `${BASE_URL}/users/kakao-auth`,
};

export default API;
