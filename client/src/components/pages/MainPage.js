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
      filter: '',
      cards: [
          {
            id: 1,
            type: 'mat',
            text: 'Материал 1'
          },
          {
            id: 2,
            type: 'izb',
            text: 'Избранное 1'
          },
          {
            id: 3,
            type: 'rec',
            text: 'Рекомендация 2'
          },
          {
            id: 4,
            type: 'rec',
            text: 'Рекомендация 3'
          },
          {
            id: 5,
            type: 'mat',
            text: 'Материал 2'
          },
          {
            id: 6,
            type: 'mat',
            text: 'Материал 3'
          },
          {
            id: 7,
            type: 'izb',
            text: 'Избранное 3'
          }
      ]
    };
    this.getPrices = this.getPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const cards = this.state.cards.map(item=>(
        <Card key={item.id}>
          <Card.Content>
            <Card.Header>
              {item.text}
            </Card.Header>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, totam?
            </Card.Description>
          </Card.Content>
        </Card>
    ));

    return (
        <div style={{paddingTop: '70px'}}>
          <Container>
            <Grid>
              <Grid.Row>
                <Button>Все</Button>
                <Button>Материалы и программы</Button>
                <Button>Избранное</Button>
                <Button>Рекомендации</Button>
              </Grid.Row>
            </Grid>
          </Container>
          <Container>
            <Grid>
              <Grid.Row columns={3}>
                {cards}
              </Grid.Row>
            </Grid>
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
}

const oldMainPage = () => {
  return(
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
  )
};


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








