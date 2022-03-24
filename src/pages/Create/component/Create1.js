import React from 'react';
import './Create1.scss';

export default function Create1({ handleInput, uploadImage }) {
  // const thumbnailData = new FormData();

  // const handleNameInput = e => {
  //   setCreateData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleDescriptionInput = e => {
  //   setCreateData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handlePriceInput = e => {
  //   setCreateData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleDiscountInput = e => {
  //   setCreateData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // useEffect(() => {
  //   localStorage.setItem('description', description ? description : '');
  //   localStorage.setItem('price', price ? price : '');
  //   localStorage.setItem('discount_rate', discount ? discount : '');
  //   localStorage.setItem('thumbnail', thumbnail ? thumbnail : '');
  // }, [name, description, price, discount, thumbnail]);

  return (
    <div className="Create1Wrap">
      <section className="name" onChange={handleInput}>
        <label htmlFor="name">클래스 제목</label>
        <input id="name" name="name" type="text" />
      </section>
      <section className="classDescription" onChange={handleInput}>
        <label htmlFor="description">소개</label>
        <input id="description" name="description" type="textarea" />
      </section>
      <section className="price" onChange={handleInput}>
        <label htmlFor="price">가격</label>
        <input id="price" name="price" type="number" />
      </section>
      <section className="salePercent" onChange={handleInput}>
        <label htmlFor="salePercent">할인율</label>
        <input id="discount_rate" name="salePercent" type="number" />
      </section>
      <section className="thumbnail">
        <label htmlFor="thumbnail">썸네일</label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={uploadImage}
        />
      </section>
    </div>
  );
}
