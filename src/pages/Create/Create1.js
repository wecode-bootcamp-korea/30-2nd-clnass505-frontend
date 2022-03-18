import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateLeft from './CreateLeft';
import CreateText from './CreateText';
import './Create1.scss';

export default function Create1() {
  const [price, setPrice] = useState(localStorage.getItem('price'));
  const [discount, setDiscount] = useState(
    localStorage.getItem('discount_rate')
  );
  const [description, setDescription] = useState(
    localStorage.getItem('description')
  );
  const [name, setName] = useState(localStorage.getItem('name'));
  const [thumbnail, setThumbnail] = useState('');

  // const thumbnailData = new FormData();

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleDescriptionInput = e => {
    setDescription(e.target.value);
  };

  const handlePriceInput = e => {
    setPrice(e.target.value);
  };

  const handleDiscountInput = e => {
    setDiscount(e.target.value);
  };

  const handleThumbnailInput = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
      setThumbnail(e.target.result);
    };
  };

  useEffect(() => {
    localStorage.setItem('name', name ? name : '');
    localStorage.setItem('description', description ? description : '');
    localStorage.setItem('price', price ? price : '');
    localStorage.setItem('discount_rate', discount ? discount : '');
    localStorage.setItem('thumbnail', thumbnail ? thumbnail : '');
  }, [name, description, price, discount, thumbnail]);

  return (
    <div className="CreateOne">
      <div className="main">
        <div className="leftSide">
          <CreateLeft />
        </div>
        <div className="rightContent">
          <div className="whatClass">
            <CreateText />
          </div>
          <div>
            <section className="name" onChange={handleNameInput}>
              <label htmlFor="name">클래스 제목</label>
              <input name="name" type="text" value={name} />
            </section>
            <section
              className="classDescription"
              onChange={handleDescriptionInput}
            >
              <label htmlFor="description">소개</label>
              <input name="description" type="textarea" value={description} />
            </section>
            <section className="price" onChange={handlePriceInput}>
              <label htmlFor="price">가격</label>
              <input name="price" type="number" value={price} />
            </section>
            <section className="salePercent" onChange={handleDiscountInput}>
              <label htmlFor="salePercent">할인율</label>
              <input name="salePercent" type="number" value={discount} />
            </section>
            <section className="thumbnail">
              <label htmlFor="thumbnail">썸네일</label>
              <input
                name="thumbnail"
                type="file"
                accept=".jpg, .jpeg, .png"
                required
                onChange={handleThumbnailInput}
              />
            </section>
          </div>
          <div className="submit">
            <Link to="/create/class-introduction" className="submitBtn">
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
