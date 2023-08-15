const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { ConnectDB } = require("./config/db");
const passport = require("passport");
const app = express();
const ExpressSession = require("express-session");
const { GoogleStratgyPassport } = require("./utils/GoogleStrategy");
ConnectDB();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(ExpressSession({
    secret:"type-dev",
    resave:true,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(GoogleStratgyPassport);


passport.serializeUser((user,done)=>{
   return done(null,user)
})



passport.deserializeUser((user,done)=>{
    return done(null,user)
 })
 

app.use("/api/v1",require("./routes/auth.routes"));

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(4000,()=>{
    console.log(`the app is listen at http://localhost:4000`)
})