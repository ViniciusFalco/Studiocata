# Script para Deploy do Studio Catá Arquitetura
# Execute este script após criar o repositório no GitHub

Write-Host "🚀 Script de Deploy - Studio Catá Arquitetura" -ForegroundColor Green
Write-Host ""

# Solicitar informações do usuário
$githubUser = Read-Host "Digite seu username do GitHub"
$repoName = "studiocata-arquitetura"

Write-Host ""
Write-Host "📋 Configurando repositório remoto..." -ForegroundColor Yellow

# Adicionar repositório remoto
git remote add origin "https://github.com/$githubUser/$repoName.git"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Repositório remoto adicionado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Repositório remoto já existe ou houve um erro." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📤 Fazendo push para o GitHub..." -ForegroundColor Yellow

# Renomear branch para main e fazer push
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
    Write-Host "1. Acesse https://vercel.com" -ForegroundColor White
    Write-Host "2. Faça login com sua conta GitHub" -ForegroundColor White
    Write-Host "3. Clique em 'New Project'" -ForegroundColor White
    Write-Host "4. Importe o repositório '$repoName'" -ForegroundColor White
    Write-Host "5. Configure as variáveis de ambiente conforme o arquivo DEPLOY_INSTRUCTIONS.md" -ForegroundColor White
    Write-Host ""
    Write-Host "🔗 URL do repositório: https://github.com/$githubUser/$repoName" -ForegroundColor Blue
} else {
    Write-Host ""
    Write-Host "❌ Erro ao fazer push. Verifique:" -ForegroundColor Red
    Write-Host "- Se o repositório foi criado no GitHub" -ForegroundColor White
    Write-Host "- Se o username está correto" -ForegroundColor White
    Write-Host "- Se você tem permissão para fazer push" -ForegroundColor White
}

Write-Host ""
Write-Host "📖 Para mais informações, consulte o arquivo DEPLOY_INSTRUCTIONS.md" -ForegroundColor Cyan
