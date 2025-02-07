const fs = require('fs')

const path = fs.mkdir( "MyFolder" , {recursive: true} , (err) => {
    if(err){
        console.log("the error occired ",err);
        return ;
    }
    console.log("directed created successfull")
})

console.log(path)