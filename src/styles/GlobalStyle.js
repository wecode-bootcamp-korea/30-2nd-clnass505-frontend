import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	* {
    box-sizing: border-box;

    &::selection {
    background-color: #ff5946;
    }
  }
  
  html,
  body {
    height: 100%;
    font-family: 'Noto Sans KR Regular', 'Noto Sans Regular';
  }
	
`;

export default GlobalStyle;
