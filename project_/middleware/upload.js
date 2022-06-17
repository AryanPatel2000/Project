const multer = require('multer');
const path = require('path');

const csvFilter = (req, file, cb) => {

    if(file.mimetype.includes("csv"))
    {
        cb(null, true)
    }
    else{
        cb('Please uploas only CSV file..', false);
    }
}   

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, path.join(__basedir, 'project_/uploads/'));
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, `${file.originalname}`)
    }
})

const uploadFile = multer({storage:storage, fileFilter:csvFilter});

module.exports = uploadFile;