import bgImg from './img/bg.jpg';
import styled from "styled-components";
import Title from './Title';
import Nav from './Nav';

const Section = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BgImg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  opacity: 0.7;
  z-index: -1;
`;

function App() {

  return (
    <Section>
      <BgImg />
      <Title />
      <Nav />
    </Section>
  );
}

export default App;
