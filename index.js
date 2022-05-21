const express = require("express");
const app = express();

app.use(express.json());

app.use("/",(req,res,next)=>{
    res.send("Hi V.Piraisoodan")
})

app.listen("3000")

console.log("V.Pirais")

