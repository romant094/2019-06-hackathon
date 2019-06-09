/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
/*eslint-disable array-callback-return*/
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Checkbox, Dropdown, Form, Grid, Header, Dimmer, Icon, Image, Card, Input, Item, Search, Label, Tab, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';
import { withCookies } from 'react-cookie';
//
import {cols, st} from '../../styles/style'
import * as PagesAndComponents from '../'
import styled from 'styled-components';

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/*
TODO:

 */

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const CustomCard = styled(Card)`
  height: 100%;
  text-align: center;
  
  .content{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

class CabinetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      dateTime: '',
      datesRange: '',
      userName: '',
      loading: true,
      logged: false,
      signUpHtml: false,
      isLoading: false,
      personalInfo: {
        name: null,
        gender: null,
        birthday: null,
        birthPlace: null,
        country: null,
        addressLiving: null,
        addressReg: null,
        passport: null
      }
    };
    this.getPrices = this.getPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toSignUp = this.toSignUp.bind(this);
  }

  fillData = () => {
    const personalInfo = {
      name: 'Константинопольский Константин Николаевич',
      gender: 'Мужской',
      birthday: '15.12.1990',
      birthPlace: 'Ленинград',
      country: 'Россия',
      addressReg: 'Санкт-Петербург, Дальневосточный проспект, 76 к1, кв. 906',
      addressLiving: 'Москва, Ленинградское шоссе, 45, кв.3',
      passport: 'Паспорт гражданина РФ 4005 150847 Выдан 71 отделом милиции Петроградского района, Санкт-Петербург, код подразделения 782071, дата выдачи 25.05.2004'
    };

      this.setState({isLoading:true});
    setTimeout(()=>{
      this.setState({personalInfo, isLoading:false});
    },2000);
  };
  //
  render() {
      // const {name, gender, birthday, birthPlace, country, addressReg, addressLiving, doc: {type,series, number,dateOfIssue,info}} = this.state;
    const panes = [
      {
        menuItem: 'Поступление',
        pane: {
          key: 'tab1',
          content: (
              <Container>
                <Input size='large' icon='search' placeholder='Поиск учебного заведения по названию или направлению...' style={{width:'60em'}}/>


                <Container style={{padding: '2em'}}>
                  <Card.Group>
                    <Card>
                      <Image src='/img/Rectangle8.png' wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Университеты Москвы</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src='/img/Rectangle81.png' wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Университеты Санкт-Петербурга</Card.Header>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Image src='/img/Rectangle82.png' wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Университеты Екатеринбурга</Card.Header>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Container>


              </Container>
          )
        }
      },
      {
        menuItem: 'Мои данные',
        pane: {
          key: 'tabMyData',
          content: (
              <Grid>
                <Grid.Row stretched width="equal" fluid>

                </Grid.Row>
                <Grid.Row stretched width="equal" fluid>
                  <Grid.Column width={8}>
                    <Segment fluid style={{width:'100%', borderRadius:'20px'}}>

                      <Grid fluid style={{width:'100em'}}>
                        <Grid.Row stretched width="equal"style={{width:'100%'}} fluid>
                          <Grid.Column width={4}>
                            <Container>
                              <Header as='h2'>Основная информация</Header>
                            </Container>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <Container>
                              <Button size="small" basic>Редактировать</Button>
                            </Container>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                          <Grid.Column width={16}>

                            <Container fluid>
                              <Table basic='very' collapsing fluid style={{width:'50em'}}>
                                <Table.Body>
                                  <Table.Row>
                                    <Table.Cell>
                                      <Header as='h4' image>
                                        <Header.Content>
                                          ФИО
                                        </Header.Content>
                                      </Header>
                                    </Table.Cell>
                                    <Table.Cell>{this.state.personalInfo.name}</Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell>
                                      <Header as='h4' image>
                                        <Header.Content>
                                          Пол
                                        </Header.Content>
                                      </Header>
                                    </Table.Cell>
                                    <Table.Cell>{this.state.personalInfo.gender}</Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell>
                                      <Header as='h4' image>
                                        <Header.Content>
                                          Дата рождения
                                        </Header.Content>
                                      </Header>
                                    </Table.Cell>
                                    <Table.Cell>{this.state.personalInfo.birthday}</Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell>
                                      <Header as='h4' image>
                                        <Header.Content>
                                          Место рождения
                                        </Header.Content>
                                      </Header>
                                    </Table.Cell>
                                    <Table.Cell>{this.state.personalInfo.birthPlace}</Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell>
                                      <Header as='h4' image>
                                        <Header.Content>
                                          Гражданство
                                        </Header.Content>
                                      </Header>
                                    </Table.Cell>
                                    <Table.Cell>{this.state.personalInfo.country}</Table.Cell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell>
                                      <Header as='h4' image>
                                        <Header.Content>
                                          Документ, подтверждающий личность
                                        </Header.Content>
                                      </Header>
                                    </Table.Cell>
                                    <Table.Cell>{this.state.personalInfo.passport}</Table.Cell>
                                  </Table.Row>
                                </Table.Body>
                              </Table>


                            </Container>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                      <Button onClick={this.fillData}>Синхронизировать данные с Госуслугами</Button>
                        {this.state.isLoading ? 'Идет загрузка данных': null}

                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Segment style={{width:'100%', borderRadius:'20px', padding: '2em'}}>
                      <Grid fluid style={{width:'100em'}}>
                        <Grid.Row stretched width="equal"style={{width:'100%'}} fluid>
                          <Grid.Column width={4}>
                            <Container>
                              <Header as='h2'>Контактные данные</Header>
                            </Container>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <Container>
                              <Button size="small" basic>Редактировать</Button>
                            </Container>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row stretched width="equal"style={{width:'100%'}} fluid>

                          <Table basic='very' collapsing fluid style={{width:'50em'}}>
                            <Table.Body>
                              <Table.Row>
                                <Table.Cell>
                                  <Header as='h4' image>
                                    <Header.Content>
                                      Электронная почта
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                                <Table.Cell>mysupermail@mail.com</Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <Header as='h4' image>
                                    <Header.Content>
                                      Телефон
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                                <Table.Cell>+7 812 456-78-90</Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <Header as='h4' image>
                                    <Header.Content>
                                      Адрес регистрации
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.personalInfo.addressReg}</Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>
                                  <Header as='h4' image>
                                    <Header.Content>
                                      Адрес проживания
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.personalInfo.addressLiving}</Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                    <Segment style={{width:'100%', borderRadius:'20px'}}>
                      <Header as='h2'>Подтверждение учетных данных</Header>
                      <Icon name='check' size='big' color="green"/>
                      У Вас подтвержденная учетная запись
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

          ),
          size: 'massive'
        }
      },
      {
        menuItem: 'Мои документы',
        pane: {
          key: 'tab2',
          content: (
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Segment style={{width:'100%', borderRadius:'20px'}}>
                      <Card.Group>
                        <Card style={{}}>
                          <Icon name='plus' size='huge' color="green" style={{height:'290px',paddingTop:'100px', paddingLeft:'40%'}}/>
                        </Card>
                        <Card style={{border:'0px'}}>
                          <Image src='/img/Group2.png' wrapped ui={false} />
                        </Card>
                        <Card>
                          <Image src='/img/Group3.png' wrapped ui={false} />
                        </Card>
                        <Card>
                          <Image src='/img/Group4.png' wrapped ui={false} />
                        </Card>
                      </Card.Group>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
          ),
          textAlign: 'center'
        },
      },
      {
        menuItem: 'Мои достижения',
        pane: {
          key: 'tab3',
          content: (
              <div>
                <Container>
                  <Grid>
                    <Grid.Row columns={4} className='equal height'>
                      <Grid.Column>
                        <CustomCard>
                          <Card.Content>
                            <Card.Description style={{marginBottom: '10px'}}>
                              Ваш общий балл ЕГЭ
                            </Card.Description>
                            <Card.Header>
                              <Header as='h1'>
                                389
                              </Header>
                            </Card.Header>
                            <Card.Description>
                              <Dropdown text='Расшифровка' style={{marginBottom: '10px'}}>
                                <Dropdown.Menu>
                                  <Dropdown.Item text='Математика' description='20'/>
                                  <Dropdown.Item text='Физика' description='14'/>
                                  <Dropdown.Item text='Химия' description='41'/>
                                  <Dropdown.Item text='Русский язык' description='17'/>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Card.Description>
                            <Card.Description>
                              <Button>Подать документы</Button>
                            </Card.Description>
                          </Card.Content>
                        </CustomCard>
                      </Grid.Column>
                      <Grid.Column>
                        <CustomCard>
                          <Card.Content>
                            <Card.Description style={{marginBottom: '10px'}}>
                              Вы подали заявления в
                            </Card.Description>
                            <Card.Header>
                              <Header as='h1'>
                                4
                              </Header>
                            </Card.Header>
                            <Card.Description style={{marginBottom: '10px'}}>
                              ВУЗа <br/> на
                            </Card.Description>

                            <Card.Header>
                              <Header as='h1'>
                                20
                              </Header>
                            </Card.Header>
                            <Card.Description style={{marginBottom: '10px'}}>
                              специальностей
                            </Card.Description>
                            <Card.Description>
                              <Button>Подать еще</Button>
                            </Card.Description>
                          </Card.Content>
                        </CustomCard>
                      </Grid.Column>
                      <Grid.Column>
                        <CustomCard>
                          <Card.Content>
                            <Card.Description style={{marginBottom: '10px'}}>
                              У вас
                            </Card.Description>
                            <Card.Header>
                              <Header as='h1'>
                                20
                              </Header>
                            </Card.Header>
                            <Card.Description style={{marginBottom: '10px'}}>
                              медалей
                            </Card.Description>
                            <Card.Header>
                              <Header as='h1'>
                                4
                              </Header>
                            </Card.Header>
                            <Card.Description style={{marginBottom: '10px'}}>
                              грамоты
                            </Card.Description>
                            <Card.Description>
                              <Button>Добавить</Button>
                            </Card.Description>
                          </Card.Content>
                        </CustomCard>
                      </Grid.Column>
                      <Grid.Column>
                        <CustomCard>
                          <Card.Content>
                            <Card.Description style={{marginBottom: '10px'}}>
                              Ваш рейтинг
                            </Card.Description>
                            <Card.Header>
                              <Header as='h1'>
                                8
                              </Header>
                            </Card.Header>
                            <Card.Description style={{marginBottom: '10px'}}>
                              из 10
                            </Card.Description>
                            <Card.Description>
                              <Button>Как повысить?</Button>
                            </Card.Description>
                          </Card.Content>
                        </CustomCard>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Container>
              </div>
          ),
        },
      },
      {
        menuItem: 'Расчет рентабельности образования',
        pane: (
            <Tab.Pane key='tab4'>
              <p>This tab has a complex content</p>

              <List>
                <List.Item>Apples</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
              </List>
            </Tab.Pane>
        ),
      },
      {
        menuItem: 'Траектория развития',
        pane: (
            <Tab.Pane key='tab5'>
              <p>This tab has a complex content</p>

              <List>
                <List.Item>Apples</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
              </List>
            </Tab.Pane>
        ),
      },
    ];

    const {
      logged,
      loading,
    } = this.state;

    return (
      <div className="App-body">

        <div style={{...{padding: '5em 2em'}}} fluid>





          {/* Cabinet */}


            <div>
              {/*<PagesAndComponents.ModalEnter style={st.w}/>*/}
              {/*<PagesAndComponents.ModalReg style={st.w}/>*/}
              <Container fluid style={{padding:'2em'}}>
                <Grid columns={6}>
                  <Grid.Row>
                    <Grid.Column>
                      <Image src='img/ava.png' size='small' circular />
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h3'>
                        Константинопольский <br/> Константин <br/> Николаевич
                      </Header>
                      <p>
                        15.12.1990
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment style={{borderRadius:'20px', backgroundColor:'#eee', textAlign:'center'}}>
                        <Header as='h4'>
                          Всего подано заявок
                        </Header>
                        <p>
                          <span style={{fontSize:'2em'}}>20</span> в <span style={{fontSize:'1.8em'}}>4</span> ВУЗа
                        </p>
                        <Container>
                          <Icon name='star' color="yellow"/>
                          5 в избранном
                        </Container>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment style={{borderRadius:'20px', backgroundColor:'#eee', textAlign:'center'}}>
                        <Header as='h4'>
                          Откликов
                        </Header>
                        <p>
                          <span style={{fontSize:'2em'}}>9</span>
                        </p>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment style={{borderRadius:'20px', backgroundColor:'#eee', textAlign:'center'}}>
                        <Header as='h4'>
                          Отказов
                        </Header>
                        <p>
                          <span style={{fontSize:'2em'}}>4</span>
                        </p>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment style={{borderRadius:'20px', backgroundColor:'#eee', textAlign:'center'}}>
                        <Header as='h3'>
                          Общий балл ЕГЭ
                        </Header>
                        <p>
                          <span style={{fontSize:'2.5em', color:'#00b003'}}>389</span>
                        </p>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>


              <Tab panes={panes}  renderActiveOnly={false}  style={{width:'100%', borderRadius:'20px'}}/>





            </div>

        </div>

      </div>
    );

  }








  toSignUp = () => {
    browserHistory.push('/cabinet/sign')
    this.setState({signUpHtml: true})
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
    const {cookies} = this.props
    this.setState({loading:true})
    if (cookies.get('name')) this.setState({userName:cookies.get('name')})
    if (cookies.get('logged')) this.setState({logged:cookies.get('logged')})
    this.setState({loading:false})
  }


}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


export default withCookies(CabinetPage)