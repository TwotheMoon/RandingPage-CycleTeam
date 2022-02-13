import styled from "styled-components";
import SmallContent from "./SmallContent";

import teamMoon01 from "./img/TeamMoon01.jpg";
import cycle01 from "./img/cycle01.jpg";
import cycle02 from "./img/cycle02.jpg";
import cycle03 from "./img/cycle03.jpg";
import cycle04 from "./img/cycle04.jpg";
import cycle05 from "./img/cycle05.jpg";
import cycle06 from "./img/cycle06.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Section = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'GmarketSansMedium';
`;
const DateWrap = styled(motion.div)`
    width: 80%;
    margin-top: 100px;
    position: relative;
`;
const Hr = styled.hr`
    opacity: 0.5;
`;
const DateText = styled.h1`
    position: absolute;
    background-color: white;
    padding: 10px 40px;
    right: 50%;
    top: -10px;
    transform: translateX(50%) ;
`;
const HeaderWrap = styled(motion.div)`
    width: 80%;
    height: 100%;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 45px;
        font-weight: bold;
        &:hover{
        color: #16BFEF;
        transition: 0.2s;
        }
        &:not(:hover){
            color: black;
            transition: 0.2s;
        }

        @media screen and (max-width: 500px){
        font-size: 25px;
        }
    }
    p{
        margin-top: 30px;
        line-height: 35px;
        color: #666;
        @media screen and (max-width: 500px){
            font-size: 12px;
        }
    }
`;
const HeaderImgBox = styled.div`
    width: auto;
    height: auto;
    overflow: hidden;
    margin-top: 50px;
    `;
const HeaderImg = styled.img`
    max-width: 100%;
    height: auto;
    transform: scale(1);
    transition: 0.2s;
    &:hover{
        transform: scale(1.05);
        transition: 0.2s;
    }
`;
const HeaderBtn = styled.div`
    max-width: auto;
    height: auto;
    border: 2px solid black;
    padding: 20px 35px;
    margin: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        color: #16BFEF;
        border-color: #16BFEF;
        transition: 0.2s;
    }
    &:not(:hover){
        color: black;
        border-color: black;
        transition: 0.2s;
    }
    @media screen and (max-width: 500px){
        width: 100%;
    }
`;
const ContentWrap = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const fadeInVariants = {
    start: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.2
        }
    }
}

function TeamMoon({ num }) {

    return (
        <>
            <Section>
                <AnimatePresence>
                    {num === 1 &&
                        <>
                            <DateWrap
                                variants={fadeInVariants}
                                initial="start"
                                animate="animate"
                            >
                                <Hr />
                                <DateText>2022.02.15</DateText>
                            </DateWrap>
                            <HeaderWrap
                                variants={fadeInVariants}
                                initial="start"
                                animate="animate"
                            >
                                <h1>Giro d'Italia를 위한 훈련</h1>
                                <p>
                                    Team Moon은 곧 있을 새 투어 지로 디 이탈리아를<br />
                                    대비한 연습에 돌입했습니다. 새해 첫 투어를 맞이하며 <br />
                                    좋은 성적을 내기 위한 훈련에 돌입 했습니다. <br />
                                </p>
                                <HeaderImgBox>
                                    <HeaderImg src={teamMoon01} />
                                </HeaderImgBox>
                                <HeaderBtn>
                                    <span>FULL SOTRY</span>
                                </HeaderBtn>
                            </HeaderWrap>
                            <ContentWrap
                                variants={fadeInVariants}
                                initial="start"
                                animate="animate"
                            >
                                <SmallContent date="22.01.23" url={cycle01} title="도심 퍼포먼스 테스트" desc="도시 내부와 도시 외곽의 구불구불한 그래블 코스까지 다양한 환경에서 실제 선수가 휠, 바디를 통해 느끼는 진동의 피곤함은 상상을 초월합니다. 경량과 내구성 두 마리의 토끼를 잡기 위해 테스트를 진행합니다." />
                                <SmallContent date="22.01.7" url={cycle02} title="1번은 언제나 선수" desc="모든 사람들에게 맞는 머신은 없습니다. 하지만 단 한명을 위한 머신은 존재합니다. 항상 선수와의 소통, 회의를 통해 최고의 퍼포먼스를 내기 위한 노력을 합니다." />
                                <SmallContent date="21.12.23" url={cycle03} title="In 벨로드롬 TT-bike" desc="최근 벨로드롬에서의 경기의 중요성이 부각되고 있습니다. 이에 맞춰 Team Moon 도 트라이애슬론과 별개로 벨로드롬 전용 TT바이크를 실험하고 있습니다. " />
                                <SmallContent date="21.11.22" url={cycle04} title="TT 공기와의 싸움" desc="투르 드 프랑스, 지로 디 이탈리아 팀 대회 에서도 분명 개인 성적이 중요한 순간이 있습니다. Time Trial 0.1초라도 줄이기 위해 모든 것을 분석합니다." />
                                <SmallContent date="21.11.9" url={cycle05} title="피터 사간 & 다니엘 오스" desc="마지막 500 미터에서, 모든 것은 사라집니다. 고통, 군중, 모든 감정이 존재하지 않습니다. 그 때, 저희중 단 한 명의 사이클리스트가 그 피니쉬 라인을 지나는 것입니다." />
                                <SmallContent date="21.11.9" url={cycle06} title="장인을 위한 최고의 장비" desc="최고의 선수에게는 항상 최고의 장비들이 함께합니다. 이번 Team Moon의 새 장비를 담당해 줄 Specialized 또한 선수들이 믿고 사용 할 수 있는 다양한 제품들을 제공합니다." />
                            </ContentWrap>
                        </>
                    }
                </AnimatePresence>
            </Section>
        </>
    );
}

export default TeamMoon;