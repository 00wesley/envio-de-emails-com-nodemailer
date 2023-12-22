import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'ppa.teste@outlook.com',
        pass: 'nodemailerPPA'
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

const mailOptions = {
    from: 'ppa.teste@outlook.com',
    to: 'wnascimento.dev@gmail.com',
    subject: 'Teste de Email via Node.js',
    text: 'Olá, este é um teste de envio de e-mail usando Node.js e nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erro ao enviar mensagem', error);
    } else {
        console.log('E-mail enviado', info.response);
    }
});
