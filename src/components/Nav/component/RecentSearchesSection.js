import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid/Close';

export default function RecentSearchedSection({
  searchHistories,
  clickDeleteRecentSearchedAll,
  clickDeleteSearchHistory,
  clickRecentSearchValue,
}) {
  return (
    <RecentSearches>
      <RecentSearchesHeader>
        <RecentSearchesTitle>최근 검색어</RecentSearchesTitle>
        <DeleteRecentSearchedAll onClick={clickDeleteRecentSearchedAll}>
          전체 삭제
        </DeleteRecentSearchedAll>
      </RecentSearchesHeader>
      {searchHistories.map((data, index) => {
        return (
          <RecentSearch key={index}>
            <RecentSearchValue onClick={clickRecentSearchValue}>
              {data}
            </RecentSearchValue>
            <DeleteBtn onClick={clickDeleteSearchHistory} id={data} />
          </RecentSearch>
        );
      })}
    </RecentSearches>
  );
}

const RecentSearches = styled.div`
  padding-bottom: 40px;
  margin-bottom: 28px;
  border-bottom: 1px solid rgb(229, 229, 229); ;
`;

const RecentSearchesHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecentSearchesTitle = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: rgb(26, 26, 26);
`;

const DeleteRecentSearchedAll = styled.button`
  border: none;
  padding: 0;
  color: rgb(102, 102, 102);
  background-color: unset;
  font-size: 0.875rem;
  line-height: 1.125rem;
  cursor: pointer;
`;

const RecentSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RecentSearchValue = styled.span`
  color: #1a1a1a;
  font-size: 14px;
  cursor: pointer;
`;

const DeleteBtn = styled(Close)`
  width: 18px;
  fill: rgb(102, 102, 102);
  cursor: pointer;

  path {
    pointer-events: none;
  }
`;
