import styled from 'styled-components';
import { CaretDown } from '@styled-icons/boxicons-regular/CaretDown';

export default function Filter({ name, openModal }) {
  return (
    <FilterBtn onClick={openModal}>
      {name}
      <IconCaretDown />
    </FilterBtn>
  );
}

const FilterBtn = styled.button`
  padding: 10px 16px;
  margin-right: 12px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 2px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  cursor: pointer;
`;

const IconCaretDown = styled(CaretDown)`
  margin-left: 4px;
  width: 10px;
  pointer-events: none;
`;
