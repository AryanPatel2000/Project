
module.exports = (sequelize, Sequelize) => {

    const Student =  sequelize.define('student', {
    Stud_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull:false,
        valiate: {
                notNull : {msg: "Name can not be null"},
                isEmpty: {msg: "Name can not be empty"}
        }
    },
    Email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
        valiate: {
                notNull : {msg: "Email can not be null"},
                isEmpty: {msg: "Email can not be empty"},
                isEmail: {msg : "Please use the correct email format : student@example.com"}
            }
        },

    City: {
        type: Sequelize.STRING,
        allowNull:false,
        valiate: {
                notNull : {msg: "City can not be null"},
                isEmpty: {msg: "City can not be empty"}
        }
    }
}, {
    timestamps:false,
    tableName: 'student'
    })
    return Student;
}
