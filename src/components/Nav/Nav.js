import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserSection from './component/UserSection';
import SearchSection from './component/SearchSection';
import CategoryMenu from './component/CategoryMenu';
import Logo from '../Logo/Logo';
import { Search } from '@styled-icons/boxicons-regular/Search';

export default function Nav() {
  const [isClickUserBtn, setIsClickUserBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(
    !!localStorage.getItem('access_token')
  );

  const [visibleSearchSection, setVisibleSearchSection] = useState(false);

  const clickUserBtn = () => {
    setIsClickUserBtn(!isClickUserBtn);
  };

  const clickLogout = () => {
    setIsLogin(false);
  };

  const clickSearchBox = () => {
    setVisibleSearchSection(true);
  };

  const clickCloseSearchBox = () => {
    setVisibleSearchSection(false);
  };

  return (
    <NavSection>
      <NavWrap>
        <CategoryMenu />
        <NavLeft>
          <Logo />
        </NavLeft>
        <SearchBox onClick={clickSearchBox}>
          <SearchComment>무슨 도움이 필요하신가요?</SearchComment>
          <IconSearch />
        </SearchBox>
        <NavRight>
          {isLogin ? (
            <UserSection
              isClickUserBtn={isClickUserBtn}
              clickUserBtn={clickUserBtn}
              clickLogout={clickLogout}
            />
          ) : (
            <LoginBtn to="/login">로그인</LoginBtn>
          )}
        </NavRight>
      </NavWrap>
      {visibleSearchSection && (
        <SearchSection clickCloseSearchBox={clickCloseSearchBox} />
      )}
    </NavSection>
  );
}

const NavSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const NavWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1176px;
  height: 78px;
`;

const NavLeft = styled.div`
  display: flex;
  align-self: center;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 16px;
  width: 380px;
  height: 38px;
  background-color: #f8f8f8;
  border-color: #e5e5e5;
  cursor: text;
`;

const SearchComment = styled.span`
  color: #a2a2a2;
  font-size: 14px;
`;

const IconSearch = styled(Search)`
  width: 21px;
  color: #1a1a1a;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const LoginBtn = styled(Link)`
  margin-right: 20px;
  color: #1a1a1a;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;
