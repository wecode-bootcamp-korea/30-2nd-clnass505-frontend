import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useLockBodyScroll from '../hooks/useLockBodyScroll';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { Check } from '@styled-icons/bootstrap/Check';
import difficultyId from '../data/difficultyId';

export default forwardRef(function ModalWindow(
  {
    title,
    name,
    closeModal,
    clickFilter,
    list,
    difficultyData,
    checkCheckbox,
    clickResetBtn,
    clickApplyBtn,
  },
  ref
) {
  const listFiltering = useSelector(store => store.listFiltering);
  useLockBodyScroll();

  const isActiveApplyBtn = difficultyData.length > 0;

  return (
    <Modal ref={ref}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <IconClose onClick={closeModal} />
      </ModalHeader>
      {name === 'sort' && (
        <ul>
          {list.map((data, index) => {
            return (
              <SortList
                key={index}
                clicked={
                  listFiltering.sort.length > 0
                    ? listFiltering.sort[0] === data
                    : '인기순' === data
                }
                onClick={clickFilter}
              >
                {data}
              </SortList>
            );
          })}
        </ul>
      )}
      {name === 'difficulty' && (
        <>
          {list.map((data, index) => {
            return (
              <DifficultyWrap key={index}>
                <Checkbox
                  id={difficultyId[data]}
                  defaultChecked={
                    difficultyData.includes(difficultyId[data]) ? true : false
                  }
                  onClick={checkCheckbox}
                />
                <IconCheck className="checkbox" />
                <CheckboxLabel htmlFor={difficultyId[data]}>
                  {data}
                </CheckboxLabel>
              </DifficultyWrap>
            );
          })}
          <ApplyBtnsWrap>
            <ResetBtn onClick={clickResetBtn}>초기화</ResetBtn>
            <ApplyBtn
              className={isActiveApplyBtn ? null : 'disabled'}
              onClick={clickApplyBtn}
            >
              적용하기
            </ApplyBtn>
          </ApplyBtnsWrap>
        </>
      )}
    </Modal>
  );
});

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 480px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 5px, rgb(0 0 0 / 2%) 0px 6px 4px,
    rgb(0 0 0 / 3%) 0px 9px 6px, rgb(0 0 0 / 3%) 0px 16px 12px,
    rgb(0 0 0 / 8%) 0px 24px 24px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: rgb(26, 26, 26);
`;

const IconClose = styled(Close)`
  width: 30px;
  cursor: pointer;
`;

const SortList = styled.li.attrs(props => ({ title: 'sort' }))`
  display: flex;
  align-items: center;
  height: 52px;
  font-size: 14px;
  color: ${props => (props.clicked ? '#ff5600' : '#1a1a1a')};
  cursor: pointer;
`;

const DifficultyWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

const Checkbox = styled.input.attrs(props => ({
  id: props.id,
  type: 'checkbox',
}))`
  position: absolute;
  left: -5px;
  width: 25px;
  height: 25px;
  z-index: 1;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .checkbox {
    background-color: rgb(27, 28, 29);
  }
`;

const IconCheck = styled(Check)`
  border-radius: 2px;
  width: 20px;
  color: white;
  border: 1px solid rgb(27, 28, 29);
`;

const CheckboxLabel = styled.label.attrs(props => ({ htmlFor: props.htmlFor }))`
  margin-left: 10px;
  color: #1a1a1a;
  font-size: 14px;
  cursor: pointer;
`;

const ApplyBtnsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const ApplyBtn = styled.button`
  padding: 0;
  border: none;
  height: 40px;
  flex-grow: 1;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #ff5600;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.1s ease 0s;

  &:hover {
    background-color: rgb(204, 69, 0);
  }

  &.disabled {
    background-color: rgb(255, 242, 233);
    cursor: not-allowed;
  }
`;

const ResetBtn = styled(ApplyBtn)`
  margin-right: 16px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 223, 223);
  }
`;
