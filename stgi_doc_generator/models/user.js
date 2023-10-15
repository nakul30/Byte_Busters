const mongoose = require('mongoose');
const path = require('path') ; 
const userschema = new mongoose.Schema({
    email:{
        type: String,
        required: true ,
        unique: true
    },
    password:{
        type : String,
        require: true
    },
    name:{
        type: String,
        required :true
    },
    contact:{
        type: String , 
        // required:true 
    },
    documents : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : 'Document'
        }
    ]
}, {timestamps: true 
});
const User  = mongoose.model('User' , userschema);
module.exports = User ;