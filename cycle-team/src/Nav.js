import { useState } from "react";
import styled from "styled-components";
import TeamMoon from "./TeamMoon";
import AboutUs from "./AboutUs";
import Reference from "./Reference";

const Section = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    
`;
const NavBar = styled.div`
    margin: 0 auto;
    max-width: 1500px;
    height: 65px;
    background-color: rgba(67, 74, 78, 0.9);
    display: flex;
    font-family: 'GmarketSansMedium';
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    @media screen and (max-width: 500px){
        height: 40px;
    }
    `;
const Menu = styled.div`
    width: 250px;
    background-color: ${props => props.menuIndex === props.num ? "white" : "transpart"};
    color: ${props => props.menuIndex === props.num ? "black" : "white"};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        transition: 0.2s;
        color: ${props => props.menuIndex === props.num && "#16BFEF"} ;
    }
    &:not(:hover){
        transition: 0.2s;
        color: ${props => props.menuIndex === props.num && "black"} ;
    }
`;

function Nav() {
    const [menuIndex, setMenuIndex] = useState(1);

    return (
        <>
            <Section>
                <NavBar>
                    <Menu onClick={() => setMenuIndex(1)} menuIndex={menuIndex} num={1}>Team Moon</Menu>
                    <Menu onClick={() => setMenuIndex(2)} menuIndex={menuIndex} num={2}>About us</Menu>
                    <Menu onClick={() => setMenuIndex(3)} menuIndex={menuIndex} num={3}>Reference</Menu>
                </NavBar>
            </Section>
            {menuIndex == 1 && <TeamMoon />}
            {menuIndex == 2 && <AboutUs />}
            {menuIndex == 3 && <Reference />}
        </>
    );
}

export default Nav;