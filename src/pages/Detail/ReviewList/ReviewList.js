import React from 'react';
import DetailReviews from '../DetailReviews/DetailReviews';

function ReviewList({ lectureData }) {
  const reviewData = lectureData.reviews_info;
  return (
    <div>
      {reviewData &&
        reviewData.map((data, index) => {
          const { user, title, content, rating, image_url } = data;
          return (
            <DetailReviews
              id="description_board"
              key={index}
              user={user}
              title={title}
              content={content}
              rating={rating}
              image_url={image_url[0]}
            />
          );
        })}
    </div>
  );
}
export default ReviewList;
