const express = require("express");
const router = express.Router();
const passport = require("passport");


router.route("/google").get(passport.authorize("google",{scope:['email','profile']}))

router.route("/google/callback").get(passport.authenticate("google",{failureRedirect:"/"}),(req,res)=>{
    res.send(req?.user);
})

module.exports = router;