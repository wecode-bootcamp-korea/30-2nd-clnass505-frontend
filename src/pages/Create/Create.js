import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateNav from './component/CreateNav';
import CreateLeft from './component/CreateLeft';
import CreateText from './component/CreateText';
import Create0 from './component/Create0';
import Create1 from './component/Create1';
import Create2 from './component/Create2';
import Create3 from './component/Create3';
import { API } from '../../config';
import './Create.scss';

export default function Çreate() {
  const [createData, setCreateData] = useState({
    category: localStorage.getItem('mainCategory'),
    subcategory: localStorage.getItem('subcategory'),
    difficulty: localStorage.getItem('difficulty'),
    name: localStorage.getItem('name'),
    description: localStorage.getItem('description'),
    price: localStorage.getItem('price'),
    discount_rate: localStorage.getItem('discount_rate'),
    thumbnail: [],
    title: localStorage.getItem('title'),
    lecture_image1: [],
    lecture_image2: [],
    lecture_image3: [],
    profile: [],
    nickname: localStorage.getItem('nickname'),
    introduce: localStorage.getItem('introduce'),
  });
  const navigate = useNavigate();

  const handleInput = e => {
    setCreateData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    localStorage.setItem([e.target.id], e.target.value);
  };

  const uploadImage = e => {
    e.stopPropagation();
    let reader = new FileReader();
    let file = e.target.files[0];
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setCreateData(prev => ({ ...prev, [e.target.id]: filesInArr }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // console.log(createData.lecture_image1[0]);

  const subcategoryId = { '30기': 1, 멘토: 2 };
  const difficultyId = { 입문자: 1, 중급자: 2, 전문가: 3 };

  const formData = new FormData();

  const submitCreateForm = () => {
    // const lecture_images = [
    //   createData.lecture_image1[0],
    //   createData.lecture_image2[0],
    //   createData.lecture_image3[0],
    // ];
    // // console.log(lecture_images);
    // formData.append('lecture_images', lecture_images);
    for (const key in createData) {
      if (key === 'category') {
        continue;
      } else if (
        key === 'lecture_image1' ||
        key === 'lecture_image2' ||
        key === 'lecture_image3'
      ) {
        formData.append(key, createData[key][0]);
      } else if (key === 'subcategory') {
        formData.append('subcategory_id', subcategoryId[createData[key]]);
      } else if (key === 'difficulty') {
        formData.append('difficulty_id', difficultyId[createData[key]]);
      } else if (key === 'discount_rate') {
        if (!!createData[key]) {
          formData.append(key, createData[key]);
          continue;
        }
        formData.append(key, 0);
      } else if (key === 'price') {
        formData.append(key, createData[key]);
        continue;
      } else if (
        key !== 'thumbnail' &&
        key !== 'lecture_image1' &&
        key !== 'lecture_image2' &&
        key !== 'lecture_image3' &&
        key !== 'profile'
      ) {
        formData.append(key, JSON.stringify(createData[key]));
      } else if (key === 'thumbnail' || key === 'profile') {
        formData.append(key, createData[key][0]);
      }
    }

    fetch(`${API.lectures}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        if (res.message === 'success') {
          alert('축하합니다😆 강의가 생성됐어요!');
          navigate('/list');
        }
      });
  };

  // localStorage.setItem(
  //   'access_token',
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NiwiZXhwIjoxNjQ4MjU1Nzk3fQ.Hi59s8DD57UF-tGBBh1AKazCt58G8oHnD4UaWMXyxjQ'
  // );

  return (
    <>
      <CreateNav />
      <div className="create">
        <div className="main">
          <div className="leftSide">
            <CreateLeft />
          </div>
          <div className="rightContent">
            <CreateText />
            <Create0 createData={createData} setCreateData={setCreateData} />
            <Create1 handleInput={handleInput} uploadImage={uploadImage} />
            <Create2 handleInput={handleInput} uploadImage={uploadImage} />
            <Create3 handleInput={handleInput} uploadImage={uploadImage} />
            {/* <div className="submit">
              <Link to="/create/title-and-cover" className="submitBtn">
                다음
              </Link>
            </div> */}
            <div className="submit">
              <button
                type="submit"
                value="Upload"
                className="submitBtn"
                onClick={submitCreateForm}
              >
                제출
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
