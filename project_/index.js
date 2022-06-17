const express = require('express');
const app = express();



const socialController = require('./controller/socialMedia.controller')
app.set("view engine", "ejs")

const db = require('./config/db.config')
const initRoutes = require('./routes/route')
app.use(express.urlencoded({extended:true}))
global.__basedir = __dirname + "/..";


const socialMiddleware = require('./middleware/socialMedia.middleware')

  
initRoutes(app)


// db.sequelize.sync({force: true})
// .then( () => {
//         console.log('resync table with alter')
//  })



const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server listening on port: ', port)
})