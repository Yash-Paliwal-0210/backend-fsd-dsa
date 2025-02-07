const fs = require('fs');

const data = fs.readFileSync("./data.txt" , "utf-8")
// const data = fs.readFileSync("./data.txt" )  buffered text

console.log(data)