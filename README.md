# Studio Catá Arquitetura

Website oficial do Studio Catá Arquitetura, desenvolvido com HTML, CSS e JavaScript, hospedado no Vercel.

## 🏗️ Sobre o Projeto

Este é o website do Studio Catá Arquitetura, uma empresa de arquitetura que apresenta seus projetos e obras concluídas. O site foi migrado do Hostgator (cPanel) para o Vercel para melhor performance e facilidade de manutenção.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura do site
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e funcionalidades
- **Vercel** - Hospedagem e deploy
- **Nodemailer** - Envio de emails do formulário de contato

## 📁 Estrutura do Projeto

```
studiocata_vercel/
├── public_html/          # Arquivos principais do site
│   ├── css/             # Arquivos de estilo
│   ├── js/              # Arquivos JavaScript
│   ├── img/             # Imagens do site
│   ├── pags/            # Páginas individuais dos projetos
│   └── *.html           # Páginas principais
├── api/                 # APIs serverless
│   └── contact.js       # API para formulário de contato
├── vercel.json          # Configuração do Vercel
├── package.json         # Dependências do projeto
└── README.md           # Este arquivo
```

## 🛠️ Configuração Local

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd studiocata_vercel
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (crie um arquivo `.env.local`):
```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
EMAIL_TO=email_destino@exemplo.com
```

4. Execute o projeto localmente:
```bash
npm run dev
```

## 🌐 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel. Para fazer o deploy:

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO`
3. O deploy será feito automaticamente a cada push para a branch principal

## 📧 Configuração do Email

Para que o formulário de contato funcione, você precisa:

1. **Criar uma senha de app no Gmail:**
   - Acesse sua conta Google
   - Vá em "Segurança" > "Verificação em duas etapas"
   - Crie uma "Senha de app" para o projeto

2. **Configurar as variáveis de ambiente no Vercel:**
   - `EMAIL_USER`: Seu email Gmail
   - `EMAIL_PASS`: A senha de app gerada
   - `EMAIL_TO`: Email que receberá as mensagens de contato

## 📱 Páginas do Site

- **Home** (`index.html`) - Página principal com slider e projetos
- **Projetos** (`projetos.html`) - Lista de todos os projetos
- **Obras Concluídas** (`obras.html`) - Obras finalizadas
- **Sobre Nós** (`sobrenos.html`) - Informações sobre a empresa
- **Contato** (`contato.html`) - Formulário de contato

## 🔧 Manutenção

Para adicionar novos projetos:

1. Adicione as imagens na pasta `public_html/img/projetos/`
2. Crie uma nova página HTML na pasta `public_html/pags/`
3. Atualize os links nas páginas principais
4. Faça commit e push para o GitHub

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através do formulário no site ou diretamente via email.

---

© 2024 Studio Catá Arquitetura. Todos os direitos reservados.
