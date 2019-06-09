/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
import _ from 'lodash'
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import {st} from '../styles/style'
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  render() {
    const { activeIndex, } = this.state

    return (
      <Segment
        vertical
        style={{ margin: '0em 0em 0em', padding: '5em 0em 2em', backgroundColor: '#333135' }}
      >


        <Container textAlign="center">

          <Divider inverted section />
          {/*<Image centered size='tiny' src='/logo.png' />*/}
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>


        </Container>
      </Segment>
    )

  }



}




/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
export default Footer