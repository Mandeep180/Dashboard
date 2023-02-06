'use strict';
const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect('"mongodb+srv://SpecialCompass:ugsERpq5x0gviE4D@clusterspecialcompass.ntfalqk.mongodb.net/SpecialCompass?retryWrites=true&w=majority"',{
        useNewUrlParser: true, 

       useUnifiedTopology: true 
    }).then(() => console.log('Connected to Mongodb.....'))
 
}