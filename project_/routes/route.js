const express = require('express');
const router = express.Router();

const csvController = require('../controller/csv.controller');
const mailController = require('../controller/mail.controller')
const upload = require('../middleware/upload')


let routes = (app) => {
    router.post('/upload', upload.single('file'), csvController.uploadCsv);
    router.get('/students', csvController.getStudents);
    router.post('/mail', mailController.sendMail)
    app.use('/api/csv', router);

};
module.exports = routes;