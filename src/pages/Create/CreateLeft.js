import React from 'react';
import { Link } from 'react-router-dom';
import './CreateLeft.scss';

export default function CreateLeft() {
  return (
    <>
      <Link to="/create" className="basicInfo">
        0 기본 정보
      </Link>
      <Link to="/create/title-and-cover" className="nameAndCover">
        1 제목 및 커버
      </Link>
      <Link to="/create/class-introduction" className="description">
        2 소개
      </Link>
      <Link to="/create/creater-introduction" className="createrInfo">
        3 크리에이터 소개
      </Link>
    </>
  );
}
