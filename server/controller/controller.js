// Here we are saving data into mongoDB cluster and exporting callback functions into router.js

var UserDB = require('../model/model')










// Create and save newuser

exports.create = (req,res)=>{
// Validate req
   if(!req.body){      // if body is empty
    res.status(400).send({message:"Content cannot be empty"});
    return;
    }

    // new user
    const user = new UserDB({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    // saving data in the database

    user
      .save(user)
      .then(data=>{
        //   res.send(data)    for postman check
        res.redirect('/add-user')
      })
      .catch(err=>{
          res.send(500).send({
              message:err.message || "Some error occured while create operation"
          });
      });


}

// retrive and return all users/single user

exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;           // Taking query ID for loading user data in update form
        UserDB.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Could not find the user id="+id})
            }else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:"There was an error in finding the user"})
        })
    }
    else{
        UserDB.find()           // This is for homepage displaying all users data
        .then(user=>{
            res.send(user)
        }).catch(err=>{  
            res.status(500).send({message:err.message || "Error occured in retriving data form database"})
        })
    }


 
}


// Update a new identified user by user ID
exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }


    const id= req.params.id;               // param is predefined which get the id of URL ":id"
    UserDB.findByIdAndUpdate(id , req.body ,{useFindAndModify:false} )
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id}`})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:"Error updating the user information"})
    })

}

//Delete a user with specified user id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;
    UserDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"The data was not found for deleting"})
        }else{
            res.send({message:"User was deleted succefully"})
        }
    }).catch(err=>{
        res.status(500).send({message:"Could not delete the id="+ id})
    })
}