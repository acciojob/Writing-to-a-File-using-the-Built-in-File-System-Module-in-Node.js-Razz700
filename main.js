const fs = require('fs');
const http=require('http');

// TODO: Write the message "Hello, World!" to the file "output.txt"
fs.writeFile('./output.txt',"Hello, World!",(err)=>{
    if(err){
       return console.log(err);
    }else{
        console.log('File written successfully!');
    }
    
})

