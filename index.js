//thired party module
const express = require('Express');
const app = express();
const mongoose = require('mongoose');
const morgan= require('morgan');
const cors = require('cors');
 


//MIDDLEWARE..
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//router codes...
const inforouter = require('./router.js');
app.use("/info",inforouter);




//listen port..
app.listen(8000 ,()=>
{
    console.log("server started on 8000 port");
});



//db connection..

mongoose.connect("mongodb://localhost/students",{ useNewUrlParser: true ,  useUnifiedTopology: true },(err)=>
{
    if(!err){
        console.log("database connected succesfully");
    }
})