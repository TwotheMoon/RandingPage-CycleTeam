import styled from "styled-components";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 40px 30px;
`;
const Date = styled.h1`

`;
const Title = styled.h1`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
`;
const ImgBox = styled.div`
    width: auto;
    height: auto;
    overflow: hidden;
    margin-top: 30px;
`;
const Img = styled.img`
    max-width: 100%;
    height: auto;
    transform: scale(1);
    transition: 0.2s;
    &:hover{
        transform: scale(1.05);
        transition: 0.2s;
    }
`;
const Desc = styled.p`
    margin-top: 30px;
    color: #666;
    font-size: 15px;
`;
const Btn = styled.div`
    max-width: auto;
    height: auto;
    border: 2px solid black;
    padding: 10px 25px;
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
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

function SmallContent({ date, url, title, desc }) {

    return (
        <Section>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <ImgBox>
                <Img src={url} />
            </ImgBox>
            <Desc>{desc}</Desc>
            <Btn>FULL STORY</Btn>
        </Section>
    );
}

export default SmallContent;