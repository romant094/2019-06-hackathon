import React from 'react';
import {Nav, NavItem, Container} from "reactstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ProfileBlock from './profile-block';

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
                    <Nav>
                        <NavItem className='mr-3'>
                            <Link to={'/'}>Start page</Link>
                        </NavItem>
                        <NavItem className='mr-3'>
                            <Link to={'/opened'}>Opened page</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/closed'}>Closed page</Link>
                        </NavItem>
                    </Nav>
                    <ProfileBlock logIn={() => onAuth(true)} logOut={() => onAuth(false)} isLogged={isLogged}/>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Header;