import { createGlobalStyle } from 'styled-components';
import NotoSansBold from './Noto_Sans/NotoSans-Bold.ttf';
import NotoSansBoldItalic from './Noto_Sans/NotoSans-BoldItalic.ttf';
import NotoSansItalic from './Noto_Sans/NotoSans-Italic.ttf';
import NotoSansRegular from './Noto_Sans/NotoSans-Regular.ttf';
import NotoSansKRBlack from './Noto_Sans_KR/NotoSansKR-Black.otf';
import NotoSansKRBold from './Noto_Sans_KR/NotoSansKR-Bold.otf';
import NotoSansKRLight from './Noto_Sans_KR/NotoSansKR-Light.otf';
import NotoSansKRMedium from './Noto_Sans_KR/NotoSansKR-Medium.otf';
import NotoSansKRRegular from './Noto_Sans_KR/NotoSansKR-Regular.otf';
import NotoSansKRThin from './Noto_Sans_KR/NotoSansKR-Thin.otf';

export default createGlobalStyle`
    @font-face {
        font-family: "Noto Sans Bold";
        src: local("Noto Sans Bold"),
        url(${NotoSansBold}) format('ttf');
        /* font-weight: 300;
        font-style: normal; */
    }
    @font-face {
        font-family: "Noto Sans Bold Italic";
        src: local("Noto Sans Bold Italic"),
        url(${NotoSansBoldItalic}) format('ttf');
    }
    @font-face {
        font-family: "Noto Sans Italic";
        src: local("Noto Sans Italic"),
        url(${NotoSansItalic}) format('ttf');
    }
    @font-face {
        font-family: "Noto Sans Regular";
        src: local("Noto Sans Regular"),
        url(${NotoSansRegular}) format('ttf');
    }
    @font-face {
        font-family: "Noto Sans KR Black";
        src: local("Noto Sans KR Black"),
        url(${NotoSansKRBlack}) format('otf');
    }
    @font-face {
        font-family: "Noto Sans KR Bold";
        src: local("Noto Sans KR Bold"),
        url(${NotoSansKRBold}) format('otf');
    }
    @font-face {
        font-family: "Noto Sans KR Light";
        src: local("Noto Sans KR Light"),
        url(${NotoSansKRLight}) format('otf');
    }
    @font-face {
        font-family: "Noto Sans KR Medium";
        src: local("Noto Sans KR Medium"),
        url(${NotoSansKRMedium}) format('otf');
    }
    @font-face {
        font-family: "Noto Sans KR Regular";
        src: local("Noto Sans KR Regular"),
        url(${NotoSansKRRegular}) format('otf');
    }
    @font-face {
        font-family: "Noto Sans KR Thin";
        src: local("Noto Sans KR Thin"),
        url(${NotoSansKRThin}) format('otf');
    }
`;
