// const nodemailer = require('nodemailer')
// const sendinBlue = require('nodemailer-sendinblue-v3-transport')
// var pepipost = '4b89d93150e7e83f434609bdc28d7f02'
// const sendinblueAPIKey = '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'

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = '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'
apiKey.apiKey = process.env.API_KEY

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
// SendSmtpEmail | Values to send a transactional email
var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

const sendWelcomeEmail = (email, name) => {
    sendSmtpEmail = {
        sender: { email: 'nirjadesai9800@gmail.com'},
        to: [
            {
                email: email,
                name: name
            },
        ],
        subject: 'Thanks for joining',
        textContent: `Welcome to the task app, ${name}!!`
    }
    apiInstance.sendTransacEmail(sendSmtpEmail)
}

const sendCancelationEmail = (email, name) => {
    sendSmtpEmail = {
        sender: { email: 'nirjadesai9800@gmail.com'},
        to: [
            {
                email: email,
                name: name
            },
        ],
        subject: 'Sorry to see you go',
        textContent: `Goodbye, ${name}!! I hope to see you back sometime soon.`
    }
    apiInstance.sendTransacEmail(sendSmtpEmail)
}

module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}


/* sendSmtpEmail = {
    sender: { email: 'nirjadesai9800@gmail.com'},
    to: [
        {
            email: 'ndesai@argusoft.in',
            name: 'Temp'
        },
    ],
    subject: 'test email',
    textContent: 'test without then'
}
apiInstance.sendTransacEmail(sendSmtpEmail) */
/* apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
        console.log('API called. Returned data: ' + data)
    },
    function(error) {
        console.error(error)
    }
) */