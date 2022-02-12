import styled from "styled-components";

import teamMoon01 from "./img/TeamMoon01.jpg";

const Section = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    max-width: 1500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'GmarketSansMedium';
`;
const DateWrap = styled.div`
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
const HeaderWrap = styled.div`
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
function AboutUs() {

    return (
        <Section>
            <DateWrap>
                <Hr />
                <DateText>2022.02.15</DateText>
            </DateWrap>
            <HeaderWrap>
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
        </Section>
    );
}

export default AboutUs;