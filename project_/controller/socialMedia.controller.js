require('dotenv').config()
const passport = require('passport');
const express = require('express');


const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser( function(user, done)  {

    done(null, user);
}) 

passport.deserializeUser(function (user, done) {
    done(null, user)
})


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback:true

}, (request, accessToken, refereshToken, profile, done) => {

    console.log(profile);
    done(null, profile)

}))

