import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSort } from '../../redux/listFiltering';
import useOutsideClick from './hooks/useOutsideClick';
import ModalWrap from './components/ModalWrap';
import Filter from './components/Filter';
import Class from './components/Class';
import FILTER_DATA from './data/filterData';
import SwiperSlide from '../../components/Slide/SwiperSlide';
import styled from 'styled-components';
import sortValue from './data/sortValue';
import difficultyValue from './data/difficultyValue';

export default function List() {
  const listFiltering = useSelector(store => store.listFiltering);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef([]);
  const [classData, setClassData] = useState([]);
  const [modalOpen, setModalOpen] = useState({
    sort: false,
    difficulty: false,
  });
  const location = useLocation();

  useEffect(() => {
    let queryStringObject = {};
    if (location.search.length > 0) {
      let queryString = location.search.substring(1);
      queryStringObject = JSON.parse(
        '{"' +
          decodeURI(queryString)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      );
    }

    let queryStringData = { ...queryStringObject, ...listFiltering };
    let filterQueryString = '';
    for (const key in queryStringData) {
      let queryString = '';
      if (typeof queryStringData[key] === 'string') {
        queryString += `&${key}=${queryStringData[key]}`;
      } else {
        for (let i = 0; i < queryStringData[key].length; i++) {
          if (key === 'sort') {
            queryString += `&${key}=${sortValue[queryStringData[key][i]]}`;
          } else if (key === 'difficulty' && queryStringData[key].length < 3) {
            queryString += `&${key}=${
              difficultyValue[queryStringData[key][i]]
            }`;
          }
        }
      }
      filterQueryString += queryString;
    }
    const queryStringResult = filterQueryString.substring(1);

    navigate(`?${queryStringResult}`);
  }, [navigate, listFiltering, location.search]);

  useEffect(() => {
    // fetch('/data/listData.json' + queryStringResult)
    fetch('http://10.58.1.142:8000/lectures' + decodeURI(location.search), {
      headers: { Authorization: localStorage.getItem('access_token') },
      // body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(res => setClassData(res.result));
    // .then(res => console.log(res));
  }, [location.search]);

  const openModal = e => {
    let name;
    if (e.target.innerText === '난이도') {
      name = 'difficulty';
    } else {
      name = 'sort';
    }
    setModalOpen(prev => ({ ...prev, [name]: true }));
  };

  const closeModal = () => {
    setModalOpen({
      sort: false,
      difficulty: false,
    });
  };

  useOutsideClick(ref, () =>
    setModalOpen({
      sort: false,
      difficulty: false,
    })
  );

  const clickFilter = e => {
    const { innerText } = e.target;
    dispatch(updateSort(innerText));
    closeModal();
  };

  return (
    <ListPageWrap>
      {FILTER_DATA.map((data, index) => {
        return (
          <ModalWrap
            key={index}
            modalOpen={modalOpen}
            closeModal={closeModal}
            clickFilter={clickFilter}
            ref={el => (ref.current[index] = el)}
            title={data.title}
            list={data.list}
          />
        );
      })}
      <ListPage>
        <FilterWrap>
          <Filter
            name={listFiltering.sort.length > 0 ? listFiltering.sort : '인기순'}
            openModal={openModal}
          />
          <Filter name="난이도" openModal={openModal} />
        </FilterWrap>
        <ClassListWrap>
          {classData.map((data, index) => {
            return (
              index < 8 && (
                <Class
                  key={data.id}
                  data={data}
                  classData={classData}
                  setClassData={setClassData}
                />
              )
            );
          })}
        </ClassListWrap>
        <SwiperSlide />
        <ClassListWrap>
          {classData.map((data, index) => {
            return (
              index >= 8 && (
                <Class
                  key={data.id}
                  data={data}
                  classData={classData}
                  setClassData={setClassData}
                />
              )
            );
          })}
        </ClassListWrap>
      </ListPage>
      {classData.length === 0 && (
        <NoData>
          일치하는 <NoDataClass>Class</NoDataClass>가 없습니다.
        </NoData>
      )}
    </ListPageWrap>
  );
}

const ListPageWrap = styled.div`
  margin: 102px 0 82px;
`;

const ListPage = styled.div`
  margin: 0 auto;
  width: 1176px;
`;

const FilterWrap = styled.div`
  margin-bottom: 40px;
`;

const ClassListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  width: 1200px;
`;

const NoData = styled.div`
  margin: 72px 0;
  font-size: 18px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  text-align: center;
`;

const NoDataClass = styled.span`
  color: #ff5600;
`;
