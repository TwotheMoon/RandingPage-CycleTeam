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
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const WriteWrap = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 70px 40px;
    border-right: 2px solid rgba(0, 0, 0, 0.2);
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 2px solid rgba(0, 0, 0, 0.2);    
    `;
const InfoContetnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 65px 0px;
    padding-left: 30px;
    div:first-child{
        font-size: 13px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
    }
    p{
        width: 250px;
        margin-left: 30px;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.7);
    }
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
    border: 2px solid rgba(0, 0, 0, 0.2);
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
        },
    },
};
const IconWrap = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    margin-left: 50px;
    cursor: pointer;
    svg{
        width: 20px;
        fill: #F5F5F5;
        margin-left: 20px;
        &:hover{
            fill: #16BFEF;
            transition: 0.2s;
        }
        &:not(:hover){
            fill: white;
            transition: 0.2s;
        }
    }
    svg:nth-child(2){
        width: 12px;
    }
`;

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
                                    <div>FULL SOTRY</div>
                                </SendBtn>
                            </WriteWrap>
                            <InfoWrap>
                                <InfoContetnWrap>
                                    <div>ADDRESS</div>
                                    <p>
                                        1234 Somewhere Road #87257
                                        Nashville, TN 00000-0000
                                    </p>
                                </InfoContetnWrap>
                                <InfoContetnWrap>
                                    <div>PHONE</div>
                                    <p>
                                        (000)000-0000
                                    </p>
                                </InfoContetnWrap>
                                <InfoContetnWrap>
                                    <div>EMAIL</div>
                                    <p>
                                        info@gmail.com
                                    </p>
                                </InfoContetnWrap>
                                <InfoContetnWrap>
                                    <div>SOCIAL</div>
                                    <IconWrap>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                    </IconWrap>
                                </InfoContetnWrap>
                            </InfoWrap>
                        </MessageWrap>
                    </>
                }
            </AnimatePresence>
        </Section>
    );
}

export default ContectUs;