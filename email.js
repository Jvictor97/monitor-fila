import nodemailer from 'nodemailer';

export const sendEmailNotification = async (data) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'CORRE TOMAR VACINA!!!!!!!',
    html: `<h2>Tem coronavac disponível no posto!</h2>
      <h4>Data da Atualização: ${data.data_hora}</h4>
      <h4>Status da Fila: ${data.status_fila}</h4>
      <h5>Dados:</h5>
      <code>${JSON.stringify(data)}</code>`,
  });

  console.log('Message Sent: %s', info.messageId);
  console.log('info', info);
};
