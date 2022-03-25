import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../../config';
import { HeartFill } from '@styled-icons/octicons/HeartFill';
import { Heart } from '@styled-icons/octicons/Heart';

export default function Class({
  data,
  classData,
  setClassData,
  creator,
  student,
  liking,
}) {
  const setDataToClassData = () => {
    setClassData(
      classData.map(el => {
        let result;
        if (el.id === data.id) {
          result = data;
        } else {
          result = el;
        }
        return result;
      })
    );
  };

  const postUserClickLikedBtn = () => {
    fetch(`${API.lectures}/` + data.id + '/like', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
    });
  };

  const clickheartBtn = () => {
    data.user_liked = !data.user_liked;
    if (data.user_liked === true) {
      data.liked_count++;
      setDataToClassData();
    } else {
      data.liked_count--;
      setDataToClassData();
    }
    postUserClickLikedBtn();
  };

  const currentPrice = Math.ceil(
    data.price * (100 - data.discount_rate)
  ).toLocaleString();

  return (
    <ClassList>
      <ClassWrap to={`/detail/${data.id}`}>
        <Picture>
          <ClassImg
            alt={data.title}
            src={
              data.thumbnail_image
                ? data.thumbnail_image
                : data.thumbnail_image_url
                ? data.thumbnail_image_url
                : 'https://images.unsplash.com/photo-1640622299541-8c8ab8a098f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
            }
          />
          {data.discount_rate > 0 && !student && !creator && (
            <OnSaleMark>할인 중</OnSaleMark>
          )}
        </Picture>
        <ClassInfo>
          {!creator && (
            <Teacher>
              {data.creator_nickname ? data.creator_nickname : '클나쓰'}
            </Teacher>
          )}
          <ClassTitle>{data.title}</ClassTitle>
          <HeartCount>
            <IconHeartCount />
            {data.liked_count ? data.liked_count : data.likes}
          </HeartCount>
        </ClassInfo>
        {!creator && !student && (
          <div>
            {data.discount_rate > 0 && (
              <DiscountRate>{data.discount_rate}%</DiscountRate>
            )}
            <ClassPrice>{currentPrice}원</ClassPrice>
          </div>
        )}
      </ClassWrap>
      {!liking && !creator && (
        <HeartBtn onClick={clickheartBtn}>
          {data.user_liked ? <IconHeartFill /> : <IconHeart />}
        </HeartBtn>
      )}
    </ClassList>
  );
}

const ClassList = styled.li`
  position: relative;
  margin-bottom: 32px;
  padding: 0 12px;
  width: 300px;
`;

const ClassWrap = styled(Link)`
  text-decoration: none;
`;

const Picture = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 3px;
  height: 207px;
  overflow: hidden;
`;

const ClassImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease 0s;

  &:hover {
    transform: scale(1.1);
  }
`;

const OnSaleMark = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 8px 8px 6px;
  border-radius: 2px;
  color: white;
  background-color: rgb(243, 33, 59);
  font-size: 11px;
  font-weight: 600;
`;

const ClassInfo = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(248, 248, 248);
`;

const Teacher = styled.span`
  display: block;
  color: black;
  font-size: 11px;
  font-weight: 700;
`;

const ClassTitle = styled.p`
  margin: 6px 0 8px;
  height: 40px;
  color: #1a1a1a;
  line-height: 20px;
  font-size: 14px;
`;

const HeartCount = styled.div`
  margin-top: 10px;
  color: #a2a2a2;
  font-size: 11px;
`;

const IconHeartCount = styled(HeartFill)`
  margin-right: 3px;
  width: 10px;
  color: rgb(162, 162, 162);
`;

const DiscountRate = styled.span`
  margin-right: 5px;
  color: #fd3049;
  font-size: 13px;
  font-weight: 700;
`;

const ClassPrice = styled.span`
  color: #1a1a1a;
  font-size: 13px;
  font-weight: 700;
`;

const HeartBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: unset;
  cursor: pointer;
  transition: background-color 0.1s ease 0s;

  &:hover {
    background-color: rgba(248, 248, 248, 0.2);
  }
`;

const IconHeart = styled(Heart)`
  width: 21px;
  color: white;
`;

const IconHeartFill = styled(HeartFill)`
  width: 21px;
  color: rgb(253, 48, 73);
`;
