import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import UserInfo from './component/UserInfo';
import Class from '../List/components/Class';
import { API } from '../../config';
import { ChatWarning } from '@styled-icons/fluentui-system-filled/ChatWarning';

export default function MyPage() {
  const [userInformation, setUserInformation] = useState([]);
  const [creatingClass, setCreatingClass] = useState([]);
  const [takingClass, setTakingClass] = useState([]);
  const [likingClass, setLikingClass] = useState([]);

  useEffect(() => {
    fetch(`${API.lectures}/1`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => setUserInformation(res.result));
    // .then(res => console.log(res));

    fetch(`${API.lectures}/creator`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => setCreatingClass(res.results));
    // .then(res => console.log(res));

    fetch(`${API.lectures}/student`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => setTakingClass(res.results));
    // .then(res => console.log(res));

    fetch(`${API.lectures}/likes`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => setLikingClass(res.results));
    // .then(res => console.log(res));
  }, []);
  // console.log(userInformation);

  return (
    <>
      <Nav />
      <MyPageContainer>
        <UserInfo
          userName={userInformation.user_name}
          userEmail={userInformation.user_email}
        />
        <ClassListWrap>
          <ClassListTitle>
            개설한 <ClassEng>Class</ClassEng>
          </ClassListTitle>
          {creatingClass.length > 0 ? (
            <CreatingClass>
              {creatingClass.map(data => {
                return (
                  <Class
                    key={data.id}
                    data={data}
                    classData={creatingClass}
                    setClassData={setCreatingClass}
                    creator={true}
                  />
                );
              })}
            </CreatingClass>
          ) : (
            <NoResult>
              <ChatWarningIcon />
              <NoResultComment>아직 개설하신 강의가 없어요!</NoResultComment>
            </NoResult>
          )}
        </ClassListWrap>
        <ClassListWrap>
          <ClassListTitle>
            수강 중인 <ClassEng>Class</ClassEng>
          </ClassListTitle>
          {takingClass.length > 0 ? (
            <TakingClass>
              {takingClass.map(data => {
                return (
                  <Class
                    key={data.id}
                    data={data}
                    classData={takingClass}
                    setClassData={setTakingClass}
                    student={true}
                  />
                );
              })}
            </TakingClass>
          ) : (
            <NoResult>
              <ChatWarningIcon />
              <NoResultComment>아직 수강중인 강의가 없어요!</NoResultComment>
            </NoResult>
          )}
        </ClassListWrap>
        {likingClass.length > 0 && (
          <ClassListWrap>
            <ClassListTitle>
              Liking <ClassEng>Class</ClassEng>
            </ClassListTitle>
            <LikingClass>
              {likingClass.map(data => {
                return (
                  <Class
                    key={data.id}
                    data={data}
                    classData={likingClass}
                    setClassData={setLikingClass}
                    liking={true}
                  />
                );
              })}
            </LikingClass>
          </ClassListWrap>
        )}
      </MyPageContainer>
      <Footer />
    </>
  );
}

const MyPageContainer = styled.div`
  margin: 78px auto;
  width: 1176px;
`;

const ClassListWrap = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const ClassListTitle = styled.h1`
  margin-bottom: 16px;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: bold;
`;

const ClassEng = styled.span`
  color: #ff5600;
`;

const CreatingClass = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  width: 1200px;
`;

const TakingClass = styled(CreatingClass)``;
const LikingClass = styled(CreatingClass)``;

const NoResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 150px;
  background-color: rgb(239, 239, 239);

  margin-bottom: 48px;
`;

const ChatWarningIcon = styled(ChatWarning)`
  width: 32px;
`;

const NoResultComment = styled.p`
  margin-top: 10px;
  color: #1a1a1a;
  font-size: 14px;
`;
