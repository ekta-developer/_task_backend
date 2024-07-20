const mongoose = require('mongoose');
const { type } = require('os');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required:false
    },
    middle_name: String,
    last_name: {
        type: String,
        required:false
    },
    gender:{
        type: String,
        required :false
    },
    dob:{
        type: Date,
        required:false
    },
    mobile: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required:false
    },
    username: {
        type: String,
        required:false
    },
    password: {
        type: String,
        required:false
    },
    confirmpassword: {
        type: String,
        required:false
    },
    Hobbies: {
        type:String,
        required:false
    },    
    state: {
        type :String,
        required :false,
    },
    district:{
      type: String,
      required: false
    },
    city: {
       type: String,
       required :false
    },
    profile: {
        type: String
        
    },
    document: {
       type: String
       
    },   
    status: {
    type : String,
    required: true

    }

})

const User = mongoose.model('Data', dataSchema);

module.exports=User;