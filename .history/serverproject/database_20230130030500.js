'use strict';
const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/SpecialCompass',{
        useNewUrlParser: true, 

       useUnifiedTopology: true 
    }).then(() => console.log('Connected to Mongodb.....'))
 
}