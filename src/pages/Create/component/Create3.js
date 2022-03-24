import React from 'react';
import './Create3.scss';

export default function Create3({ handleInput, uploadImage }) {
  // const [profileImage, setProfileImage] = useState(
  //   localStorage.getItem('profile')
  // );
  // const [nickname, setNickname] = useState(localStorage.getItem('nickname'));
  // const [createrDescription, setCreaterDescription] = useState(
  //   localStorage.getItem('introduce')
  // );

  // const profileImageData = new FormData();

  // const handleProfileImageInput = e => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = e => {
  //     setProfileImage(e.target.result);
  //   };
  // };

  // const handleNicknameInput = e => {
  //   setNickname(e.target.value);
  // };

  // const handleCreaterDescriptionInput = e => {
  //   setCreaterDescription(e.target.value);
  // };

  // useEffect(() => {
  //   localStorage.setItem('title', '0');
  //   localStorage.setItem('profile', profileImage);
  //   localStorage.setItem('nickname', nickname ? nickname : '');
  //   localStorage.setItem(
  //     'introduce',
  //     createrDescription ? createrDescription : ''
  //   );
  // }, [profileImage, nickname, createrDescription]);

  // const fetchData = new FormData();

  // const makeFormData = () => {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     if (
  //       localStorage.key(i) === 'mainCategory' ||
  //       localStorage.key(i) === 'img1' ||
  //       localStorage.key(i) === 'img2' ||
  //       localStorage.key(i) === 'img3'
  //     ) {
  //       continue;
  //       // fetchData.append(
  //       //   localStorage.key(i),
  //       //   localStorage.getItem(localStorage.key(i))
  //       // );
  //     }
  //     if (localStorage.key(i) !== 'access_token') {
  //       if (localStorage.key(i) === 'lecture_images') {
  //         const lectureImages = JSON.parse(
  //           localStorage.getItem('lecture_images')
  //         );
  //         fetchData.append('lecture_images', Object.values(lectureImages));
  //         continue;
  //       }
  //       if (
  //         localStorage.key(i) === 'thumbnail' ||
  //         localStorage.key(i) === 'profile'
  //       ) {
  //         const image = localStorage.getItem(localStorage.key(i));
  //         console.log(image);
  //         fetchData.append(localStorage.key(i), image);
  //         continue;
  //       }
  //       fetchData.append(
  //         localStorage.key(i),
  //         localStorage.getItem(localStorage.key(i))
  //       );
  //     }
  //   }
  // };

  // const sendFile = e => {
  //   makeFormData();
  //   e.preventDefault();
  //   fetch('http://10.58.5.229:8000/lectures', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: localStorage.getItem('access_token'),
  //     },
  //     body: fetchData,
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // };

  return (
    <div className="Create3Wrap">
      <section className="createrPicture">
        <label htmlFor="createrPicture">크리에이터의 프로필 사진</label>
        <input
          id="profile"
          name="createrPicture"
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={uploadImage}
        />
      </section>
      <section className="createrName" onChange={handleInput}>
        <label htmlFor="createrName">닉네임</label>
        <input id="nickname" name="createrName" type="text" />
      </section>
      <section className="createrDescription" onChange={handleInput}>
        <label htmlFor="createrDescription">크리에이터 소개</label>
        <input id="introduce" name="createrDescription" type="textarea" />
      </section>
    </div>
  );
}
