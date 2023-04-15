const fs = require('node:fs');

fs.readFile('file.txt',(err,data)=>{
console.log(err,data);
}
);

console.log("finish reading file")

//new function

const a= fs.readFileSync('file.txt')
console.log(a.toString())

//new function
b= fs.writeFile('file.txt','hello some another data',()=>{
    console.log("finished writing files")
});
console.log(b)

//new function

c=fs.truncate('file.txt',5,()=>{
    console.log("path trucate")
});

console.log(c)