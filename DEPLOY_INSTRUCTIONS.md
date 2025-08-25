# 🚀 Instruções para Deploy no GitHub e Vercel

## 📋 Passos para Deploy

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão "+" no canto superior direito
3. Selecione "New repository"
4. Configure o repositório:
   - **Repository name**: `studiocata-arquitetura`
   - **Description**: Website do Studio Catá Arquitetura
   - **Visibility**: Public (ou Private, conforme sua preferência)
   - **NÃO** marque "Add a README file" (já temos um)
   - **NÃO** marque "Add .gitignore" (já temos um)
5. Clique em "Create repository"

### 2. Conectar Repositório Local ao GitHub

Após criar o repositório, execute os seguintes comandos no terminal:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/studiocata-arquitetura.git

# Fazer push do código
git branch -M main
git push -u origin main
```

### 3. Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em "New Project"
3. Importe o repositório `studiocata-arquitetura`
4. Configure o projeto:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (deixe como está)
   - **Build Command**: `npm run build` (deixe como está)
   - **Output Directory**: `public_html` (deixe como está)
5. Clique em "Deploy"

### 4. Configurar Variáveis de Ambiente no Vercel

Após o deploy inicial, configure as variáveis de ambiente:

1. No painel do Vercel, vá em "Settings" > "Environment Variables"
2. Adicione as seguintes variáveis:
   - `EMAIL_USER`: Seu email Gmail
   - `EMAIL_PASS`: Senha de app do Gmail
   - `EMAIL_TO`: Email que receberá as mensagens de contato

### 5. Configurar Domínio Personalizado (Opcional)

1. No painel do Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme as instruções do Vercel

## 🔧 Configuração do Email

Para que o formulário de contato funcione:

### Criar Senha de App no Gmail

1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá em "Segurança"
3. Ative a "Verificação em duas etapas" se não estiver ativa
4. Vá em "Senhas de app"
5. Selecione "Outro (nome personalizado)" e digite "Studio Catá Website"
6. Copie a senha gerada (16 caracteres)

### Configurar Variáveis no Vercel

- `EMAIL_USER`: seu_email@gmail.com
- `EMAIL_PASS`: a_senha_de_app_gerada
- `EMAIL_TO`: email_que_recebera_contatos@exemplo.com

## 📝 Scripts Úteis

### Para Atualizações Futuras

```bash
# Após fazer alterações no código
git add .
git commit -m "Descrição das alterações"
git push origin main
```

O Vercel fará o deploy automático a cada push para a branch main.

### Para Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar localmente
npm run dev
```

## 🎯 Próximos Passos

1. ✅ Criar repositório no GitHub
2. ✅ Fazer push do código
3. ✅ Deploy no Vercel
4. ✅ Configurar variáveis de ambiente
5. ✅ Testar formulário de contato
6. ✅ Configurar domínio personalizado (se necessário)

## 📞 Suporte

Se encontrar algum problema durante o processo, verifique:

1. Se todas as variáveis de ambiente estão configuradas corretamente
2. Se a senha de app do Gmail está correta
3. Se o repositório está conectado corretamente ao Vercel
4. Os logs de deploy no painel do Vercel

---

**Nota**: O website estará disponível em um domínio `.vercel.app` após o deploy. Para usar seu domínio personalizado, siga as instruções de configuração de DNS do Vercel.
