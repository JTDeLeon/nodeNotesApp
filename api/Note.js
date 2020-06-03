const express = require('express');
const mongoose = require('mongoose');
const Note = require('../config/Note');
const route = express.Router({ mergeParams : true });
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

route.get('/', function(req, res, next) {
    const id = req.params.id;
    Note.findById(id)
        .then(item => {
            if (!item) {        
                res.send({'error':'An error has occurred'});      
            } else {        
                res.send(item);  
                console.log('item sent')    
                console.log(item)    
            }    
        })
        .catch(err=>next(err))
            

    // res.send('This is where I can retrieve a /note');
});

module.exports = route;