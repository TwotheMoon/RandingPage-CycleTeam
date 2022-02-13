import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    min-height: 100px;
    max-width: 1500px;
    background-color: rgba(67, 74, 78, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
const Content = styled.span`
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
    @media screen and (max-width: 500px) {
        font-size: 1px;
    }
`;
function Footer() {
    return (
        <Section>
            <Content>&copy; 2THEMOON &nbsp;|&nbsp; DESIGN: STYLED-COMPONENT &nbsp;|&nbsp; DEMO IMAGES: PIXABAY</Content>
        </Section>

    );
}

export default Footer;