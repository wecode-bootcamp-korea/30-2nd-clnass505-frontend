import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../../redux/listFiltering';
import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { CloseSolid } from '@styled-icons/zondicons/CloseSolid';

export default function SearchContainerTop({
  searchHistories,
  setSearchHistories,
  submitAlreadyExistThing,
  clickCloseSearchBox,
}) {
  const [searchValue, setSearchValue] = useState('');
  const handlerSearchInput = event => {
    setSearchValue(event.target.value);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitSearchForm = event => {
    event.preventDefault();
    if (searchHistories.includes(searchValue)) {
      submitAlreadyExistThing(searchValue);
    } else {
      searchHistories.unshift(searchValue);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistories));
      setSearchHistories(JSON.parse(localStorage.getItem('searchHistory')));
    }
    const queryString = `?search=${searchValue}`;
    setSearchValue('');
    dispatch(resetAll());
    navigate('/list' + queryString);
    clickCloseSearchBox();
  };

  const clickDeleteBtn = () => {
    setSearchValue('');
  };
  return (
    <SearchContainerHeader>
      <SearchFormWrap>
        <SearchForm onSubmit={submitSearchForm}>
          <SearchInput
            type="search"
            placeholder="무슨 도움이 필요하신가요?"
            value={searchValue}
            onChange={handlerSearchInput}
          />
        </SearchForm>
        {searchValue.length > 0 ? (
          <IconClose onClick={clickDeleteBtn} />
        ) : (
          <IconSearch />
        )}
      </SearchFormWrap>
      <SearchSectionCloseBtn onClick={clickCloseSearchBox}>
        취소
      </SearchSectionCloseBtn>
    </SearchContainerHeader>
  );
}

const SearchContainerHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0;
  width: 100%;
`;

const SearchFormWrap = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 13px 16px;
  background-color: rgb(248, 248, 248);
`;

const SearchForm = styled.form`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: unset;
  color: rgb(26, 26, 26);
  background-color: unset;
  font-size: 14px;

  &::placeholder {
    color: #a2a2a2;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

const IconSearch = styled(Search)`
  width: 18px;
  color: #1a1a1a;
`;

const IconClose = styled(CloseSolid)`
  width: 18px;
  fill: rgb(162, 162, 162);
  cursor: pointer;
`;

const SearchSectionCloseBtn = styled.button`
  padding: 0;
  margin-left: 20px;
  border: none;
  width: 24.23px;
  height: 100%;
  color: #a2a2a2;
  background-color: unset;
  font-size: 0.875rem;
  cursor: pointer;
`;
