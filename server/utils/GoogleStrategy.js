const GoogleStratgy = require("passport-google-oauth20").Strategy;

exports.GoogleStratgyPassport = new  GoogleStratgy({
    clientID:"xxx.com",
    clientSecret:"xxx4",
    callbackURL:"http://localhost:4000/api/v1/google/callback",

},(accesstoken,refreshtoken,profile,done)=>{
        done(null,profile);
})
