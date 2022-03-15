import { useState } from 'react';
import styled from 'styled-components';
import HalfBanner from './HalfBanner';
import BANNER_DATA from './data/bannerData';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

export default function SwiperSlide() {
  const [slideLocation, setSlideLocation] = useState(0);

  const clickLeftBtn = () => {
    setSlideLocation(slideLocation + 600);
  };

  const clickRightBtn = () => {
    setSlideLocation(slideLocation - 600);
  };

  return (
    <Slide>
      <SlideBtnLeft
        onClick={clickLeftBtn}
        // className={slideLocation === 0 ? 'disabled' : ''}
        disabled={slideLocation === 0}
      >
        <IconLeft />
      </SlideBtnLeft>
      <SwiperContainer>
        <SwiperWrap style={{ transform: `translateX(${slideLocation}px)` }}>
          {BANNER_DATA.map(data => {
            return <HalfBanner key={data.id} data={data} />;
          })}
        </SwiperWrap>
      </SwiperContainer>
      <SlideBtnRight
        onClick={clickRightBtn}
        className={slideLocation === -1200 ? 'disabled' : ''}
        disabled={slideLocation === -1200}
      >
        <IconRight />
      </SlideBtnRight>
    </Slide>
  );
}

const Slide = styled.div`
  position: relative;
`;

const SwiperContainer = styled.div`
  margin-bottom: 32px;
  overflow: hidden;
`;

const SlideBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: unset;
  cursor: pointer;
  opacity: ${props => (props.disabled ? 0 : 1)};
  visibility: ${props => (props.disabled ? 'hiden' : 'visible')};
  transition: background-color 0.1s ease 0s;

  &:hover {
    background-color: rgb(248, 248, 248);
  }
`;

const SlideBtnRight = styled(SlideBtn)`
  right: -50px;
  z-index: 10;
`;
const SlideBtnLeft = styled(SlideBtn)`
  left: -50px;
  z-index: 10;
`;

const IconRight = styled(ArrowIosForwardOutline)`
  width: 30px;
`;

const IconLeft = styled(ArrowIosBackOutline)`
  width: 30px;
`;

const SwiperWrap = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
`;
