@echo off
echo Parando processos Node.js...
taskkill /f /im node.exe 2>nul
echo.
echo Iniciando aplicacao TODO list...
echo Acesse: http://localhost:4201
echo.
ng serve --port 4201 