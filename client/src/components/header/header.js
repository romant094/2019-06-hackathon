import React from 'react';
import {Container, Nav, NavItem} from "reactstrap";
import styled from "styled-components";
import ProfileBlock from './profile-block';
import Navbar from "./navbar";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Header = ({logIn, logOut, isLogged, onAuth}) => {
    return (
        <div className='mb-5 mt-3'>
            <Container>
                <Wrapper>
                    <Navbar/>
                    <ProfileBlock logIn={() => onAuth(true)} logOut={() => onAuth(false)} isLogged={isLogged}/>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Header;