import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserBoxSection from './UserBoxSection';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

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
          <UserBoxSection
            clickLogout={clickLogout}
            clickUserBtn={clickUserBtn}
          />
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
