const express =  require("express")
const route = express.Router()  // const app will create new app but instead we can use this method "route"
const services = require('../services/render')   // created render in diffent files
const controller = require('../controller/controller')  // having database callback functions







route.get('/',services.homeroute)            // from services/render it will import homeroute function for rendering

route.get('/add-user',services.add_user)

route.get('/update-user',services.update_user)


//Creating API  (For posting data ) from the controller paths // API has the data we just call the APIs and get data
route.post('/api/users',controller.create)          // API for posting into the server
route.get('/api/users',controller.find)             // API for getting data from the server
route.put('/api/users/:id',controller.update)       // From index.js we are putting req in the database and Updating
route.delete('/api/users/:id',controller.delete)

module.exports= route
