import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useOnClickOutside from '../../../hooks/useOutsideClick';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';

export default function UserBoxSection({ clickLogout, clickUserBtn }) {
  const ref = useRef();
  useOnClickOutside(ref, clickUserBtn);

  const clickMyPage = () => {
    clickUserBtn();
  };

  return (
    <UserBox ref={ref}>
      <ToMyPage to="/mypage" onClick={clickMyPage}>
        <UserIcon />
        <UserInfo>
          <UserName>클라쓰</UserName>
          <MyPage>
            마이페이지
            <ArrowForwardIcon />
          </MyPage>
        </UserInfo>
      </ToMyPage>
      <Logout onClick={clickLogout}>로그아웃</Logout>
    </UserBox>
  );
}

const UserBox = styled.div`
  position: absolute;
  right: 0px;
  top: 54px;
  padding: 24px;
  border-color: rgb(229, 229, 229);
  border-radius: 2px;
  width: 200px;
  background-color: white;
  z-index: 3002;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 12px 2px;
`;

const ToMyPage = styled(Link)`
  display: flex;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgb(229, 229, 229);
  text-decoration: none;
`;

const UserInfo = styled.div`
  margin-left: 8px;
  transform: translateY(5px);
`;

const UserName = styled.span`
  display: block;
  color: #1a1a1a;
  font-size: 13px;
`;

const MyPage = styled.div`
  color: #ff5600;
  font-size: 11px;
  line-height: 1.125rem;
`;

const ArrowForwardIcon = styled(ArrowIosForwardOutline)`
  width: 14px;
  line-height: 1.125rem;
`;

const Logout = styled.span`
  color: #1a1a1a;
  font-size: 13px;
  cursor: pointer;
`;

const UserIcon = styled(UserCircle)`
  width: 34px;
  color: #1a1a1a;
`;
