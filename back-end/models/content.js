let mongoose = require('mongoose');



// Content Schema
const Content = mongoose.model('Content', {
    name: {
        type: String,
        required:true
    },
    type: {
        type:String,
        required:true
    },
    platform:{
        type:String,
        required:true
    },
    score:{
        type: Number,
        required:true
    },
    season:{
        type:Number,
        required:true
    }
});



module.exports = {Content}