@echo off
echo [INFO] 启动本地服务器...
echo [INFO] 请在浏览器中访问: http://localhost:8080
echo [INFO] 按 Ctrl+C 停止服务器
echo.

REM 检查是否安装了Python
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] 未找到Python，请先安装Python
    echo [INFO] 下载地址: https://www.python.org/downloads/
    pause
    exit /b 1
)

REM 启动HTTP服务器
python -m http.server 8080