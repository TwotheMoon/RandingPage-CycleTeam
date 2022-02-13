import styled from "styled-components";
import ReactPlayer from 'react-player'

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
const HeaderVideoWrap = styled.div`
    margin-top: 50px;
    max-width: 100%;
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
const Descript = styled.p`
    margin-top: 30px;
    line-height: 35px;
    color: #666;
    @media screen and (max-width: 500px){
        font-size: 12px;
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
                <h1>We are Team Moon</h1>
                <p>
                    도로 사이클 역사에 가장 많은 승리를 한 팀<br />
                    최근 보라-한스그로헤 로부터 이적한 피터 사간과 <br />
                    2022년 3대 투어의 그랜드 슬램을 위해 언제나 달리고 있습니다. <br />
                </p>
                <HeaderVideoWrap>
                    <ReactPlayer
                        className='react-player'
                        url={[
                            'https://www.youtube.com/watch?v=Gm9waGAoK-I',
                            'https://www.youtube.com/watch?v=lGWu2MrABeE',
                        ]}
                        playing={true}
                        muted={true}
                        controls={false}
                        light={false}
                        style={{ maxWidth: '100%', height: 'auto', zIndex: 1 }}
                    />
                </HeaderVideoWrap>
                <Descript>
                    2022년 투르 드 프랑스의 코스가 정식 프레젠테이션과 함께 공개되었습니다. <br />
                </Descript>
            </HeaderWrap>
        </Section>
    );
}

export default AboutUs;