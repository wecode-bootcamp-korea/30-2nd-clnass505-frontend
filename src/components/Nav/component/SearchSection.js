import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../../redux/listFiltering';
import styled from 'styled-components';
import SearchContainerTop from './SearchContainerTop';
import RecentSearchedSection from './RecentSearchesSection';
import Logo from '../../Logo/Logo';

export default function SearchSection({ clickCloseSearchBox }) {
  const [searchHistories, setSearchHistories] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('searchHistory')) {
      setSearchHistories(JSON.parse(localStorage.getItem('searchHistory')));
    }
  }, []);

  const clickDeleteRecentSearchedAll = () => {
    localStorage.removeItem('searchHistory');
    setSearchHistories([]);
  };

  const clickDeleteSearchHistory = event => {
    if (searchHistories.filter(el => el !== event.target.id).length === 0) {
      clickDeleteRecentSearchedAll();
      return;
    }
    localStorage.setItem(
      'searchHistory',
      JSON.stringify(searchHistories.filter(el => el !== event.target.id))
    );
    setSearchHistories(JSON.parse(localStorage.getItem('searchHistory')));
  };

  const submitAlreadyExistThing = value => {
    const newSearchHistories = searchHistories.filter(el => el !== value);
    newSearchHistories.unshift(value);
    localStorage.setItem('searchHistory', JSON.stringify(newSearchHistories));
    setSearchHistories(JSON.parse(localStorage.getItem('searchHistory')));
    dispatch(resetAll());
  };

  const clickRecentSearchValue = event => {
    submitAlreadyExistThing(event.target.innerText);
    const queryString = `?search=${event.target.innerText}`;
    navigate('/list' + queryString);
    clickCloseSearchBox();
    dispatch(resetAll());
  };

  return (
    <SearchContainerWrap>
      <Logo isFixed={true} clickCloseSearchBox={clickCloseSearchBox} />
      <SearchContainerWap>
        <SearchContainer>
          <SearchContainerTop
            searchHistories={searchHistories}
            setSearchHistories={setSearchHistories}
            submitAlreadyExistThing={submitAlreadyExistThing}
            clickCloseSearchBox={clickCloseSearchBox}
          />
          <SearchContents>
            <RecentSearchedSection
              searchHistories={searchHistories}
              submitAlreadyExistThing={submitAlreadyExistThing}
              clickDeleteRecentSearchedAll={clickDeleteRecentSearchedAll}
              clickDeleteSearchHistory={clickDeleteSearchHistory}
              clickRecentSearchValue={clickRecentSearchValue}
            />
          </SearchContents>
        </SearchContainer>
      </SearchContainerWap>
      <SearchContainerOutside onClick={clickCloseSearchBox} />
    </SearchContainerWrap>
  );
}

const SearchContainerWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const SearchContainerWap = styled.div`
  background-color: white;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 613px;
`;

const SearchContents = styled.div`
  margin: 20px 0 0 16px;
`;

const SearchContainerOutside = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
`;
