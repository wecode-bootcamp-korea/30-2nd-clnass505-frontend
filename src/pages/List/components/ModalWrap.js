import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter, resetFilter } from '../../../redux/listFiltering';
import ModalWindow from './ModalWindow';
import styled from 'styled-components';

export default forwardRef(function ModalWrap(
  { modalOpen, closeModal, clickFilter, title, list },
  ref
) {
  const [difficultyData, setDifficultyData] = useState([]);
  const dispatch = useDispatch();

  let name;
  if (title === '정렬') {
    name = 'sort';
  } else if (title === '난이도') {
    name = 'difficulty';
  }

  const checkCheckbox = event => {
    if (!difficultyData.includes(event.target.id)) {
      setDifficultyData(difficultyData.concat(event.target.id));
    } else {
      setDifficultyData(difficultyData.filter(el => el !== event.target.id));
    }
  };

  const clickResetBtn = () => {
    setDifficultyData([]);
    dispatch(resetFilter());
    closeModal();
  };

  const clickApplyBtn = () => {
    dispatch(updateFilter(difficultyData));
    closeModal();
  };

  return (
    <FilterModal open={modalOpen[name]}>
      {modalOpen[name] && (
        <ModalWindow
          title={title}
          name={name}
          closeModal={closeModal}
          clickFilter={clickFilter}
          list={list}
          ref={ref}
          difficultyData={difficultyData}
          checkCheckbox={checkCheckbox}
          clickResetBtn={clickResetBtn}
          clickApplyBtn={clickApplyBtn}
        />
      )}
    </FilterModal>
  );
});

const FilterModal = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  inset: 0;
  overflow: hidden;
  color: #1a1a1a;
  background-color: rgba(0, 0, 0, 0.72);
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
`;
