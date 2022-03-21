import styled from 'styled-components';

export default function FooterLinkList({ data }) {
  const title = Object.keys(data)[0];
  const listData = data[title];

  return (
    <FooterLinks>
      <LinksTitle>{title}</LinksTitle>
      {listData.map((data, index) => {
        return <FooterLink key={index}>{data}</FooterLink>;
      })}
      {listData.length === 0 && (
        <>
          <ServiceBtn>문의하기</ServiceBtn>
          <ServiceTime>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</ServiceTime>
        </>
      )}
    </FooterLinks>
  );
}

const FooterLinks = styled.ul`
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 0;
  color: rgb(26, 26, 26);
`;

const LinksTitle = styled.h1`
  margin-bottom: 8px;
  padding-left: 12px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const FooterLink = styled.li`
  margin-right: 28px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background: rgb(248, 248, 248);
    border-radius: 3px;
  }
`;

const ServiceBtn = styled.button`
  margin-bottom: 12px;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 40px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  transition: background-color 0.1s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 223, 223);
  }
`;

const ServiceTime = styled.p`
  width: 100%;
  color: rgb(162, 162, 162);
  font-size: 14px;
  text-align: center;
`;
