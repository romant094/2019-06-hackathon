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



app.get('/auth', (req, res) => {
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
  res.json({});
});



app.post('/reg', (req, res) => {
  let data = {
    username: 'String',
    password: 'String',
    documents: [],
  }
  DB.push('UserCard',data)
  res.json({});
});



///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


//
module.exports = app;
