import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Category from './Category';

export default function Categories({
  isSub,
  mouseOverSubCategorySection,
  subCategory,
  setSubCategory,
}) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(res => setCategoryData(res));
  }, []);

  return (
    <CategoryContainer isSub={isSub}>
      {isSub ? (
        <Category isSub={isSub} subCategory={subCategory} />
      ) : (
        categoryData.map((data, index) => {
          return (
            <Category
              key={index}
              data={data}
              mouseOverSubCategorySection={mouseOverSubCategorySection}
              setSubCategory={setSubCategory}
            />
          );
        })
      )}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  position: absolute;
  left: ${props => (props.isSub ? '260px' : 0)};
  width: 260px;
  height: 80vh;
  padding: 20px 12px;
  border: 1px solid #efefef;
  background-color: #ffffff;
  overflow-y: ${props => (props.isSub ? 'none' : 'scroll')};
  transform: translateY(30px);
`;
