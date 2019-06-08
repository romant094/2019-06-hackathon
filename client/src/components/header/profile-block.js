import React from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';
// import profileLogo from './images/profile-logo.png'

const Wrapper = styled.div`
    display: flex
    align-items: center;
`;

// const Logo = styled.img`
//     max-width: 40px;
//     max-height: 40px;
//     display: block;
//     margin-right: 10px;
// `;

const ProfileBlock = ({logIn, logOut, isLogged}) => {
    return (
        <Wrapper>
            {/*<Logo src={profileLogo} alt="img"/>*/}
            {
                isLogged
                    ? <Button color='primary'
                              onClick={logOut}>
                        log out
                    </Button>
                    : <Button color='primary'
                              onClick={logIn}>
                        log in
                    </Button>
            }
        </Wrapper>
    );
};

export default ProfileBlock;