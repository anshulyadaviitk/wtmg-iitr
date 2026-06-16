@echo off
cd /d "%~dp0"

:: 1. Check if Git is installed
where git >nul 2>nul
if %errorlevel%==0 (
    echo  Git is already installed. Proceeding...
    goto run_git
)

:: 2. If Git is missing, ask for permission to install it
echo ⚠️ Git is NOT installed on this system!
echo This script will now automatically download and install Git for you.
echo Please click "Yes" if a Windows security prompt appears.
echo.
pause

echo ⏳ Downloading and installing Git... Please wait...
winget install --id Git.Git -e --source winget --accept-source-agreements --accept-package-agreements
if %errorlevel% neq 0 (
    echo ❌ Automated installation failed. Please install Git manually from https://git-scm.com
    pause
    exit /b
)

:: 3. Refresh the path environment variables so the script recognizes the new Git installation
call :refresh_path
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo  Git installed successfully! Please RESTART this script to update your site.
    pause
    exit /b
)

:run_git
echo.
echo  Running Git update commands...
echo.

:: 4. Run your standard workflow
git status
git add .
set /p msg="Enter commit message: "
git commit -m "%msg%"
git push origin main

echo.
echo  Done! Closing in 3 seconds...
timeout /t 3 >nul
exit /b

:: Helper function to reload environment variables without restarting the script
:refresh_path
for /f "tokens=2*" %%a in ('reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v Path') do set "syspath=%%b"
for /f "tokens=2*" %%a in ('reg query HKCU\Environment /v Path') do set "userpath=%%b"
set "Path=%syspath%;%userpath%"
goto :eof
