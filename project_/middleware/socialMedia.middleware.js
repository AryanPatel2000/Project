const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session')
const app = express();
require('../controller/socialMedia.controller')
app.set("view engine", "ejs")


app.use(cookieSession({
   name:'session',
   keys: ['key1', 'key2']
}))
app.use(passport.initialize())
app.use(passport.session())

module.exports.isLoggedIn = (req, res, next) => {

    if(req.user)
    {
        next();
        
    }
    
    else
    {
        res.sendStatus(401)
    }
 
}



module.exports.isLoggedInFailed = (req, res, next) => {

    res.send('You Failed to login')
}

module.exports.isLoggedInSuccess = (req, res, next) => {

    //console.log(req.user.photos[0].value)

    res.render('pages/profile.ejs',{
        name:req.user.displayName,
        pic:req.user._json.picture,
        email:req.user.emails[0].value,
        profile: "google"
    })
}



