// Here we are creating mongoDB models for storing data and then sending it to controller 

const mongoose = require('mongoose')








// Creating mongoose schema and defining its type
var myschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})


const UserDB = mongoose.model('userDB',myschema)

module.exports = UserDB;