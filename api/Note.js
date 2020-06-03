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

route.delete('/', function(req, res, next) {
    console.log(req.params.id)
    const message = Note
    .findByIdAndDelete(req.params.id)
        .then(() => {
           console.log('note deleted');
        //    res.send('note deleted');
        })
        .catch(err=>next(err))

    res.json({message})
            

    // res.send('This is where I can retrieve a /note');
});

route.put('/', function(req, res, next) {
    console.log(req.params.id)

    const{title,bodyText} = req.body;
    let note = {};
    note.title = title;
    note.bodyText = bodyText;

    Note.findByIdAndUpdate(req.params.id, {
        title : note.title,
        bodyText : note.bodyText
    }, 
    (err, result) =>{
        if (err )
        res.send(err);
        else{
        res.send(result)
        console.log('updated note ', req.params.id)
        }
    })
            

    // res.send('This is where I can retrieve a /note');
});

module.exports = route;