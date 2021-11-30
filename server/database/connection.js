// Here we are defining mongoDB link to connect with and then sending it to server.js

const mongoose = require('mongoose');










const connectDB = async ()=>{
    try{
const con = await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
console.log('MongoDB connected :] ')
    }catch(err){
    console.log(err);
    process.exit(1);
    }
}




module.exports = connectDB;