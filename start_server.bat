@echo off
echo Iniciando servidor local do Studio Cata...
echo.
echo Para testar o projeto "Escola Teko Porã":
echo.
echo 1. Abra seu navegador
echo 2. Acesse: http://localhost:8000/
echo 3. Navegue para a aba "Projetos"
echo 4. Clique no projeto "Escola Teko Porã"
echo.
echo Ou acesse diretamente:
echo http://localhost:8000/pags/escolatekopora.html
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

cd public_html
python -m http.server 8000

pause
