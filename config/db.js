const mongoose = require('mongoose');
const urlPass = require('./pass');

const uri = urlPass.url;

const connectDB = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('db connected');
}

module.exports = connectDB;