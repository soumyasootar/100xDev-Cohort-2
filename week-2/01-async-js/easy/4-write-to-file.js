const fs = require("fs");
let data = "this is updated file"
fs.writeFile("test.txt",data,"utf-8",(err,data)=>{
    if(err)
    console.log("err: ", err);
    else
    console.log("file updated ");
})


// Expensive operation
let result = 0;
for (let i = 0; i < 5444444440; i++) {
    result += i;
}
console.log(result);