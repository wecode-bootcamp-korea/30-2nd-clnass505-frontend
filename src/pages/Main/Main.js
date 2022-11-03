import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import MainSlide from './component/MainSlide';

export default function Main() {
  return (
    <>
      <Nav />
      <MainSlide />
      {/* <ClassListWrap>
        {classData.map((data, index) => {
          return (
            index < 4 && (
              <Class
                key={data.id}
                data={data}
                classData={classData}
                setClassData={setClassData}
              />
            )
          );
        })}
      </ClassListWrap>
      <ClassListWrap>
        {classData.map((data, index) => {
          return (
            index < 4 && (
              <Class
                key={data.id}
                data={data}
                classData={classData}
                setClassData={setClassData}
              />
            )
          );
        })}
      </ClassListWrap>
      <ClassListWrap>
        {classData.map((data, index) => {
          return (
            index < 4 && (
              <Class
                key={data.id}
                data={data}
                classData={classData}
                setClassData={setClassData}
              />
            )
          );
        })}
      </ClassListWrap> */}
      <Footer />
    </>
  );
}

// const ClassListWrap = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0 -12px;
//   width: 1200px;
// `;
