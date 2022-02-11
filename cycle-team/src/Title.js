import styled from "styled-components";
import {motion, useViewportScroll} from 'framer-motion';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const MainTitle = styled(motion.h1)`
    font-family: 'GmarketSansMedium';
    font-size: 50px;
    font-weight: bold;
    color: white;
`;
const SubTitle = styled(motion.p)`
    font-family: 'GmarketSansMedium';
    font-size: 25px;
    text-align: center;
    color: white;
    margin-top: 20px;
    line-height: 40px;
`;
const DownBtnWrap = styled(motion.div)`
    width: 55px;
    height: 55px;
    margin-top: 50px;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    cursor: pointer;
    &:hover{
        border-color: #16BFEF;
        svg{
            transition: 0.2s;
            fill: #16BFEF;
        }
    }
`;
const Icon = styled(motion.svg)`
    width: 15px;
    fill: white;
    cursor: pointer;
`;

function Title () {

    return (
        <Section>
            <MainTitle>속도에는 숨겨진 디테일이 있습니다. </MainTitle>
            <SubTitle>
                3주의 투어 일정 속에서 가장 빠른, 안전한, 효율적인 <br/ >
                사이클링을 위해 우리는 항상 연구합니다.
            </SubTitle>
            <DownBtnWrap>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></Icon>
            </DownBtnWrap>
        </Section>
    );
}

export default Title;