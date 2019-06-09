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
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Image, Item, Label, Menu, List, Divider, Segment, Step, Table, Sidebar } from 'semantic-ui-react'
//
import createStore from './store/configureStore'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import * as PagesAndComponents from './components'
import App from './App'
import './App.css';
import {cols, st} from './styles/style'



const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)



ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter history={history}>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById('root')
);
registerServiceWorker();
