import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { nome, email, telefone, mensagem } = req.body;

    // Validação básica
    if (!nome || !email || !telefone || !mensagem) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    // Configuração do transporter (você precisará configurar as variáveis de ambiente)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // ou outro serviço de email
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'seu_email@example.com', // Email de destino
      subject: 'Novo contato do site Studio Catá Arquitetura',
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    };

    // Envio do email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
