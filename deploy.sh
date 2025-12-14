#!/bin/bash

# Andrea工具箱部署脚本
# 使用方法: ./deploy.sh [github-pages|netlify|vercel]

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查是否提供了部署目标
if [ $# -eq 0 ]; then
    print_warning "请指定部署目标: github-pages, netlify, vercel"
    echo "使用方法: ./deploy.sh [github-pages|netlify|vercel]"
    exit 1
fi

DEPLOY_TARGET=$1

# 检查必要文件是否存在
check_files() {
    print_message "检查必要文件..."
    
    if [ ! -f "index.html" ]; then
        print_error "index.html 文件不存在"
        exit 1
    fi
    
    if [ ! -f "styles.css" ]; then
        print_error "styles.css 文件不存在"
        exit 1
    fi
    
    if [ ! -f "script.js" ]; then
        print_error "script.js 文件不存在"
        exit 1
    fi
    
    print_message "所有必要文件检查通过"
}

# 优化文件
optimize_files() {
    print_message "优化文件..."
    
    # 压缩CSS（如果存在cssmin）
    if command -v cssmin &> /dev/null; then
        cssmin styles.css > styles.min.css
        print_message "CSS已压缩"
    else
        print_warning "cssmin未找到，跳过CSS压缩"
    fi
    
    # 压缩JavaScript（如果存在terser）
    if command -v terser &> /dev/null; then
        terser script.js -o script.min.js
        print_message "JavaScript已压缩"
    else
        print_warning "terser未找到，跳过JavaScript压缩"
    fi
}

# GitHub Pages部署
deploy_github_pages() {
    print_message "准备部署到GitHub Pages..."
    
    # 检查是否是git仓库
    if [ ! -d ".git" ]; then
        print_error "当前目录不是Git仓库"
        print_message "请先初始化Git仓库: git init"
        exit 1
    fi
    
    # 检查是否有远程仓库
    if ! git remote get-url origin &> /dev/null; then
        print_error "没有找到远程仓库origin"
        print_message "请添加远程仓库: git remote add origin <仓库URL>"
        exit 1
    fi
    
    # 提交更改
    print_message "提交更改..."
    git add .
    git commit -m "Deploy toolbox website - $(date)"
    
    # 推送到GitHub
    print_message "推送到GitHub..."
    git push origin main
    
    print_message "GitHub Pages部署完成！"
    print_message "请在GitHub仓库设置中启用GitHub Pages功能"
}

# Netlify部署
deploy_netlify() {
    print_message "准备部署到Netlify..."
    
    # 检查是否安装了netlify-cli
    if ! command -v netlify &> /dev/null; then
        print_error "netlify-cli未安装"
        print_message "请安装: npm install -g netlify-cli"
        exit 1
    fi
    
    # 部署到Netlify
    print_message "部署到Netlify..."
    netlify deploy --prod --dir .
    
    print_message "Netlify部署完成！"
}

# Vercel部署
deploy_vercel() {
    print_message "准备部署到Vercel..."
    
    # 检查是否安装了vercel
    if ! command -v vercel &> /dev/null; then
        print_error "vercel未安装"
        print_message "请安装: npm install -g vercel"
        exit 1
    fi
    
    # 部署到Vercel
    print_message "部署到Vercel..."
    vercel --prod
    
    print_message "Vercel部署完成！"
}

# 主函数
main() {
    print_message "开始部署Andrea工具箱到 $DEPLOY_TARGET"
    
    check_files
    optimize_files
    
    case $DEPLOY_TARGET in
        "github-pages")
            deploy_github_pages
            ;;
        "netlify")
            deploy_netlify
            ;;
        "vercel")
            deploy_vercel
            ;;
        *)
            print_error "不支持的部署目标: $DEPLOY_TARGET"
            print_warning "支持的部署目标: github-pages, netlify, vercel"
            exit 1
            ;;
    esac
    
    print_message "部署完成！"
}

# 运行主函数
main