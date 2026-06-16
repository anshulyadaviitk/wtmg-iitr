@echo off
:: Navigates to the folder where this script is saved
cd /d "%~dp0"

echo Showing current status...
git status
echo.

git add .

:: Prompts you to type a message
set /p msg="Enter commit message: "

git commit -m "%msg%"
git push origin main

echo.
echo Done! Closing in 3 seconds...
timeout /t 3 >nul
