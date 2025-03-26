const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose'); 
const data = require('./menuitem');
const connectToDb = require('./db');
const menuR = require('./menu')
const app = express();

app.use(express.static('static'));
app.use(express.json())

require('dotenv').config();

const port = process.env.PORT || 9000;
const DB_Url = process.env.DB_URL;



app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/menus', menuR)



app.listen(port, async() => {
  try{
    await connectToDb(DB_Url);
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`connected to Database`);
  }catch(err){
    console.log(err);
  }
});