const fs = require('fs')

const path = fs.mkdir( "MyFolder" , (err) => {
    if(err){
        console.log("the error occired ",err);
        return ;
    }
    console.log("directed created successfull")
})

console.log(path)