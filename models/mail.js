//return sendMail function
const {password, email} = require("../config/private.js").data

const nodemailer = require('nodemailer');

/*
module.exports.data = {
  password: "",
  email: ""
}
*/

const sendMail = (to, type, data)=>{

  const mail_settings = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, //true --> will use ssl

    auth: {
      type: "login",
      user: email,//ENTER USERNAME
      pass: password//ENTER PASSWORD
    }
  }

  switch(type){
    case 'approve':
    {
      const transporter = nodemailer.createTransport(mail_settings);
      const mailOptions = {
        from: 'Ticket Manager <'+email+'>',
        to: to,
        subject: "Approvement",
        text: "Ticket Manager registration",
        html: `<strong>Thank you for registration in Ticket Manager!</strong><br/><p>To approve your account click <a href = "${data}">here</a>.</p>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error)
          console.log(error);
        else
        transporter.close();
      });
      break;
    }
  }
}

module.exports = sendMail;
