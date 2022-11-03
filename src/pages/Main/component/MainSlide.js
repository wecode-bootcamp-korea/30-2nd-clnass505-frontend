import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainSlideImgBox from '../../../components/Slide/component/MainSlideImgBox';

export default function MainSlide() {
  const [bgColor, setBgColor] = useState([
    '255, 138, 0',
    '0, 199, 60',
    '51, 25, 26',
  ]);
  const [imgLocation, setImgLocation] = useState(0);

  useEffect(() => {
    let timeoutID = setTimeout(doAtTime, 2000);
    console.log(timeoutID);
  }, [bgColor]);

  const changeBgColor = () => {
    const currentColor = bgColor.pop();
    setBgColor([currentColor, ...bgColor]);
  };

  const changeLocation = () => {
    if (imgLocation === -660) {
      setImgLocation(0);
    } else {
      setImgLocation(prev => prev - 660);
    }
  };

  const doAtTime = () => {
    // changeBgColor();
    // changeLocation();
  };

  return (
    <MainSlideWrap>
      <ColorBackground bgColor={bgColor[2]}></ColorBackground>
      <MainSlideImgBox imgLocation={imgLocation} bgColor={bgColor[2]} />
      <ColorBackgroundBlur bgColor={bgColor[2]}></ColorBackgroundBlur>
      <MainSlideImgBox front={true} imgLocation={imgLocation} />
    </MainSlideWrap>
  );
}

const MainSlideWrap = styled.div`
  position: relative;
`;

const ColorBackground = styled.div`
  margin-top: 100px;
  height: 424px;
  background-color: ${props => `rgb(${props.bgColor})`};
  transition: background-color 0.4s ease;
`;

const ColorBackgroundBlur = styled(ColorBackground)`
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 0;
  width: 100%;
  opacity: 0.5;
`;
