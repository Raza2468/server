var express = require("express")
var server = express()




// server.get("/", (req, res, next) => {
//     console.log("some one get menu");
//     res.send("menu: what do you want? food or water");
// })

server.get("/", (req,res,next)=>{
console.log("runinig===>biyani");
    res.send("Hellow i will come biryani $ Home $")
})

server.get("/about", (req,res,next)=>{
    console.log("runing water");
    res.send("Hellow i will come water $ About $")
    })
    

server.listen(process.env.PORT || 3001,()=>{
    console.log('server is running');
})