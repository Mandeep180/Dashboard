'use strict';
const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/upload-files-database',{
        useNewParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb.....'))
 
}