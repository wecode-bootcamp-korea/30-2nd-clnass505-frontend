import styled from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

export default function UserInfo({ userName, userEmail }) {
  return (
    <UserInfoContatiner>
      <UserName>{userName}</UserName>
      <UserEmail>
        {userEmail}
        <ArrowForward />
      </UserEmail>
    </UserInfoContatiner>
  );
}

const UserInfoContatiner = styled.div`
  padding: 80px 0 48px;
  line-height: 28px;
`;

const UserName = styled.h1`
  color: #1a1a1a;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;

const UserEmail = styled.span`
  color: #a2a2a2;
  font-size: 14px;
  cursor: pointer;
`;

const ArrowForward = styled(ArrowIosForwardOutline)`
  width: 16px;
`;
