/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
/*eslint-disable array-callback-return*/
import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'semantic-ui-css/semantic.min.css'
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { withCookies } from 'react-cookie';
//
import {cols, st} from '../../styles/style'
import * as PagesAndComponents from '../'
import * as Acts from '../../store/actions/actionsMain'
import * as ActsUX from '../../store/actions/actionsUX'
import configureStore from '../../store/configureStore'

const store = configureStore()
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: '',
      datesRange: '',
      passengers: 1,
      activeIndex: 0,
      items: 'items',
    };
    this.getPrices = this.getPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  handleClickBtn = async () => {
    await this.props.getPrices(this.state)
    console.log('Button',this.props)
  }
  //
  render() {
    const {
      allTickets,
      origin,
      destination,
      dateBack,
      dateFront,
      passengers,
      activeIndex,
      ticketType,
      userName,
    } = this.state

    return (
      <div className="App-body" style={{}}>


        <Container style={{padding:'5em', margin:'1em'}}>


          <Card.Group centered>

            <Card
              href='/'
              style={{...st.bgImageCard}}
            >
              <Card.Content>
                <Card.Header style={{...{color:'white'},...st.tar}}>Выбрать ВУЗ и подать документы онлайн</Card.Header>
                <Card.Description style={st.w}>

                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Card.Header style={{...st.w,...st.tal}}></Card.Header>
              </Card.Content>
              <Card.Content extra>
              </Card.Content>
            </Card>


            <Card
              href='/'
              style={{...st.bgImageCard}}
            >
              <Card.Content>
                <Card.Header style={{...{color:'white'},...st.tar}}>Где можно учиться по обмену</Card.Header>
              </Card.Content>
            </Card>

            <Card
              href='/'
              style={{...st.bgImageCard}}
            >
              <Card.Content>
                <Card.Header style={{...{color:'white'},...st.tar}}>Университеты Санкт-Петербурга</Card.Header>
                <Card.Description style={st.w}>

                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Card.Header style={{...st.w,...st.tal}}></Card.Header>
              </Card.Content>
              <Card.Content extra>
              </Card.Content>
            </Card>

          </Card.Group>
          <Button
            style={{...st.btnShadow, ...st.txtShadow2,...{marginTop: '1em'}}}
            content='Еще варианты'
            color='teal' fluid
            // onClick={this.handleClickBtn()}
          />

        </Container>



      </div>
    );
  }


  getPrices = async () => {
    var link = ``
    fetch(link)
      .then(res => res.json())
      .then(users => this.setState({allTickets:users}));
  }



  handleChange = (e,n) => {
    var o = {}
    o[n] = e.target.value
    this.setState(o);
  }


  handleChangeCalendar = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  dateToLocal = (d) => {
    var dateOpts = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(d).toLocaleDateString('ru-RU',dateOpts)
  }

  componentWillMount = async () => {
    // let { dispatch } = this.props
    // this.props.getPrices(this.state)
    // this.props.getPricesRes('cascasc')
    await this.props.getPrices(this.state)
    this.setState({allTickets:this.props.items})
    // let tickets1 = await dispatch(Acts.getPrices(this.state))
    console.log('componentWillMount props',this.props)
    // console.log('componentWillMount store',this.props.items)
    // console.log('componentWillMount tickets',tickets)
    // console.log('componentWillMount store',store.getState())
    // console.log('componentWillMount tickets1',tickets1)
    // console.log('componentWillMount state',this.state)
    // this.setState({allTickets:tickets})
    // console.log('cookies before',this.props.cookies)
    // this.props.cookies.set('name', 'Boris', { path: browserHistory.getCurrentLocation().pathname })
    // console.log('cookies after',this.props.cookies.get('name'))
    if (this.props.cookies.get('name')) this.setState({userName:this.props.cookies.get('name')})
  }

}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


const mapStateToProps = (state) => {
  // console.log('MainMenu mapStateToProps',state)
  return {
    items: state.getPricesRes.items,
    sidebarVisible: state.sidebarOpenClose.sidebarVisible,
    sidebarOpened: state.sidebarOpenClose.sidebarOpened,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getPrices: (items) => dispatch(Acts.getPrices(items)),
    sidebarToggle: () => dispatch(ActsUX.sidebarToggle()),
    sidebarClose: () => dispatch(ActsUX.sidebarClose()),
    sidebarOpen: () => dispatch(ActsUX.sidebarOpen()),
  };
}



export default withCookies(connect(mapStateToProps, mapDispatchToProps)(MainPage));


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////








