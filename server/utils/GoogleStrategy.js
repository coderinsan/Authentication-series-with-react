const GoogleStratgy = require("passport-google-oauth20").Strategy;

exports.GoogleStratgyPassport = new  GoogleStratgy({
    clientID:"180074994433-j7jddd55m3v63qo7uh9hptf86ms78evg.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:4000/api/v1/google/callback",

},(accesstoken,refreshtoken,profile,done)=>{
        done(null,profile);
})