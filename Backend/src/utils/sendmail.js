const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:"adrinabernadin@gmail.com",
        pass: "tivd ttyo lnfi ddwg",
    },
});

module.exports = transporter;