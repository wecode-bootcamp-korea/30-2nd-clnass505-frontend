## 🚨클나쓰505🆘

- [클래스101](https://class101.net/)을 모티브로 삼아 다양한 강의를 소비하며 제작도 할 수 있는 사이트입니다.

## 프로젝트 기간

2022.03.14.월 ~ 2022.03.25.금

## 프로젝트 참여 인원

프론트 엔드 : [조진목](https://github.com/ChoJinmok) , [신윤지]() , [노유정](https://github.com/YOOKIKI)
<
백엔드 : 박건우 , 김동규 , 이지원

## 필수 구현 사항

[시연영상 보기 Click!](https://youtu.be/VYkbAKeaEy4)

[맛보기 (aws s3 웹호스팅) ](http://clnass505.s3-website.ap-northeast-2.amazonaws.com/)

### 1.소셜로그인 (OAuth 2.0 기반의 카카오 소셜 로그인)

- 카카오 소셜로그인을 통해 클나쓰에 로그인하게 되는 과정

 <img src = "https://user-images.githubusercontent.com/96294372/176542492-3d371c5e-9d5b-4eab-a9e8-f696ccc02051.jpeg" width="50%" height="50%">
 <img src = "https://user-images.githubusercontent.com/96294372/176542511-0193708b-cf65-4626-be67-8bab7a43c7f3.jpeg" width="60%" height="60%">

- 받아온 토큰을 로컬스토리지에 저장 / 로그아웃시 로컬스토리지의 토큰 삭제

<img width="689" alt="스크린샷 2022-06-30 오전 11 15 12" src="https://user-images.githubusercontent.com/96294372/176578354-df9fe288-3c2b-40c6-98b2-bb396f163a1f.png">

로그인 전

 <img width="687" alt="스크린샷 2022-06-30 오전 11 16 23" src="https://user-images.githubusercontent.com/96294372/176578453-1072c9aa-9d6a-428e-a18b-bebd98af8e9a.png">

로그인 후

 <img width="707" alt="스크린샷 2022-06-30 오전 11 16 40" src="https://user-images.githubusercontent.com/96294372/176578479-88943c27-7259-4381-9251-3ee90ff8b459.png">

### 2. 강의 상세페이지

백엔드에서 보내준 상품정보 데이터로 화면 구성 및 유저 정보에 맞는 강좌 신청 버튼 변경

- 백엔드에서 보내준 상품정보(클래스명, 강의자명, 금액, 클래스 썸네일이미지, 클래스설명)
- 좋아요(하트 찜하기) 선택 기능(FrontEnd에서만 구현)
- 유저 상태에 따른 강의신청 버튼 변경 (비로그인 및 로그인이지만 비수강자 / 로그인&수강자)
- 강의 신청 버튼 클릭시 -> POST를 사용해 상품의 정보와 수량을 back-end로 전송

 <img width="714" alt="스크린샷 2022-06-30 오전 11 13 37" src="https://user-images.githubusercontent.com/96294372/176578250-9417b6a9-5b44-4bc2-bad0-f463f494e3c8.png">

수강상태에 따른 버튼 변경 및 하트 찜하기

비로그인 또는 비수강자의 경우 (수강옵션 구경하기)

 <img width="398" alt="스크린샷 2022-06-30 오전 11 18 31" src="https://user-images.githubusercontent.com/96294372/176578676-941e16be-7534-4eb9-aecf-02de2ee087e8.png">

로그인 후 수강자의 경우(내 강좌입니다)

 <img width="395" alt="스크린샷 2022-06-30 오전 11 18 57" src="https://user-images.githubusercontent.com/96294372/176578733-1b9adf82-370d-4cd8-9eac-d0aa8e981dcd.png">

### 3. 강의 리스트페이지

### 4. 강의 개설페이지

### 5. 마이페이지

## 추가 구현 사항

1. 강의 결제페이지
2. 메인페이지 슬라이드
3. 하트 찜하기 (FrontEnd)

## 구현 파트

1. 노유정 : Login / Detail
2. 조진목 : List / Nav / Footer / MyPage / Create
3. 신윤지 : Create

### 적용 기술

> - Front-End : React.js, sass, react-modal
> - Back-End : Python, Django web framework,
> - Common : KAKAO social login, Git Hub, Git, Slack, Trello, Notion

## Reference

- 이 프로젝트는 [클래스101](https://class101.net/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
