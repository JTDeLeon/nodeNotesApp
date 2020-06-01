const mongoose = require('mongoose');

const note = new mongoose.Schema({
    title : {
        type: String
    },
    bodyText : {
        type: String
    }
})

module.exports = Note = mongoose.model('note', note);