










// this will allow to make request
const axios = require("axios")





exports.homeroute= (req,res)=>{
    // Making get request to "api/users"
    console.log("done")
    axios.get(`http://${req.get('host')}/api/users`)           //  this will "get" all users data through 'get' request
    .then(function(response){
        // console.log(response.data)               // response.data return all the data got from the get req.
        res.render('index',{users:response.data})
    }).catch(err=>{
        res.status(500).send({message:"error in getting users data"})

    })
    // res.render('index',{users:"New Data"})
}

exports.add_user = (req,res)=>{
    res.render('add_user')
}

exports.update_user = (req,res)=>{
    axios.get('http://localhost:8080/api/users' ,{params: {id:req.query.id}})         // axios getting data from router/api/users and convert query "id" into params id
    
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
}
