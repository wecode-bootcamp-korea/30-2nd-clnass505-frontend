import React from 'react';
import ChooseCategory from './ChooseCategory';
import './Create0.scss';
import FILTER_DATA from '../../List/data/filterData';

export default function Create0({ createData, setCreateData }) {
  const handleDifficultyInput = e => {
    setCreateData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    localStorage.setItem('difficulty', e.target.value);
  };

  // useEffect(() => {
  //   localStorage.setItem('difficulty_id', difficulty);
  // }, [difficulty]);

  return (
    <>
      <section className="category">
        <label htmlFor="categorySelect">카테고리</label>
        <ChooseCategory
          name="categorySelect"
          createData={createData}
          setCreateData={setCreateData}
        />
      </section>
      <section className="difficulty">
        <label htmlFor="difficulty">난이도</label>
        <select
          name="category"
          id="difficulty"
          onChange={handleDifficultyInput}
        >
          <option value="" hidden="hidden">
            난이도를 선택해주세요.
          </option>
          {FILTER_DATA[1].list.map((data, index) => {
            return (
              <option
                key={index}
                defaultValue={data === createData.difficulty ? true : false}
              >
                {data}
              </option>
            );
          })}
        </select>
      </section>
    </>
  );
}
