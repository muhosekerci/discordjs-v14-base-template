@echo off
:loop
node index.js
echo Bir hata olustu, yeniden baslatiliyor...
timeout /t 5
goto loop