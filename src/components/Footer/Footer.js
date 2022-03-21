import styled from 'styled-components';
import FooterLinkList from './component/FooterLinkList';
import FOOTER_LINK_DATA from './data/footerLinkData';
import HOMPAGE_DATA from './data/hompageData';
import TERM_DATA from './data/termData';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterNav>
          <Clnass505Title>
            <Clnass505TitleLogo>CLNASS505</Clnass505TitleLogo>
            <Clnass505TitleComment>
              클나쓰SOS는 모든 사람이 어려운 일을 금방 극복
              <br />할 수 있도록 세상을 바꾸고자 합니다.
            </Clnass505TitleComment>
            <LogoCopyright>
              icon made by Freepik from www.flaticon.com
            </LogoCopyright>
          </Clnass505Title>
          {FOOTER_LINK_DATA.map((data, index) => {
            return <FooterLinkList key={index} data={data} />;
          })}
        </FooterNav>
        <FooterBottom>
          <FooterBottomLeft>
            <HompageLists>
              {HOMPAGE_DATA.map((data, index) => {
                return <HompageList key={index}>{data}</HompageList>;
              })}
            </HompageLists>
          </FooterBottomLeft>
          <div>
            <TermsList>
              {TERM_DATA.map((data, index) => {
                return <Term key={index}>{data}</Term>;
              })}
            </TermsList>
            <CompanyInfo>
              (주)클나쓰505 | 대표 김동규 | 서울특별시 강남구 테헤란로 427,
              위워크타워 | 클라우드 호스팅: Amazon Web Services Inc. |
              사업자등록번호 : 530-81-01310 | 주식회사 클나쓰505은 전자상거래
              등에서의 소비자보호에 관한 법률에 따른 통신판매업과
              통신판매중개업을 영위하고 있습니다. 주식회사 클나쓰505은
              통신판매중개자로서 중개하는 통신판매에 관하여서는 통신판매의
              당사자가 아니므로 어떠한 책임도 부담하지 아니합니다.
            </CompanyInfo>
          </div>
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 40px 0 64px;
  border-top: 1px solid rgb(248, 248, 248);
  height: 510px;
`;

const FooterWrap = styled.div`
  margin: 0 auto;
  width: 1176px;
`;

const FooterNav = styled.div`
  display: flex;
  padding: 24px 0 80px;
  border-bottom: 1px solid rgb(248, 248, 248);
`;

const Clnass505Title = styled.div`
  width: 398px;
`;

const Clnass505TitleLogo = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: 800;
`;

const Clnass505TitleComment = styled.p`
  margin: 20px 0 23px;
  color: #666666;
  font-size: 14px;
  line-height: 20px;
`;

const LogoCopyright = styled.span`
  color: #666666;
  font-size: 13px;
  font-style: italic;
`;

const FooterBottom = styled.div`
  display: flex;
  margin-top: 24px;
`;

const FooterBottomLeft = styled.div``;

const HompageLists = styled.ul`
  margin-right: 78px;
  width: 320px;
  height: 72px;
  list-style: none;
  line-height: 23px;
`;

const HompageList = styled.li`
  float: left;
  color: #a2a2a2;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: black;
  }

  &:not(:last-child, :nth-child(3), :nth-child(7))::after {
    content: '･';
    display: inline-block;
    width: 24px;
    text-align: center;
    color: #a2a2a2;
  }
`;

const TermsList = styled.ul`
  list-style: none;
  line-height: 23px;
`;

const Term = styled(HompageList)`
  font-size: 11px;

  &:not(:last-child, :nth-child(7))::after {
    content: '･';
    display: inline-block;
    width: 24px;
    text-align: center;
    color: #a2a2a2;
  }
`;

const CompanyInfo = styled.p`
  margin-top: 16px;
  color: #cacaca;
  font-size: 9px;
  line-height: 12px;
  float: left;
`;
