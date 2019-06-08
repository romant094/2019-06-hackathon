const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const db = require('./db')
const DB = new db()

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(port, () => {
  DB.init()
  console.log(`Express server is listening on ${port}`);
});


///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////



app.post('/reg', async (req, res) => {
  var result = await DB.check('UserCard',{username: req.body.username})
  console.log(result)
  if (result.length===0) {
    DB.push('UserCard',req.body)
    res.sendStatus(200)
  } else {
    res.sendStatus(403) // user exists
  }
});



app.post('/auth', async (req, res) => {
  var result = await DB.check('UserCard',req.body)
  // console.log(result)
  if (result.length===0) {
    res.sendStatus(403)
  } else {
    res.sendStatus(200)
  }
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
