import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchContainerTop from './SearchContainerTop';
import RecentSearchedSection from './RecentSearchesSection';
import Logo from '../../Logo/Logo';

export default function SearchSection({ clickCloseSearchBox }) {
  const [searchHistories, setSearchHistoried] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('searchHistory')) {
      setSearchHistoried(JSON.parse(localStorage.getItem('searchHistory')));
    }
  }, []);

  const clickDeleteRecentSearchedAll = () => {
    localStorage.removeItem('searchHistory');
    setSearchHistoried([]);
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
    setSearchHistoried(JSON.parse(localStorage.getItem('searchHistory')));
  };

  const submitAlreadyExistThing = value => {
    const newSearchHistories = searchHistories.filter(el => el !== value);
    newSearchHistories.unshift(value);
    localStorage.setItem('searchHistory', JSON.stringify(newSearchHistories));
    setSearchHistoried(JSON.parse(localStorage.getItem('searchHistory')));
  };

  const clickRecentSearchValue = event => {
    submitAlreadyExistThing(event.target.innerText);
    const queryString = `?search=${event.target.innerText}`;
    navigate('/list' + queryString);
  };

  return (
    <SearchContainerWrap>
      <Logo isFixed={true} />
      <SearchContainer>
        <SearchContainerTop
          searchHistories={searchHistories}
          setSearchHistoried={setSearchHistoried}
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
