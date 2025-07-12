@echo off
:loop
node index.js
echo An error occurred, restarting...
timeout /t 5
goto loop
