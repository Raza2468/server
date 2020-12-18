var express = require("express")
var server = express()


var PORT = process.env.PORT || 3001
server.get("/", (req,res,next)=>{
console.log("runinig===>biyani");
    res.send("Hellow i will come biryani $ Home $")
})

server.get("/about", (req,res,next)=>{
    console.log("runing water");
    res.send("Hellow i will come water $ About $")
    })
    

server.listen(PORT || 3001,()=>{
    console.log('server is running' +PORT);
})