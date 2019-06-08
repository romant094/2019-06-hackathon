const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const dbModel = require('./db')
const DB = new dbModel()

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());


app.listen(port, () => {
  DB.init()
  console.log(`Express server is listening on ${port}`);
});


///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////



app.post('/reg', (req, res) => {
  let data = {
    username: 'String',
    password: 'String',
    documents: [],
  }
  DB.push('UserCard',data)
  res.json({});
});



app.post('/auth', (req, res) => {
  let data = {
    username: 'String',
    password: 'String',
    documents: [],
  }
  DB.push('UserCard',data)
  res.sendStatus(200)
});



app.get('/users', (req, res) => {

});



app.get('/users/:id', (req, res) => {

});



app.post('/users/:id/info', (req, res) => {

});



app.get('/unis', (req, res) => {

});



app.get('/unis/:id', (req, res) => {

});



app.get('/unis/filter', (req, res) => {

});




///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////



module.exports = app;
