import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_TO,
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD!,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message, tel } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const mailOptions = {
      from: '"Site" <contato@danielespindola.com>', 
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Olá Daniel Espindola, um cliente está tentando entrar em contato através de seu site!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Telefone: ${tel}</h3>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}