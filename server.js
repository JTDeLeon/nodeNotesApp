const express = require('express');
const connectDB = require('./config/db');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

connectDB();
const port = 8000;

app.use(express.json({extended:false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/userModel', require('./api/User'));
app.use('/api/noteModel', require('./api/Note'));
app.use('/note/:id', require('./api/Note'));
require('./app/routes')(app, {});
app.listen(port, () => {  
    console.log('We are live on ' + port);
});