import React, { useState, useEffect } from 'react';
import CreateLeft from './CreateLeft';
import CreateText from './CreateText';
import './Create3.scss';

export default function Create3() {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('profile')
  );
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'));
  const [createrDescription, setCreaterDescription] = useState(
    localStorage.getItem('introduce')
  );

  const profileImageData = new FormData();

  const handleProfileImageInput = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
      setProfileImage(e.target.result);
    };
  };

  const handleNicknameInput = e => {
    setNickname(e.target.value);
  };

  const handleCreaterDescriptionInput = e => {
    setCreaterDescription(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('title', '0');
    localStorage.setItem('profile', profileImage);
    localStorage.setItem('nickname', nickname ? nickname : '');
    localStorage.setItem(
      'introduce',
      createrDescription ? createrDescription : ''
    );
  }, [profileImage, nickname, createrDescription]);

  const fetchData = new FormData();

  const makeFormData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.key(i) === 'mainCategory' ||
        localStorage.key(i) === 'img1' ||
        localStorage.key(i) === 'img2' ||
        localStorage.key(i) === 'img3'
      ) {
        continue;
        // fetchData.append(
        //   localStorage.key(i),
        //   localStorage.getItem(localStorage.key(i))
        // );
      }
      if (localStorage.key(i) !== 'access_token') {
        if (localStorage.key(i) === 'lecture_images') {
          const lectureImages = JSON.parse(
            localStorage.getItem('lecture_images')
          );
          fetchData.append('lecture_images', Object.values(lectureImages));
          continue;
        }
        if (
          localStorage.key(i) === 'thumbnail' ||
          localStorage.key(i) === 'profile'
        ) {
          const image = localStorage.getItem(localStorage.key(i));
          console.log(image);
          fetchData.append(localStorage.key(i), image);
          continue;
        }
        fetchData.append(
          localStorage.key(i),
          localStorage.getItem(localStorage.key(i))
        );
      }
    }
  };

  localStorage.setItem(
    'access_token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDgyMTIyMTJ9.NWwyki-UPkP6wJTIYPBTNwZBrNVCUhvQ4VrsbkTspQw'
  );

  const sendFile = e => {
    makeFormData();
    e.preventDefault();
    fetch('http://10.58.5.229:8000/lectures', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: fetchData,
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  return (
    <div className="CreateThree">
      <div className="main">
        <div className="leftSide">
          <CreateLeft />
        </div>
        <div className="rightContent">
          <CreateText />
          <div>
            <section className="createrPicture">
              <label htmlFor="createrPicture">크리에이터의 프로필 사진</label>
              <input
                name="createrPicture"
                type="file"
                accept=".jpg, .jpeg, .png"
                required
                onChange={handleProfileImageInput}
                // value={profileImage}
              />
            </section>
            <section className="createrName" onChange={handleNicknameInput}>
              <label htmlFor="createrName">닉네임</label>
              <input name="createrName" type="text" value={nickname} />
            </section>
            <section
              className="createrDescription"
              onChange={handleCreaterDescriptionInput}
            >
              <label htmlFor="createrDescription">크리에이터 소개</label>
              <input
                name="createrDescription"
                type="textarea"
                value={createrDescription}
              />
            </section>
          </div>
          <div className="submit">
            <button type="submit" value="Upload" onClick={sendFile}>
              제출
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
