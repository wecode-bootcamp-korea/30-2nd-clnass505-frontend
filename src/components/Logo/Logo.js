import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Logo({ isFixed, clickCloseSearchBox }) {
  return (
    <SiteTilte to="/" isfix={isFixed ? 1 : 0} onClick={clickCloseSearchBox}>
      CLNASS505<KorTitle>클나쓰SOS</KorTitle>
    </SiteTilte>
  );
}

const SiteTilte = styled(Link)`
  position: ${props => (props.isfix ? 'absolute' : 'static')};
  top: 29px;
  left: 50%;
  transform: ${props => (props.isfix ? 'translateX(-588px)' : 'translateX()')};
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
`;

const KorTitle = styled.span`
  margin-left: 22px;
  color: #ff5600;
  font-weight: 700;
`;
