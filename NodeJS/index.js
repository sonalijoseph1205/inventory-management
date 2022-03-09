const express = require('express');
const bodyParser= require ('body-parser');
 const cors = require('cors');

const {mongoose} = require('./db.js');
var dataController = require('./controllers/dataController.js');

var app = express();
app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
}));

app.listen(3000,() => console.log('Server started at port : 3000'));

//to add router from data controller to here
app.use('/', dataController);