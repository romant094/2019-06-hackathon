import React from 'react';
import logo from './images/main-logo.png';
import {FlexWrapper} from "../elements";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Title = styled(Link)`
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #000;
    
    &:hover{
        color: #000;
        text-decoration:none;
    }
`;



const LogoTitle = () => {
    return (
        <FlexWrapper>
            <Title to='/'>
                <img src={logo} alt="logo" className='mr-1'/>
                <span className='mr-3'>в ВУЗ онлайн</span>
            </Title>
        </FlexWrapper>
    );
};

export default LogoTitle;