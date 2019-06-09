/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
import React, { Component, useState, createRef } from 'react';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { CookiesProvider } from 'react-cookie';
import { Ref, Popup, TransitionablePortal, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Image, Item, Label, Menu, List, Divider, Segment, Step, Table, Sidebar } from 'semantic-ui-react'
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
//
import createStore from './store/configureStore'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import * as PagesAndComponents from './components'
import './App.css';
import {cols, st} from './styles/style'
import * as Acts from './store/actions/actionsUX'



const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // sidebarVisible: true,
    }
  }

  handleItemClick = (e, { name, to }) => {
    this.props.sidebarClose()
    // browserHistory.push(to)
    this.props.history.push(to)
    this.setState({ activeItem: name })
  }


  render() {
    const {
      sidebarVisible,
    } = this.props


    return (
      <div className="App">


        {/* Menu */}
        <PagesAndComponents.MainMenu history={history}/>



        <TransitionablePortal
          transition={{ animation: 'fade right', duration: 300 }}
          onHide={()=>this.props.sidebarClose()}
          open={sidebarVisible}
        >
          {/*<Segment*/}
            {/*fluid borderless*/}
            {/*style={{ width: '200px', right: '0%', position: 'fixed', top: '3em', zIndex: 1000, padding:'0em' }}*/}
          {/*>*/}
            <Menu vertical style={{...{ height: '100%', width: '250px', left: '0%', position: 'fixed', top: '2em', zIndex: 1000, padding:'0em', borderRadius: '0' }}}>
              <Menu.Item
                as='a'
                style={{}}
                // onClick={()=>this.props.sidebarClose()}
              >
                <PagesAndComponents.ModalEnter/>
              </Menu.Item>
              <Menu.Item
                as='a'
                style={{}}
                // onClick={()=>this.props.sidebarClose()}
              >
                <PagesAndComponents.ModalReg/>
              </Menu.Item>
            </Menu>
          {/*</Segment>*/}
        </TransitionablePortal>



        <Route render={({location}) => (
          <Switch location={location}>
            <Route exact path='/' component={PagesAndComponents.MainPage}/>
            <Route path='/cabinet' component={PagesAndComponents.CabinetPage}/>
            <Route path='*' component={PagesAndComponents.Page404}/>
          </Switch>
        )} />
        {/* Footer */}
        {/*<PagesAndComponents.Footer/>*/}



      </div>
    );
  }
}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
  // console.log('App mapStateToProps',state)
  return {
    sidebarVisible: state.sidebarOpenClose.sidebarVisible,
    sidebarOpened: state.sidebarOpenClose.sidebarOpened,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    sidebarToggle: (items) => dispatch(Acts.sidebarToggle()),
    sidebarOpen: (items) => dispatch(Acts.sidebarOpen()),
    sidebarClose: (items) => dispatch(Acts.sidebarClose()),
    sidebarClosed: (items) => dispatch(Acts.sidebarClosed()),
  };
}


export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App));


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
