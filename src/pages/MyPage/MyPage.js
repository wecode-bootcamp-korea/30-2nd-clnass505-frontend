import Classes from './Classes';
import ClassesList from './ClassesList';
import './MyPage.scss';

export default function MyPage() {
  const classes = 'class';

  return (
    <div className="myPage">
      <div className="userInfo">
        <h1> username </h1>
        <span> useremail </span>
      </div>
      <div className="page">
        <div className="leftSide">
          <section className="userCash">
            <h3>내 정보</h3>
            <span>내 캐시</span>
            <span>내 포인트</span>
            <span>주문 내역</span>
            <span>내 후기</span>
          </section>
          <section className="userClass">
            <h3>내 클래스</h3>
            <span>생성한 클래스</span>
            <span>수강 중인 클래스</span>
            <span>찜한 클래스</span>
          </section>
          <section className="menu">
            <h3>메뉴</h3>
            <span>친구 초대하고 30,000원 쿠폰 받기</span>
            <span>클나쓰505 앱 설치하기</span>
            <span>크리에어터 지원하기</span>
            <span>로그아웃</span>
          </section>
        </div>
        <div className="mainContent">
          <section className="myClass">
            <section className="goBackToClass">
              <h3 className="goBackIcon"> ← </h3>
              <h3>내 클래스</h3>
            </section>
            <ClassesList classes={classes} />
          </section>
          <section className="createdClass">
            <h3>생성한 클래스</h3>
            <Classes />
            <Classes />
            <Classes />
            <Classes />
          </section>
          <section className="learningClass">
            <h3>수강 중인 클래스</h3>
            <Classes />
            <Classes />
            <Classes />
            <Classes />
          </section>
        </div>
      </div>
    </div>
  );
}
