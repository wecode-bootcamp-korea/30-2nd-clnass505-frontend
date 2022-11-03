// import React, { useEffect, useState } from 'react';
import React from 'react';
import './Create2.scss';

export default function Create2({ handleInput, uploadImage }) {
  // const [lecture_images, setLecture_images] = useState([]);

  // const handleImage1Input = e => {
  //   const reader = new FileReader();
  //   const image1 = e.target.files[0];
  //   reader.readAsDataURL(image1);
  //   reader.onload = evt => {
  //     console.log(evt.target.result);
  //     console.log(reader.result);
  //     localStorage.setItem('img1', evt.target.result);
  //     setLecture_images(prev => ({
  //       ...prev,
  //       img1: Array.from(e.target.files),
  //     }));
  //   };
  //   console.log(Array.from(e.target.files));
  // };

  // const handleImage2Input = e => {
  //   const reader = new FileReader();
  //   const image2 = e.target.files[0];
  //   reader.readAsDataURL(image2);
  //   reader.onload = evt => {
  //     localStorage.setItem('img2', evt.target.result);
  //     setLecture_images(prev => ({
  //       ...prev,
  //       img2: Array.from(e.target.files),
  //     }));
  //   };
  //   console.log(Array.from(e.target.files));
  //   lecture_images[1] = localStorage.getItem('img2');
  // };

  // const handleImage3Input = e => {
  //   const reader = new FileReader();
  //   const image3 = e.target.files[0];
  //   reader.readAsDataURL(image3);
  //   reader.onload = evt => {
  //     localStorage.setItem('img3', evt.target.result);
  //     setLecture_images(prev => ({
  //       ...prev,
  //       img3: Array.from(e.target.files),
  //     }));
  //     setLecture_images(prev => ({ ...prev, img3: image3 }));
  //     setLecture_images(Array.from(image3));
  //     console.log(Array.from(e.target.files));
  //   };
  //   console.log(Array.from(e.target.files));
  //   lecture_images[2] = localStorage.getItem('img3');
  // };
  // console.log(lecture_images);
  // useEffect(() => {
  //   localStorage.setItem('lecture_images', JSON.stringify(lecture_images));
  // }, [lecture_images]);

  // console.log(reader);
  // reader.readAsText('asdf');
  // console.log(JSON.parse(localStorage.getItem('lecture_images')));

  return (
    <section className="picture">
      <section className="title" onChange={handleInput}>
        <label htmlFor="name">상세이미지 제목</label>
        <input id="title" name="name" type="text" />
      </section>
      <label htmlFor="pictureInput">상세이미지</label>
      <div className="pictureInput">
        <input
          id="lecture_image1"
          name="lecture_images"
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={uploadImage}
        />
        <input
          id="lecture_image2"
          name="lecture_images"
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={uploadImage}
        />
        <input
          id="lecture_image3"
          name="lecture_images"
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={uploadImage}
        />
      </div>
    </section>
  );
}
