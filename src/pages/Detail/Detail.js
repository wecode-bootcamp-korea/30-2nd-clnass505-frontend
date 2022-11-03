import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../config';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ReviewList from './ReviewList/ReviewList';
import Banner from './Banner/Banner';
import SwiperSlide from '../../components/Slide/SwiperSlide';
import './Detail.scss';

export default function Detail() {
  const navigate = useNavigate();
  const reviewRef = useRef();
  const classInfoRef = useRef();
  const createrInfoRef = useRef();
  const refundRef = useRef();
  const wecodeRef = useRef();
  const params = useParams();
  const [lectureData, setLectureData] = useState(null);
  // const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setisLiked] = useState(false);

  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    if (accessToken) {
      fetch(`${API.lectures}/` + params.id, {
        method: 'GET',
        headers: { Authorization: accessToken },
      })
        .then(res => res.json())
        .then(data => {
          setLectureData(data.result);
        });
    } else {
      fetch(`${API.lectures}/` + params.id, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setLectureData(data.result);
        });
    }
  }, [accessToken, params.id]);

  const sendLectures = () => {
    fetch(`${API.detail}`, {
      method: 'POST',
      headers: { Authorization: accessToken },
      body: JSON.stringify({
        id: Number(params.id),
      }),
    }).then(res => res.json());
    // TODO : 추후 구현 예정
    // .then(result => {
    //   // alert('클래스 신청 완료! :) ');
    //   // navigate('/');
    // });
  };

  const reviewBtn = () => {
    reviewRef.current.focus();
  };

  const classInfoBtn = () => {
    classInfoRef.current.focus();
  };

  const createrInfoBtn = () => {
    createrInfoRef.current.focus();
  };

  const refundBtn = () => {
    refundRef.current.focus();
  };

  const wecodeBtn = () => {
    wecodeRef.current.focus();
  };

  // TODO : 추후 구현 예정
  const postLikeData = () => {
    fetch(`${API.likes}/lectures/${params.id}/like`, {
      method: 'POST',
      headers: { Authorization: accessToken },
    }).then(res => res.json);
  };

  // TODO : 추후 구현 예정
  const likeBtn = () => {
    lectureData.is_liked = !lectureData.is_liked;
    if (lectureData.is_liked === false) {
      // setLikeCount(prevCount => prevCount - 1);
      lectureData.likes--;
      setisLiked();
    } else {
      // setLikeCount(prevCount => prevCount + 1);
      lectureData.likes++;
      setisLiked();
    }
    postLikeData();
  };

  const userInfo = {
    student: '수강중입니다',
    potential_student: '수강신청하기',
    creator: '내 강좌입니다',
  };

  return lectureData ? (
    <>
      <Nav />
      <div className="detail">
        <div className="titleBox">
          <div className="titleImg">
            <div className="titleImgMain">
              <img alt="" src={lectureData.detail_image_url[1]} />
            </div>
            <div className="subImgBox">
              <div className="titleSubImg">
                <img alt="" src={lectureData.detail_image_url[2]} />
              </div>
              <div className="titleSubImg">
                <img alt="" src={lectureData.detail_image_url[3]} />
              </div>
            </div>
          </div>
        </div>
        <div className="classInner">
          <div className="classSection">
            <div className="leftInner">
              <div className="lectureInfoBox">
                <div className="lectureInfoSubBox">
                  <div className="categoryBar">
                    <button onClick={reviewBtn}>후기</button>
                    <button onClick={classInfoBtn}>클래스소개</button>
                    <button onClick={createrInfoBtn}>크리에이터</button>
                    <button onClick={refundBtn}>환불정책</button>
                    <button onClick={wecodeBtn}>wecode30</button>
                  </div>
                  <div className="bannerBox">
                    <Banner />
                  </div>
                  <div className="lectureGuide" id="lecture_guide">
                    <div
                      className="classInfoText"
                      ref={classInfoRef}
                      tabIndex="-1"
                    >
                      {lectureData.description}
                    </div>
                    <div className="thumbnailImage">
                      <img
                        alt=""
                        src={lectureData.thumbnail_image}
                        ref={createrInfoRef}
                        tabIndex="-1"
                      />
                      <img alt="" src={lectureData.thumbnail_image} />
                      <img alt="" src={lectureData.detail_image_url[1]} />
                    </div>
                    <h2>수강생들의 생생한 스토리</h2>
                  </div>
                  <div ref={reviewRef} tabIndex="-1">
                    {lectureData.review_avg_rating ? (
                      <ReviewList lectureData={lectureData} />
                    ) : (
                      <div className="noReview">
                        '앗! 리뷰가 아직 없습니다 😥 리뷰 써주세요~'{' '}
                      </div>
                    )}
                  </div>
                  <div className="refund" ref={refundRef} tabIndex="-1">
                    <h1>환불정책</h1>
                    <div className="refundInfo">
                      환불 정책에 따라 구매일로부터 90일까지 환불 요청이
                      가능하며, 7일 까지 전액 환불이 가능합니다.
                    </div>
                    <div className="Wecode30" ref={wecodeRef} tabIndex="-1">
                      <h1>Wecode30</h1>
                      <div className="wecode30Info">위코드 30기 화이팅 :)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightInner">
              <div className="applyBox">
                <ul className="applySectionBox">
                  <li key={lectureData.id}>
                    <div className="categoryNickName">
                      {lectureData.subcategory} · {lectureData.creator_nickname}
                    </div>
                    <div className="classTitle">
                      <h2>{lectureData.title}</h2>
                    </div>
                  </li>
                  <div className="createInfo">
                    <div className="availability">
                      <span>바로 수강 가능</span>
                    </div>
                    <li className="price">
                      {lectureData.discount_rate &&
                      lectureData.discount_price ? (
                        <span className="discount">
                          -
                          {Math.floor(
                            lectureData.discount_rate
                          ).toLocaleString()}
                          %{' '}
                          {Math.floor(
                            lectureData.discount_price
                          ).toLocaleString()}
                        </span>
                      ) : (
                        '정가'
                      )}

                      <span className="totalPrice">
                        월 {Math.floor(lectureData.price).toLocaleString()}원
                      </span>
                    </li>
                  </div>
                  <div className="classInfo">
                    <div className="classInfoBox">
                      <div className="classInfoBoxStyle">
                        <img alt="" src="/images/video.png" />
                        <div className="contentText">컨텐츠 이용권</div>
                      </div>
                      <div className="classInfoBoxStyle">
                        <img alt="" src="/images/we.png" />
                        <div>30기 화이팅</div>
                      </div>
                    </div>
                    <div className="classDetailInfo">
                      <div className="classInfoBoxStyle">
                        <img alt="" src="/images/person.png" />
                        <div>{lectureData.difficulty}</div>
                      </div>
                      <div className="classInfoBoxStyle">
                        <img alt="" src="/images/good.png" />
                        <div> 만족도 99%</div>
                      </div>
                    </div>
                  </div>
                  <div className="like">
                    <button onClick={likeBtn}>
                      {!lectureData.is_liked ? (
                        <img alt="" src="/images/heart.png" />
                      ) : (
                        <img alt="" src="/images/heart_full.png" />
                      )}
                      <span>{lectureData.likes}</span>
                    </button>
                  </div>
                  <div className="classBtn">
                    <button
                      className="sendClassLectures"
                      onClick={sendLectures}
                    >
                      <span>
                        <span>
                          {!!localStorage.getItem('access_token')
                            ? userInfo[lectureData.user_status]
                            : '수강 옵션 구경하기'}
                        </span>
                      </span>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="bannerSlide">
            <SwiperSlide />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1>30기 화이팅!</h1>
  );
}
