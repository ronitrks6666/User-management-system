const express =  require("express")
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')






// Connecting MongoDB to the Server
const connectDB = require('./server/database/connection')

dotenv.config({path:'config.env'})
const port = process.env.PORT || 3000

//For console log requests

app.use(morgan('tiny'))

//Calling MongoDB connection to get connected
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set("view engine","ejs")    // This takes the views folder by default 
 // app.set("views",path.resolve(__dirname,"views/ejs"))    //  If we want to set another folder for ejs engines


// load assets

// MIDDLEWARE
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))   
// this will take '/css' path global so we can use it from any directory eg. link href="/css/style.css" in ejs folder
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

// Same for img and js files



//load routers
app.use('/',require('./server/routes/router'))


app.listen(port,()=>{
    console.log("The server is running :] ")
})