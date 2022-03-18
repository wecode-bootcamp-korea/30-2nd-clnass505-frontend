import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

export default function UserSection({
  isClickUserBtn,
  clickUserBtn,
  clickLogout,
}) {
  return (
    <>
      <CreatorCenter to="/create">크리에이터 센터</CreatorCenter>
      <User>
        <UserBtn onClick={clickUserBtn}>
          <UserIcon />
          {isClickUserBtn ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </UserBtn>
        {isClickUserBtn && (
          <UserBox>
            <ToMyPage to="/mypage">
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
        )}
      </User>
    </>
  );
}

const CreatorCenter = styled(Link)`
  margin-right: 20px;
  color: #1a1a1a;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;

const User = styled.div`
  position: relative;
`;

const UserBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: unset;
  width: 50px;
  height: 34px;
  background-color: unset;
  cursor: pointer;
`;

const UserIcon = styled(UserCircle)`
  width: 34px;
  color: #1a1a1a;
`;

const ArrowUpIcon = styled(ArrowIosUpwardOutline)`
  width: 17px;
`;

const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 17px;
`;

const UserBox = styled.div`
  position: absolute;
  right: 0px;
  top: 54px;
  padding: 24px;
  border-color: rgb(229, 229, 229);
  border-radius: 2px;
  width: 200px;
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
