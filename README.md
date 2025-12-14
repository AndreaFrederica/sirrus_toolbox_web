# Andrea的在线和离线工具箱

这是一个展示Andrea开发的在线工具集合的网页，提供各种实用工具的快速访问入口。

## 功能特性

- 🌍 **多语言支持**：支持简体中文、繁体中文、英文和日文
- 🌓 **深色/浅色模式**：自动跟随系统主题，也可手动切换
- 📱 **响应式设计**：完美适配手机、平板和电脑
- ⚡ **快速加载**：优化的性能和动画效果
- ♿ **无障碍支持**：支持键盘导航和屏幕阅读器

## 工具列表

### 在线工具

| 工具名称 | 描述 | 访问地址 |
|---------|------|---------|
| v2mp | 视频/GIF转动态照片 | [在线](https://v2mp.sirrus.cc) / [GitHub](https://github.com/AndreaFrederica/video2mjpg_web) / [后端](https://github.com/AndreaFrederica/video2ajpg) |
| anh | 小说助手（VSCode插件） | [在线](https://anh.sirrus.cc) / [GitHub](https://github.com/AndreaFrederica/andrea-novel-helper) / [聊天组件](https://github.com/AndreaFrederica/Roo-Code-Chat) |
| lite-editor | 小说助手网页编辑器（开发中） | https://lite-editor.sirrus.cc |
| imgcut | 在线裁剪表情包图片 | [镜像站](https://imgcut.sirrus.cc) / [原站](https://cut.maplex.top/) |
| guides | 在线检查单（支持自定义） | [在线](https://guides.sirrus.cc) / [GitHub](https://github.com/AndreaFrederica/AndreaGuideBook) |
| blog | 个人博客 | https://blog.sirrus.cc |

### 开源项目

| 项目名称 | 描述 | GitHub地址 |
|---------|------|---------|
| AndreaYggdrasilProxy | 简单的Yggdrasil API代理服务 | [GitHub](https://github.com/AndreaFrederica/AndreaYggdrasilProxy) |
| simpleRoutingPy | 动态路由管理，支持多线路故障切换 | [GitHub](https://github.com/AndreaFrederica/simpleRoutingPy) |
| ScanDraftPaper | 根据扫描件自动生成单色草稿纸模板 | [GitHub](https://github.com/AndreaFrederica?tab=repositories&type=source) |
| FuckParadoxMods | Paradox Mods Helper - 改进Paradox Mods网站体验 | [GitHub](https://github.com/AndreaFrederica/FuckParadoxMods) |
| CreateTrainControl | Minecraft Mod - Create列车VVVF音效支持 | [GitHub](https://github.com/AndreaFrederica/CreateTrainControl) |
| papt | 在pacman/yay上使用apt命令 | [GitHub](https://github.com/AndreaFrederica/papt) |
| patchouli.js | Vue编写的HTML文档阅读器 | [GitHub](https://github.com/AndreaFrederica/patchouli.js) |
| Andrea_WSIO_PythonC | Minecraft插件系统的Python宿主 | [GitHub](https://github.com/AndreaFrederica/Andrea_WSIO_PythonC) |
| Andrea_WSIO_BukkitS | Minecraft插件系统的Bukkit宿主 | [GitHub](https://github.com/AndreaFrederica/Andrea_WSIO_BukkitS) |

## 技术栈

- **HTML5**：语义化标记
- **CSS3**：现代CSS特性，包括CSS变量和Grid布局
- **JavaScript ES6+**：现代JavaScript语法
- **Font Awesome**：图标库
- **Google Fonts**：Inter字体

## 快速开始

### 方法一：直接打开
1. 克隆或下载项目文件
2. 在浏览器中打开 `index.html` 文件
3. 开始使用工具箱

### 方法二：本地服务器（推荐）
1. 克隆或下载项目文件
2. 运行启动脚本：
   - Windows: 双击 `start.bat` 或在命令行运行 `start.bat`
   - Linux/macOS: 在终端运行 `chmod +x start.sh && ./start.sh`
3. 在浏览器中访问 `http://localhost:8080`
4. 开始使用工具箱

使用本地服务器可以确保所有功能正常工作，特别是多语言切换和主题切换功能。

## 自定义配置

### 添加新工具

要添加新工具，请在 `index.html` 文件中的 `.tools-grid` 部分添加新的工具卡片：

```html
<div class="tool-card" data-tool="新工具标识">
    <div class="tool-icon">
        <i class="fas fa-图标"></i>
    </div>
    <h3 class="tool-title" data-i18n="tool-新工具-title">工具名称</h3>
    <p class="tool-description" data-i18n="tool-新工具-desc">工具描述</p>
    <a href="https://新工具地址.sirrus.cc" class="tool-link" target="_blank" data-i18n="tool-visit">访问工具</a>
</div>
```

然后在 `script.js` 文件中的 `translations` 对象中为每种语言添加对应的翻译：

```javascript
'zh-CN': {
    // ... 其他翻译
    'tool-新工具-title': '工具中文名称',
    'tool-新工具-desc': '工具中文描述',
    // ... 其他翻译
},
// ... 其他语言
```

### 添加新语言

要添加新语言支持：

1. 在 `index.html` 的语言选择器中添加新选项：
```html
<option value="新语言代码">新语言名称</option>
```

2. 在 `script.js` 的 `translations` 对象中添加新语言的翻译：
```javascript
'新语言代码': {
    'page-title': '新语言的页面标题',
    // ... 其他翻译
}
```

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 键盘快捷键

- `Ctrl/Cmd + L`：聚焦到语言选择器
- `Ctrl/Cmd + T`：切换主题

## 性能优化

- 使用CSS变量实现主题切换，减少重绘
- 图片懒加载（未来版本）
- 代码分割和按需加载（未来版本）
- Service Worker缓存（未来版本）

## 许可证

© 2024 Andrea的工具箱. 所有权利保留.

## 贡献

欢迎提交问题报告和功能请求！

## 更新日志

### v1.2.0 (2024-12-15)
- 合并小说助手的在线工具和开源项目为一个卡片
- 添加多个开源项目，包括：
  - FuckParadoxMods（Paradox Mods Helper）
  - ScanDraftPaper（扫描草稿纸模板生成）
  - CreateTrainControl（Minecraft 列车Mod）
  - papt（pacman apt命令封装）
  - patchouli.js（HTML文档阅读器）
  - Andrea_WSIO_PythonC 和 Andrea_WSIO_BukkitS（Minecraft插件宿主）
- 为v2mp工具添加GitHub和后端服务链接
- 为guides工具添加GitHub链接
- 优化路由脚本描述，添加故障切换说明
- 完善多语言翻译

### v1.1.0 (2024-12-15)
- 添加开源项目展示区域
- 更新表情包裁剪工具，添加原站链接
- 新增4个开源项目：
  - AndreaYggdrasilProxy（Yggdrasil API代理）
  - simpleRoutingPy（简单路由脚本）
  - andrea-novel-helper（小说助手源码）
  - Roo-Code-Chat（ANH-CHAT聊天组件）
- 优化布局，区分在线工具和开源项目
- 更新多语言翻译，支持新内容

### v1.0.0 (2024-12-15)
- 初始版本发布
- 支持6个工具展示
- 多语言支持（简体中文、繁体中文、英文、日文）
- 深色/浅色主题切换
- 响应式设计
- 键盘快捷键支持
