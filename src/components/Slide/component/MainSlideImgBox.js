import styled from 'styled-components';

export default function MainSlideImgBox({ front, imgLocation, bgColor }) {
  return (
    <ImgContainer front={front}>
      <ImgBoxes style={{ transform: `translateX(${imgLocation}px)` }}>
        <ImgBox>
          <Img
            alt=""
            src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            front={front}
            bgColor={bgColor}
          />
        </ImgBox>
        {/* <ImgBox>
          <Img
            alt=""
            src="https://images.unsplash.com/photo-1609473295863-2d9299af71d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            front={front}
            bgColor={bgColor}
          />
        </ImgBox>
        <ImgBox>
          <Img
            alt=""
            src="https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            front={front}
            bgColor={bgColor}
          />
        </ImgBox> */}
      </ImgBoxes>
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  position: absolute;
  top: ${props => (props.front ? '40px' : '4px')};
  right: 0%;
  transform: ${props =>
    props.front ? 'translateX(70px)' : 'translateX(-49px)'};
  height: 416px;
  width: 100%;
  overflow: hidden;
`;

const ImgBoxes = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: transform 0.4s ease;
`;

const ImgBox = styled.div`
  width: 1320px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  ${props => (props.front ? '' : 'filter: blur(28px)')};
  ${props => (props.front ? '' : 'backface-visibility: hidden')};
  ${props =>
    props.front
      ? ''
      : `background: linear-gradient(270.44deg, rgb(${props.bgColor}) 0.21%, rgba(${props.bgColor}, 0.4) 99.18%) 0% 0% / 100%`};
  ${props => (props.front ? '' : `perspective: 1000px`)};
  ${props => (props.front ? '' : `transform: translateZ(0px)`)};
`;
