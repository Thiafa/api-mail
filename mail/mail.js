const nodemailer = require('nodemailer');
const {MAILPORT,HOST,MAIL}=require('../config')
const ejs = require('ejs');

const transporter = nodemailer.createTransport({
  host: HOST,
  port: MAILPORT
})

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor pronto para enviar mensagens");
  }
});
const enviarEmail = async (nome, email, telefone, mensagem) => {
  try {
    const html = await ejs.renderFile(
      __dirname + '/templates/welcome.ejs',
      { nome, email, telefone, mensagem }
    );

    const mailOptions = {
      from: email,
      to: MAIL,
      subject: `Mensagem de: ${nome}`,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log('ERRO!!!', error);
  }
};

module.exports = {
  enviarEmail,
};