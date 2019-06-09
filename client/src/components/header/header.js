import React, {Component} from 'react';
import {Container} from "reactstrap";
import ProfileBlock from './profile-block';
import Navbar from "./navbar";
import {FlexWrapper,FlexWrapperStart} from "../elements/elements";
import LogoTitle from "./logo-title";
import SideModal from "./side-modal";
import burger from './images/burger.png';
import styled from 'styled-components';


const Burger = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url(${burger});
  cursor: pointer;
`;

export default class Header extends Component {
    state = {
        collapsed: false
    };

    toggleNavbar = () => {
        this.setState(state => ({
            collapsed: !state.collapsed
        }))
    };

    onCloseModal = () => {
        this.toggleNavbar();
    };

    render() {
        const {isLogged, onAuth} = this.props;
        return (
            <div className='mb-5 mt-3'>
                <Container fluid>
                    <FlexWrapper>
                        <FlexWrapperStart>
                            <Burger className='mr-3' onClick={this.toggleNavbar}/>
                            <LogoTitle className='mr-3'/>
                            <Navbar/>
                        </FlexWrapperStart>
                        <ProfileBlock logIn={() => onAuth(true)}
                                      logOut={() => onAuth(false)}
                                      isLogged={isLogged}/>
                    </FlexWrapper>
                </Container>
                {this.state.collapsed ? <SideModal onCloseModal={this.onCloseModal}/> : null}
            </div>
        )
    }
}