@echo off
setlocal enabledelayedexpansion

REM Andrea工具箱部署脚本 (Windows版本)
REM 使用方法: deploy.bat [github-pages|netlify|vercel]

set "DEPLOY_TARGET=%1"

if "%DEPLOY_TARGET%"=="" (
    echo [WARNING] 请指定部署目标: github-pages, netlify, vercel
    echo 使用方法: deploy.bat [github-pages^|netlify^|vercel]
    exit /b 1
)

echo [INFO] 开始部署Andrea工具箱到 %DEPLOY_TARGET%

REM 检查必要文件
echo [INFO] 检查必要文件...

if not exist "index.html" (
    echo [ERROR] index.html 文件不存在
    exit /b 1
)

if not exist "styles.css" (
    echo [ERROR] styles.css 文件不存在
    exit /b 1
)

if not exist "script.js" (
    echo [ERROR] script.js 文件不存在
    exit /b 1
)

echo [INFO] 所有必要文件检查通过

REM 根据部署目标执行相应操作
if "%DEPLOY_TARGET%"=="github-pages" (
    echo [INFO] 准备部署到GitHub Pages...
    
    REM 检查是否是git仓库
    if not exist ".git" (
        echo [ERROR] 当前目录不是Git仓库
        echo [INFO] 请先初始化Git仓库: git init
        exit /b 1
    )
    
    REM 检查是否有远程仓库
    git remote get-url origin >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] 没有找到远程仓库origin
        echo [INFO] 请添加远程仓库: git remote add origin ^<仓库URL^>
        exit /b 1
    )
    
    REM 提交更改
    echo [INFO] 提交更改...
    git add .
    git commit -m "Deploy toolbox website - %date%"
    
    REM 推送到GitHub
    echo [INFO] 推送到GitHub...
    git push origin main
    
    echo [INFO] GitHub Pages部署完成！
    echo [INFO] 请在GitHub仓库设置中启用GitHub Pages功能
    
) else if "%DEPLOY_TARGET%"=="netlify" (
    echo [INFO] 准备部署到Netlify...
    
    REM 检查是否安装了netlify-cli
    where netlify >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] netlify-cli未安装
        echo [INFO] 请安装: npm install -g netlify-cli
        exit /b 1
    )
    
    REM 部署到Netlify
    echo [INFO] 部署到Netlify...
    netlify deploy --prod --dir .
    
    echo [INFO] Netlify部署完成！
    
) else if "%DEPLOY_TARGET%"=="vercel" (
    echo [INFO] 准备部署到Vercel...
    
    REM 检查是否安装了vercel
    where vercel >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] vercel未安装
        echo [INFO] 请安装: npm install -g vercel
        exit /b 1
    )
    
    REM 部署到Vercel
    echo [INFO] 部署到Vercel...
    vercel --prod
    
    echo [INFO] Vercel部署完成！
    
) else (
    echo [ERROR] 不支持的部署目标: %DEPLOY_TARGET%
    echo [WARNING] 支持的部署目标: github-pages, netlify, vercel
    exit /b 1
)

echo [INFO] 部署完成！
pause