/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
import _ from 'lodash'
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { withRouter } from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux';
import { Button, Container, Visibility, Dropdown, Form, Grid, Header, Dimmer, Icon, Image, Item, Label, Card, Menu, Segment, Step, Table } from 'semantic-ui-react'
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';

//
import configureStore from '../store/configureStore';
import {cols, st} from '../styles/style'
import * as PagesAndComponents from './'
import * as Acts from '../store/actions/actionsUX'
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)




/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      menuFixed: false,
      overlayFixed: false,
      isMobile: window.innerWidth <= 600,
      userName: '',
    }
  }


  handleOverlayRef = (c) => {
    const { overlayRect } = this.state
    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })
  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickOverlay = () => this.setState({ overlayFixed: false })
  unStickTopMenu = () => this.setState({ menuFixed: false })

  handleItemClick = (e, { name, to }) => {
    // browserHistory.push(to)
    this.props.history.push(to)
    this.setState({ activeItem: name })
  }

  updateWindowWidth() {
    if(window.innerWidth < 600) {
      this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight, isMobile:true });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ windowWidth: update_width, windowHeight: update_height, isMobile: false });
    }
  }


  componentWillMount = () => {
    const {cookies} = this.props
    if (cookies.get('name')) this.setState({userName:cookies.get('name')})
  }


  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth.bind(this));
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth.bind(this));
  }


  render() {

    const { isMobile } = this.state

    if (isMobile) {
      return (this.htmlForDesktop())
    } else {
      return (this.htmlForDesktop())
    }

  }



  htmlForDesktop = () => {
    const {
      menuFixed,
    } = this.state
    const {
      sidebarVisible,
      sidebarOpened,
    } = this.props


    return (

      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >

        {/*TODO: mobile: hide dropdown after touch*/}
        <Menu
          borderless
          // fixed={menuFixed ? 'top' : undefined}
          fixed={'top'}
          // style={menuFixed ? fixedMenuStyle : menuStyle}
          style={fixedMenuStyle}
        >
          {/*<Container text>*/}
          <Menu.Item
            as='a'
            style={st.w}
            onClick={async ()=>{
              // if (!sidebarOpened) {
              await this.props.sidebarOpen()
              // }
              console.log(this.props.sidebarVisible)
            }}
          >
            <Icon name='bars' />
          </Menu.Item>
          <Menu.Item style={{...st.w,...{paddingTop:'0em',paddingBottom:'0em'}}}>
            <Image size='mini' src='/logo.png'/>
            В ВУЗ онлайн
          </Menu.Item>
          {/*<Menu.Item header>Project Name</Menu.Item>*/}
          <Menu.Item
            as='a' to="/" style={st.w}
            onClick={this.handleItemClick}
          >
            Высшее образование
          </Menu.Item>
          <Menu.Item
            as='a' to="/cabinet" style={st.w}
            onClick={this.handleItemClick}
          >
            Кабинет
          </Menu.Item>

          <Menu.Menu position='right'>

            {/*<Menu.Item*/}
              {/*as='a' to="/cabinet" style={st.w}*/}
              {/*onClick={this.handleItemClick}*/}
            {/*>*/}
              {/*Кабинет*/}
            {/*</Menu.Item>*/}
          </Menu.Menu>
          {/*</Container>*/}
        </Menu>
      </Visibility>

    )
  }


}



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
const menuStyle = {
  backgroundColor: '#333135',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  // color: 'white',
  // marginBottom: '1em',
  // marginTop: '4em',
  // transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#333135',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  zIndex: 999,
  // border: '1px solid #ddd',
  // boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
}




/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
  // console.log('MainMenu mapStateToProps',state)
  return {
    sidebarVisible: state.sidebarOpenClose.sidebarVisible,
    sidebarOpened: state.sidebarOpenClose.sidebarOpened,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    sidebarToggle: () => dispatch(Acts.sidebarToggle()),
    sidebarClose: () => dispatch(Acts.sidebarClose()),
    sidebarOpen: () => dispatch(Acts.sidebarOpen()),
  };
}



export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(MainMenu)));


// export default withCookies(withRouter(MainMenu))


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

