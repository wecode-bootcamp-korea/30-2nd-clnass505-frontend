import { useState, useRef } from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import useOverMouseOutside from '../hook/useOverMouseOutside';

export default function CategoryMenu() {
  const [isHoverCategory, setIsHoverCategory] = useState(false);
  const [isHoverSubCategory, setIsHoverSubCategory] = useState(false);
  const [subCategory, setSubCategory] = useState(null);
  const ref = useRef();

  useOverMouseOutside(ref, () => {
    setIsHoverCategory(false);
    setIsHoverSubCategory(false);
  });

  const mouseOverCategorySection = () => {
    setIsHoverCategory(true);
  };

  const mouseOverSubCategorySection = () => {
    setIsHoverSubCategory(true);
  };
  return (
    <CategorySection ref={ref}>
      <CategoryBar onMouseOver={mouseOverCategorySection}>
        <MenuIcon />
      </CategoryBar>
      {isHoverCategory && (
        <Categories
          mouseOverSubCategorySection={mouseOverSubCategorySection}
          setSubCategory={setSubCategory}
        />
      )}
      {isHoverSubCategory && (
        <Categories isSub={true} subCategory={subCategory} />
      )}
    </CategorySection>
  );
}

const CategorySection = styled.div`
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const CategoryBar = styled.button`
  border: none;
  background-color: unset;
  padding: 0;
  cursor: pointer;
`;

const MenuIcon = styled(Menu)`
  width: 30px;
`;
