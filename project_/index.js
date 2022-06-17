const express = require('express');
const passport = require('passport');
const app = express();


const db = require('./config/db.config')
const initRoutes = require('./routes/route')
app.use(express.urlencoded({extended:true}))
global.__basedir = __dirname + "/..";




initRoutes(app)

// db.sequelize.sync({force: true})
// .then( () => {
//         console.log('resync table with alter')
//  })



app.get('/', (req, res) => {
    res.send('Working...')
})

//app.use()

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server listening on port: ', port)
})