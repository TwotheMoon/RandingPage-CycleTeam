import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import { useRef, useState } from "react";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
const Content = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: auto;
    text-align: center;
    bottom: 10%;
`;


const MainTitle = styled(motion.h1)`
    font-family: 'GmarketSansMedium';
    font-size: 50px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 500px){
        font-size: 30px;
    }
`;
const SubTitle = styled(motion.p)`
    font-family: 'GmarketSansMedium';
    font-size: 25px;
    color: white;
    margin-top: 20px;
    line-height: 40px;
    @media screen and (max-width: 500px){
        font-size: 15px;
    }
`;
const DownBtnWrap = styled(motion.div)`
    width: 55px;
    height: 55px;
    margin: 50px auto;
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
const TeamTitle = styled(motion.div)`
    width: 270px;
    height: 80px;
    border: 6px solid white;
    position: absolute;
    bottom: 80px;
    font-family: 'GmarketSansMedium';
    font-size: 27px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    &:hover{
        transition: 0.2s;
        border-color: #16BFEF;
    }
    &:not(:hover){
        transition: 0.2s;
        border-color: white;
    }
    a:hover{
        transition: 0.2s;
        color: #16BFEF;
    }
    a:not(:hover){
        transition: 0.2s;
        border-color: white;
    }
`;
const TeamTitleLink = styled.a`
    padding: 20px 50px;
`;
const DownWrap = styled.div`
    width: 20px;
    position: absolute;
    bottom: 30%;
`;

function Title() {
    const { scrollY } = useViewportScroll();
    const [toScroll, setToScroll] = useState(false);
    const downWrapRef = useRef();
    const changeScroll = () => {
        scrollY.onChange(() => {
            if (scrollY.get() <= 150) {
                setToScroll(false);
            } else {
                setToScroll(true);
            }
        });
    }
    changeScroll();
    const onClickDownBtn = () => {
        downWrapRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Section>
            <AnimatePresence>
                {toScroll === false &&
                    <Content
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: -50 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ type: "tween", duration: "0.5" }}
                    >
                        <MainTitle>
                            우리 속도에는<br />
                            숨겨진 디테일이 있습니다.
                        </MainTitle>
                        <SubTitle>
                            3주의 투어 일정 속에서 가장 빠른, 안전한, 효율적인 <br />
                            사이클링을 위해 우리는 항상 연구합니다.
                        </SubTitle>
                        <DownBtnWrap onClick={onClickDownBtn}>
                            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></Icon>
                        </DownBtnWrap>
                    </Content>

                }
            </AnimatePresence>
            <DownWrap ref={downWrapRef} />
            <AnimatePresence>
                {toScroll === true &&
                    <TeamTitle
                        inherit={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: -50 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ type: "tween", duration: "0.5" }}
                    >
                        <TeamTitleLink href="/">
                            TEAMMOON
                        </TeamTitleLink>
                    </TeamTitle>
                }
            </AnimatePresence>
        </Section >
    );
}

export default Title;