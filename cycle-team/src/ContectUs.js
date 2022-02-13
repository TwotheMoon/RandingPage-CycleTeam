import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.div`
    background-color: white;
    width: 100%;
    height: auto;
    max-width: 1200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'GmarketSansMedium';
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
const MessageWrap = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const WriteWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 70px 40px;
    border-right: 3px solid rgba(0, 0, 0, 0.2);
`;
const InputWrap = styled.div`
    width: 100%;
    div{
        display: flex;
        margin-bottom: 20px;
        font-size: 13px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
    }
    input{
        background-color: #F5F5F5;
        width: 100%;
        height: 45px;
        border: 3px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
    }
    textarea{
        background-color: #F5F5F5;
        width: 100%;
        min-height: 140px;
        border: 3px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        resize: none;
    }
`;
const InfoWrap = styled.div`
`;
const SendBtn = styled.div`
    max-width: auto;
    height: auto;
    padding: 15px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    border: 3px solid rgba(0, 0, 0, 0.2);
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

function ContectUs({ num }) {

    return (
        <Section>
            <AnimatePresence>
                {num === 3 &&
                    <>
                        <HeaderWrap
                            variants={fadeInVariants}
                            initial="start"
                            animate="animate"
                        >
                            <h1>Contect Us</h1>
                            <p>
                                Team Moon에게 궁금하신게 있으신가요? <br />
                                언제든 메일을 보내주세요
                            </p>
                        </HeaderWrap>
                        <MessageWrap
                            variants={fadeInVariants}
                            initial="start"
                            animate="animate"
                        >
                            <WriteWrap>
                                <InputWrap>
                                    <div>NAME</div>
                                    <input />
                                </InputWrap>
                                <InputWrap>
                                    <div>EMAIL</div>
                                    <input />
                                </InputWrap>
                                <InputWrap>
                                    <div>MESSAGE</div>
                                    <textarea />
                                </InputWrap>
                                <SendBtn>
                                    <span>FULL SOTRY</span>
                                </SendBtn>
                            </WriteWrap>
                            <InfoWrap>
                                <div>address</div>
                                <div>sdklfjskdfjl</div>
                            </InfoWrap>
                        </MessageWrap>
                    </>
                }
            </AnimatePresence>
        </Section>
    );
}

export default ContectUs;