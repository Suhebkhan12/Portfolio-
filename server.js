const express = require('express');

const db = require('./db.js');
const path = require('path');

const user = require('./user.js');

const bodyParser = require('body-parser');

const  app = express();
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});



app.post('/submit',async (req, res)=>{
    try{
      const  data = req.body;
      const newdata = new user(data);
       const response =  await newdata.save();
       res.redirect('/#contacts');
      console.log('data save successful');
      res.status(200).json(response);
      


    }catch(error)
    {
        if(!res.headersSent)
        res.status(500).json({error: 'internal error please check.'});
    }
})


app.listen(3000,(function(){
    console.log("server is listen on port 3000.");
}));