import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateNav.scss';

export default function CreateNav() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="createNav">
      <section className="clnass">
        <img src="/images/Logo.jpg" alt="" />
        <span>클래스 생성하기</span>
      </section>
      <button onClick={goBack}>나가기</button>
    </div>
  );
}
