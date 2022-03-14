import React from 'react';
import './DetailReviews.scss';

function DetailReviews({ user, title, content, rating, image_url }) {
  console.log(user);
  return (
    <div className="DetailReviews">
      <div className="reviewBox">
        <div className="restingUserBox">
          <div className="reviewUser">{user}</div>
          <div className="StarRating">
            <img className="star" src="/images/star.png" />
            <div className="reviewRating">{rating} 점</div>
          </div>
        </div>
        <div className="reviewTitle">{title}</div>
        <div className="reviewContent">{content}</div>
        <div className="reviewImg">
          <img src={image_url} alt="reviewUserImg" className="reviewUserImg" />
        </div>
        <div className="reviewHelpBox">
          <div className="reviewHelp">도움이 되셨나요?</div>
          <div className="reviewReport">신고하기</div>
        </div>
      </div>
    </div>
  );
}

export default DetailReviews;
