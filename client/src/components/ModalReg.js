/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
import React, { Component } from 'react';
import { Button, Divider, Checkbox, Container, Dropdown, Form, Grid, Header, Dimmer, Icon, Image, Item, Label, Card, Modal, Menu, Segment, Step, Table } from 'semantic-ui-react'
//
import {cols, st} from '../styles/style'
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
class ModalReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTickets: [],
    };
    this.dateToLocal = this.dateToLocal.bind(this)
  }
  //
  render() {
    const {
      gate,
    } = this.props

    return (

      <Modal
        style={{maxWidth:'50em'}}
        trigger={<div style={{}}>Зарегистрироваться</div>}
      >
        <Modal.Header>Регистрация</Modal.Header>
        <Modal.Content>
          <Form centered stackable>
            <Form.Group widths='equal' centered>
              <Button.Group fluid centered>
                <Button color='blue' basic style={{paddingLeft:'0.25em',paddingRight:'0.25em'}}>
                  <Icon name='vk' /> VK
                </Button>
                <Button color='blue' basic style={{paddingLeft:'0.25em',paddingRight:'0.25em'}}>
                  <Icon name='facebook' /> Facebook
                </Button>
                <Button color='red' basic style={{paddingLeft:'0.25em',paddingRight:'0.25em'}}>
                  <Icon name='google plus' /> Google
                </Button>
              </Button.Group>
            </Form.Group>
            <Divider horizontal>ИЛИ</Divider>
            <Form.Field>
              <label>Логин</label>
              <input placeholder='Логин' />
            </Form.Field>
            <Form.Field>
              <label>Пароль</label>
              <input type="password" placeholder='Пароль' />
            </Form.Field>
            <Form.Field>
              <label>Повторите пароль</label>
              <input type="password" placeholder='Повторите пароль' />
            </Form.Field>
            <Form.Field>
              <Checkbox label={
                <label>Я согласен с условиями</label>
              } />
            </Form.Field>
            <Form.Field style={{textAlign:'center'}}>
              <Button
                basic color='teal'
                style={{width:'20em'}}
                type='submit'
              >Зарегистрироваться</Button>
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>

    )
  }

  dateToLocal = (d) => {
    var dateOpts = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(d).toLocaleDateString('ru-RU',dateOpts)
  }
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
export default ModalReg