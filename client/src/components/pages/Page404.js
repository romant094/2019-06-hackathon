/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
/*eslint-disable array-callback-return*/
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Dropdown, Form, Grid, Header, Dimmer, Icon, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';
import {cols, st} from '../../styles/style'
import * as PagesAndComponents from '../'

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


class Page404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTickets: [],
      time: '',
      dateTime: '',
      datesRange: '',
    };
    this.getPrices = this.getPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //
  render() {
    const {
      allTickets,
    } = this.state

    return (
      <div className="App-body" >



        <div style={{...st.bgImage,...{padding:'3em 2em'}}} fluid="true">




          <Header
            as='h2'
            content='404'
            style={{...st.h3, ...{color: 'white'},...st.txtShadowH}} textAlign='center'
          />


          <Header
            as='h3'
            content='Такой страницы нет'
            style={{...st.h3, ...{color: 'white'},...st.txtShadowH}} textAlign='center'
          />



        </div>




        {/* Footer */}
        <PagesAndComponents.Footer/>



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
    var dateOpts = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(d).toLocaleDateString('ru-RU',dateOpts)
  }

  componentWillMount = () => {

  }
}




export default Page404