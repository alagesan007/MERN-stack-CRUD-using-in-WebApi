const mongoose = require('mongoose');

const infoShema = mongoose.Schema({
    Name:{
        type :String,
        required : true,
        trim:true
    },
    Age:{
        type:Number,
        required :true
    },
    City:{
        type:String,
        required:true
    },
    createTimeP:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Info",infoShema);