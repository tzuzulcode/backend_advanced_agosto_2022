const express = require("express")


const app = express()

app.get("/",(req,res)=>{
    return res.json({
        message:"Hola mundo"
    })
})

const port = process.env.PORT

app.listen(port,()=>{
    console.log("Listening on: http://localhost:4000")
})