const express = require('express');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose');
const db = "mongodb+srv://afelipgb:10491998@cluster0-w2uwe.gcp.mongodb.net/tpdb?retryWrites=true&w=majority"

mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },err => {
    if (err) {
        console.error('Error!'+ err);
    } else {
        console.log('Connected to mongodb');
    }
 });

router.post('/add', (req, res) => {
    console.log(req.body);
    
    let userData = req.body;
    let user = new User(userData);
    console.log(user);
    
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(user)
        }
    });
});


router.get('/data', (req, res) => {
    
     User.find((error, user) => {
             res.status(200).send(user)
           })
  });





 module.exports = router;


