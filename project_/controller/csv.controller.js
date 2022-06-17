const db = require('../config/db.config')
const Student = db.students;
const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');


module.exports.uploadCsv = async(req, res) => {

    try{

        if(req.file == undefined)
        {
            return  res.status(400).send({error:true, message: "Please upload CSV file!"})
        }
        let = students = [];
        let path = __basedir + '/project_/uploads/' + req.file.filename;

        fs.createReadStream(path)
            .pipe(csv.parse({ headers : true }))
            .on('error', (error) => {
                throw error.message;
            })
            .on('data', (row) => {
                students.push(row)
            })
            .on("end", () => {
                Student.bulkCreate(students)
                .then( () => {
                    res.status(200).send({error:false, message: 'Uploaded the file successfully: ' + req.file.originalname})
                })
                .catch( (error) => {
                    res.status(500).send({message: "Failes to import data into database!", error:error.message});
                })
            })

    }
    catch(err)
    {
        res.status(400).send({error:true, message: 'Could not upload the file: ' + req.file.originalname})
    }
}

module.exports.getStudents = (req, res) => {
    Student.findAll()
    .then( (data) => {
        res.status(200).send({res:data})
    })
    .catch( (err) => {
        res.status(500).send({message:err, message: 'Failed to fetch data'})
    })
}
