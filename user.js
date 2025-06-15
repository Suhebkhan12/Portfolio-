const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name:{
        type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

const userdata = mongoose.model('userdata',userSchema);
module.exports = userdata;