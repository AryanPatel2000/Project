const express = require('express');
const app = express();
const passport = require('passport');
const router = express.Router();

const csvController = require('../controller/csv.controller');
const mailController = require('../controller/mail.controller')
const socialController = require('../controller/socialMedia.controller')
const socialMiddleware = require('../middleware/socialMedia.middleware')
const upload = require('../middleware/upload')
const cookieSession = require('cookie-session')

let routes = (app) => {
    router.post('/upload', upload.single('file'), csvController.uploadCsv);
    router.get('/students', csvController.getStudents);
    router.post('/mail', mailController.sendMail)
    app.use('/api/csv', router);


    
    app.get('/', (req, res) => { res.render('pages/index')})
    app.get('/failed',  socialMiddleware.isLoggedInFailed)

    app.get('/good',socialMiddleware.isLoggedIn,  (req, res) => {
       // console.log(req.user._json)
        res.send('pages/profile.ejs',{
            name : req.user.displayName,
            pic : req.user._json.picture,
            email : req.user.emails[0].value,
            profile : "google"
        })
    })
     app.use('/google', passport.authenticate('google', {scope: ['profile', 'email']}))



    app.get('/google/callback', passport.authenticate('google', 
    { failureRedirect: '/failed'})), 

    (req, res) => { 
        res.redirect('/profile');
    }



};
module.exports = routes;