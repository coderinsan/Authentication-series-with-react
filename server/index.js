const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { ConnectDB } = require("./config/db");
const app = express();
ConnectDB();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(4000,()=>{
    console.log(`the app is listen at http://localhost:4000`)
})