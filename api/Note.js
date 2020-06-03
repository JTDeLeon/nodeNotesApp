const express = require('express');
const mongoose = require('mongoose');
const Note = require('../config/Note');
const route = express.Router();
var ObjectID = require('mongodb').ObjectID;

route.post('/', async (req,res)=>{
    const{title,bodyText} = req.body;
    let note = {};
    note.title = title;
    note.bodyText = bodyText;

    let noteModel = new Note(note);
    await noteModel.save();
    res.json(noteModel);
})

route.get('/', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) }; 
    console.log('id = ', id);
    console.log('details = ',new ObjectID(id));
    Note.findById(details._id, (err, item) => {
        if (err) {        
            res.send({'error':'An error has occurred'});      
        } else {        
            res.send(item);  
            console.log('item sent')    
            console.log(item)    
        }    
    });

    // res.send('This is where I can retrieve a /note');
});

module.exports = route;