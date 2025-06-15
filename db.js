const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/portfolio";
mongoose.connect(mongoURL,{
   //useNewUrlParser: true,
   //useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('mongoose is connect.');
});

db.on('error',(error)=>{
    console.log('mongoose connection error',error);
});
db.on('disconnet',()=>{
    console.log('mongoose is disconnect.')
});

module.exports = db;