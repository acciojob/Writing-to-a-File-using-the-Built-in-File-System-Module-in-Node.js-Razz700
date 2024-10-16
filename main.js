const fs = require('fs');
const http=require('http');

// TODO: Write the message "Hello, World!" to the file "output.txt"
const data=fs.readFileSync('./output.txt','utf-8');
console.log(data);

