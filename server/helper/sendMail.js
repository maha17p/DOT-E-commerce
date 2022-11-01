const nodeMailer = require('nodemailer');
const {google} = require('googleapis');
const {OAuth2} = google.auth;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';


const {
    CLIENT_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    MAILING_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS

} = process.env

const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    MAILING_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)


const sendEmail = (to,url,text) => {
    oauth2Client.setCredentials({
        refresh_token:MAILING_REFRESH_TOKEN
    })
    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            type:'OAUTH2',
            user:SENDER_EMAIL_ADDRESS,
            clientId:CLIENT_ID,
            clientSecret:CLIENT_SECRET,
            refreshToken:MAILING_REFRESH_TOKEN
        }
    })

    const mailOptions = {
        from:SENDER_EMAIL_ADDRESS,
        to:to,
        subject:"Testing",
        html:`
        <div style="max-width: 700px; margin: auto; border: 10px solid add; padding: 50px 20px;">
<h2 style="text-align: center; text-transform: uppercase; color: teal;">Welcome to the Our Website</h2>
<p>Congratulations! You are almost set to start using this site.
    Just click the button below to validate your email address
</p>
<a href=${url} style="background-color: crimson;text-decoration: none; color: white; padding: 10px 20px;" >${text}</a>
<p>If the button doesn't work for any reason, you can also click on the link below</p>
<div>${url}</div>
</div>
        `
    }

    smtpTransport.sendMail(mailOptions,(err,info) => {
        if(err) return err;
        return info;
    })
}

module.exports = sendEmail;
