const express = require('express');
const mongoose = require('mongoose');
const Note = require('../config/Note');
const route = express.Router();

route.post('/', async (req,res)=>{
    const{title,bodyText} = req.body;
    let note = {};
    note.title = title;
    note.bodyText = bodyText;

    let noteModel = new Note(note);
    await noteModel.save();
    res.json(noteModel);
})

module.exports = route;