const { error } = require("console");
const fs = require("fs")

const data = "I am learning backend"

fs.writeFile("data2.txt" , data ,(error) => {
    if(error){
        console.log("error found !!" , error);
    }
    else{
        console.log("file writing succesfull")
    }

});