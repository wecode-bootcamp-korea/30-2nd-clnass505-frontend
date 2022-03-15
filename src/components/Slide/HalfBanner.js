import styled from 'styled-components';

export default function HalfBanner({ data }) {
  return (
    <SlideContent bgColor={data.bannerColor}>
      <BannerInfo>
        <BannerTitle>{data.title}</BannerTitle>
        <BannerContent>{data.content}</BannerContent>
      </BannerInfo>
      <BannerPicture>
        <img alt={data.title} src={data.image} />
      </BannerPicture>
    </SlideContent>
  );
}

const SlideContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-right: 24px;
  height: 150px;
  width: 576px;
  border-radius: 3px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`;

const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  color: #ffffff;
  word-break: keep-all;
`;

const BannerTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
`;

const BannerContent = styled.span`
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
`;

const BannerPicture = styled.div`
  width: 225px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
