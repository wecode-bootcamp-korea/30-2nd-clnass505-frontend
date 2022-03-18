import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateLeft from './CreateLeft';
import CreateText from './CreateText';
import ChooseCategory from './ChooseCategory';
import './Create.scss';

export default function Create() {
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem('difficulty_id')
  );

  const handleDifficultyInput = e => {
    setDifficulty(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('difficulty_id', difficulty);
  }, [difficulty]);

  const difficultyList = [1, 2, 3];

  return (
    <div className="create">
      <div className="main">
        <div className="leftSide">
          <CreateLeft />
        </div>
        <div className="rightContent">
          <CreateText />
          <section className="category">
            <label htmlFor="categorySelect">카테고리</label>
            <ChooseCategory name="categorySelect" />
          </section>
          <section className="difficulty">
            <label htmlFor="difficultySelect">난이도</label>
            <select
              name="category"
              id="difficultySelect"
              onChange={handleDifficultyInput}
            >
              <option value="" hidden="hidden">
                난이도를 선택해주세요.
              </option>
              {difficultyList.map((data, index) => {
                return (
                  <option
                    key={index}
                    defaultValue={data === difficulty ? true : false}
                  >
                    {data}
                  </option>
                );
              })}
            </select>
          </section>
          <div className="submit">
            <Link to="/create/title-and-cover" className="submitBtn">
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
