












// Custom JS for the webpages
$("#add_user").submit(function(event){
    alert("Data inserted succesfully")
})

$("#update_user").submit(function(event){       // targeting the form using id
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();  // This stores all the data of the form
   // console.log(unindexed_array);
var data = {}
    $.map(unindexed_array,function(n,i){            // n is data
      data[n['name']] = n['value']
   //   console.log(n);
    })
//    console.log(data)

    var myrequest ={
        "url":`http://localhost:8080/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(myrequest).done(function(response){
        alert("Data updated succesfully")
    })
})



if(window.location.pathname =="/"){
   $ondelete = $(".table tbody td a.delete")      // targeting/selection the delete button using class
   $ondelete.click(function(){
       var id = $(this).attr("data-id")

       var myrequest ={
        "url":`http://localhost:8080/api/users/${id}`,
        "method":"DELETE"
    } 
   
    if(confirm("Do you really want to delete this record")){  //inbuilt method
        $.ajax(myrequest).done(function(response){                   // this will take myrequest as parameter
            alert("Data deleted succesfully")
            location.reload();
        })
    }

   })

}