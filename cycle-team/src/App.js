import bgImg from './img/bg.jpg';
import styled from "styled-components";
import Title from './Title';
import Nav from './Nav';
import { useRef } from 'react';
import Footer from './Footer';

const Section = styled.div`
  width: 100%;
  height: 100%;
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
const Top = styled.div`
  width: 10px;
  position: absolute;
  top:0;
  display: hidden;
`;
const GoTopBtn = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  svg{
    width: 15px;
    fill: rgba(0, 0, 0, 0.7);
  }
  &:hover{
    border: 2px solid rgba(0, 0, 0, 1);
    transition: 0.2s;
    color: rgba(0, 0, 0, 1);
    svg{
      fill: rgba(0, 0, 0, 1); 
      transition: 0.2s;
    }
  }
`;

function App() {
  const topRef = useRef();
  const goToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Section>
      <Top ref={topRef} />
      <BgImg />
      <Title />
      <Nav />
      <GoTopBtn onClick={goToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" /></svg>
      </GoTopBtn>
      <Footer />
    </Section>
  );
}

export default App;
