
const Sequelize = require('sequelize');



const sequelize   = new Sequelize('db1', 'root', '', {
    dialect: 'mysql'
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require('../model/model')(sequelize, Sequelize);
module.exports = db;



// const db = new Sequelize('db1', 'root', '', {
//     dialect: 'mysql'
// })

//     db.authenticate()
//     .then( () => {
//         console.log('Connection Estlablished')
//     })
//     .catch( (err) => {
//         console.log(err)
//     });



