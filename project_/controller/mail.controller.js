require('dotenv').config();
const nodemailer = require('nodemailer');


module.exports.sendMail = (req, res) => {

    const transporter = nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port: 587,
        secure:false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    }) 

    const {to, subject, text} = req.body;
    const files = req.files;
    const mailData = {
        from: process.env.EMAIL_USERNAME,
        to: to,
        subject: subject,
        text: text,
        html: '<h1><b>Mail with nodemailer</b></h1>',
        attachments: [
            {
                filename: 'screenshot.png',
                path: 'screenshot.png'  
            }
        ]
    }

    transporter.sendMail(mailData, (err, info) => {

        if(err)
        {
            return res.status(400).send({message: err})
        }

        res.status(200).send({error:false, message:'Mail Send', messageId: info.messageId, previewURL: nodemailer.getTestMessageUrl(info)})


    })

}