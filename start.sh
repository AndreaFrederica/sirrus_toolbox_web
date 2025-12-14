#!/bin/bash

echo "[INFO] 启动本地服务器..."
echo "[INFO] 请在浏览器中访问: http://localhost:8080"
echo "[INFO] 按 Ctrl+C 停止服务器"
echo

# 检查是否安装了Python
if ! command -v python3 &> /dev/null; then
    echo "[ERROR] 未找到Python3，请先安装Python3"
    echo "[INFO] 下载地址: https://www.python.org/downloads/"
    exit 1
fi

# 启动HTTP服务器
python3 -m http.server 8080