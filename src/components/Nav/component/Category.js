import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IosArrowRight } from '@styled-icons/fluentui-system-filled/IosArrowRight';

export default function Category({
  data,
  isSub,
  mouseOverSubCategorySection,
  subCategory,
  setSubCategory,
}) {
  const navigate = useNavigate();

  let title = '';
  let category = [];
  if (!isSub && data) {
    title = Object.keys(data)[0];
    category = Object.keys(data[title]);
  } else if (subCategory) {
    title = Object.keys(subCategory)[0];
    category = subCategory[title];
  }

  const mouseOverMainCategory = event => {
    if (event.target.tagName === 'LI') {
      mouseOverSubCategorySection();
      setSubCategory({ [event.target.id]: data[title][event.target.id] });
    }
  };

  const clickMainCategory = event => {
    let queryStrging = `?mainCategory=${event.target.id}`;
    navigate('/list' + queryStrging);
  };

  const clickSubCategory = event => {
    let queryStrging = `?mainCategory=${title}&subCategory=${event.target.innerText}`;
    navigate('/list' + queryStrging);
  };

  return (
    <>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryListWrap>
        {isSub
          ? category.map((data, index) => {
              return (
                <CategoryList key={index} onClick={clickSubCategory}>
                  {data}
                </CategoryList>
              );
            })
          : category.map((data, index) => {
              return (
                <CategoryList
                  key={index}
                  id={data}
                  onMouseOver={mouseOverMainCategory}
                  onClick={clickMainCategory}
                >
                  {data}
                  <IconArrowRight />
                </CategoryList>
              );
            })}
      </CategoryListWrap>
    </>
  );
}

const CategoryTitle = styled.h4`
  margin: 0 0 8px 13px;
  color: #a2a2a2;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
`;

const CategoryListWrap = styled.ul`
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;

const CategoryList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  color: #1a1a1a;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
    font-weight: 700;

    svg {
      visibility: visible;
    }
  }
`;

const IconArrowRight = styled(IosArrowRight)`
  width: 12px;
  visibility: hidden;
`;
