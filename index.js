import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'seu_host',
    port: sua porta, 
    auth: {
        user: 'seu e-mail',
        pass: 'sua senha'
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

const mailOptions = {
    from: 'seu e-mail cadastrado',
    to: 'e-mail de quem vai receber',
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
