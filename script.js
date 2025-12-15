// 多语言翻译数据
const translations = {
    'zh-CN': {
        'page-title': 'Andrea的在线和离线工具箱',
        'main-title': 'Andrea的在线和离线工具箱',
        'intro-text': '欢迎使用Andrea的工具箱，这里收集了各种实用的在线工具和开源项目，帮助您提高工作效率。',
        'online-tools-title': '在线工具',
        'opensource-projects-title': '开源项目',
        'tool-v2mp-title': '视频/GIF转动态照片',
        'tool-v2mp-desc': '将视频或GIF转换为动态照片格式',
        'tool-anh-title': '小说助手',
        'tool-anh-desc': 'VSCode写小说插件，提供专业的写作环境',
        'tool-anh-chat': '聊天组件',
        'tool-lite-editor-title': '小说助手网页编辑器',
        'tool-lite-editor-desc': '轻量级的在线小说编辑器（开发中）',
        'tool-imgcut-title': '表情包裁剪工具',
        'tool-imgcut-desc': '在线裁剪表情包图片，支持多种尺寸',
        'tool-guides-title': '在线检查单',
        'tool-guides-desc': '自定义检查单工具，支持多种场景',
        'tool-blog-title': '博客',
        'tool-blog-desc': '分享技术心得和生活感悟的个人博客',
        'tool-yggdrasil-proxy-title': 'Yggdrasil API代理',
        'tool-yggdrasil-proxy-desc': '简单的Yggdrasil API代理服务',
        'tool-simple-routing-title': '简单路由脚本',
        'tool-simple-routing-desc': '动态路由管理方案，支持多线路故障切换',
        'tool-scan-draft-paper-title': '扫描草稿纸模板',
        'tool-scan-draft-paper-desc': '根据扫描件自动生成单色草稿纸模板',
        'tool-paradox-mods-helper-title': 'Paradox Mods Helper',
        'tool-paradox-mods-helper-desc': 'Tampermonkey脚本，改进Paradox Mods网站体验',
        'tool-create-train-control-title': 'Create列车控制',
        'tool-create-train-control-desc': 'Minecraft Mod，允许列车使用VVVF音效',
        'tool-papt-title': 'Papt',
        'tool-papt-desc': '在pacman和yay/paru上使用熟悉的apt命令',
        'tool-patchouli-js-title': 'Patchouli.js',
        'tool-patchouli-js-desc': 'Vue编写的HTML文档阅读器，支持单页和分页',
        'tool-andrea-wsio-python-title': 'AndreaWSIO Python宿主',
        'tool-andrea-wsio-python-desc': 'Minecraft插件系统的Python插件宿主实现',
        'tool-andrea-wsio-bukkit-title': 'AndreaWSIO Bukkit宿主',
        'tool-andrea-wsio-bukkit-desc': 'AndreaWSIO的Bukkit宿主实现',
        'tool-visit': '访问工具',
        'tool-visit-mirror': '镜像站',
        'tool-visit-original': '原站',
        'tool-view-github': '查看GitHub',
        'tool-backend': '后端',
        'footer-text': '© 2025 Andrea Frederica. 所有权利保留.'
    },
    'zh-TW': {
        'page-title': 'Andrea的在線和離線工具箱',
        'main-title': 'Andrea的在線和離線工具箱',
        'intro-text': '歡迎使用Andrea的工具箱，這裡收集了各種實用的在線工具和開源項目，幫助您提高工作效率。',
        'online-tools-title': '在線工具',
        'opensource-projects-title': '開源項目',
        'tool-v2mp-title': '影片/GIF轉動態照片',
        'tool-v2mp-desc': '將影片或GIF轉換為動態照片格式',
        'tool-anh-title': '小說助手',
        'tool-anh-desc': 'VSCode寫小說插件，提供專業的寫作環境',
        'tool-anh-chat': '聊天組件',
        'tool-lite-editor-title': '小說助手網頁編輯器',
        'tool-lite-editor-desc': '輕量級的在線小說編輯器（開發中）',
        'tool-imgcut-title': '表情包裁剪工具',
        'tool-imgcut-desc': '在線裁剪表情包圖片，支援多種尺寸',
        'tool-guides-title': '在線檢查單',
        'tool-guides-desc': '自定義檢查單工具，支援多種場景',
        'tool-blog-title': '部落格',
        'tool-blog-desc': '分享技術心得和生活感悟的個人部落格',
        'tool-yggdrasil-proxy-title': 'Yggdrasil API代理',
        'tool-yggdrasil-proxy-desc': '簡單的Yggdrasil API代理服務',
        'tool-simple-routing-title': '簡單路由腳本',
        'tool-simple-routing-desc': '動態路由管理方案，支援多線路故障切換',
        'tool-scan-draft-paper-title': '掃描草稿紙模板',
        'tool-scan-draft-paper-desc': '根據掃描件自動生成單色草稿紙模板',
        'tool-paradox-mods-helper-title': 'Paradox Mods Helper',
        'tool-paradox-mods-helper-desc': 'Tampermonkey腳本，改進Paradox Mods網站體驗',
        'tool-create-train-control-title': 'Create列車控制',
        'tool-create-train-control-desc': 'Minecraft Mod，允許列車使用VVVF音效',
        'tool-papt-title': 'Papt',
        'tool-papt-desc': '在pacman和yay/paru上使用熟悉的apt命令',
        'tool-patchouli-js-title': 'Patchouli.js',
        'tool-patchouli-js-desc': 'Vue編寫的HTML文檔閱讀器，支援單頁和分頁',
        'tool-andrea-wsio-python-title': 'AndreaWSIO Python宿主',
        'tool-andrea-wsio-python-desc': 'Minecraft插件系統的Python插件宿主實現',
        'tool-andrea-wsio-bukkit-title': 'AndreaWSIO Bukkit宿主',
        'tool-andrea-wsio-bukkit-desc': 'AndreaWSIO的Bukkit宿主實現',
        'tool-visit': '訪問工具',
        'tool-visit-mirror': '鏡像站',
        'tool-visit-original': '原站',
        'tool-view-github': '查看GitHub',
        'tool-backend': '後端',
        'footer-text': '© 2025 Andrea Frederica. 所有權利保留.'
    },
    'en': {
        'page-title': "Andrea's Online and Offline Toolbox",
        'main-title': "Andrea's Online and Offline Toolbox",
        'intro-text': 'Welcome to Andrea\'s Toolbox, a collection of various practical online tools and open source projects to help you improve your work efficiency.',
        'online-tools-title': 'Online Tools',
        'opensource-projects-title': 'Open Source Projects',
        'tool-v2mp-title': 'Video/GIF to Live Photo',
        'tool-v2mp-desc': 'Convert videos or GIFs to live photo format',
        'tool-anh-title': 'Novel Helper',
        'tool-anh-desc': 'VSCode plugin for novel writing, providing a professional writing environment',
        'tool-anh-chat': 'Chat Component',
        'tool-lite-editor-title': 'Novel Helper Web Editor',
        'tool-lite-editor-desc': 'Lightweight online novel editor (in development)',
        'tool-imgcut-title': 'Meme Cropping Tool',
        'tool-imgcut-desc': 'Online meme image cropping tool with support for multiple sizes',
        'tool-guides-title': 'Online Checklist',
        'tool-guides-desc': 'Custom checklist tool supporting various scenarios',
        'tool-blog-title': 'Blog',
        'tool-blog-desc': 'Personal blog sharing technical insights and life experiences',
        'tool-yggdrasil-proxy-title': 'Yggdrasil API Proxy',
        'tool-yggdrasil-proxy-desc': 'Simple Yggdrasil API proxy service',
        'tool-simple-routing-title': 'Simple Routing Script',
        'tool-simple-routing-desc': 'Dynamic routing management with multi-line failover support',
        'tool-scan-draft-paper-title': 'Scan Draft Paper Template',
        'tool-scan-draft-paper-desc': 'Auto-generate monochrome draft paper templates from scans',
        'tool-paradox-mods-helper-title': 'Paradox Mods Helper',
        'tool-paradox-mods-helper-desc': 'Tampermonkey script improving Paradox Mods website experience',
        'tool-create-train-control-title': 'Create Train Control',
        'tool-create-train-control-desc': 'Minecraft Mod enabling trains to use VVVF sound effects',
        'tool-papt-title': 'Papt',
        'tool-papt-desc': 'Use familiar apt commands on pacman and yay/paru',
        'tool-patchouli-js-title': 'Patchouli.js',
        'tool-patchouli-js-desc': 'Vue-based HTML document reader supporting single and paged display',
        'tool-andrea-wsio-python-title': 'AndreaWSIO Python Host',
        'tool-andrea-wsio-python-desc': 'Python plugin host implementation for Minecraft plugin system',
        'tool-andrea-wsio-bukkit-title': 'AndreaWSIO Bukkit Host',
        'tool-andrea-wsio-bukkit-desc': 'Bukkit host implementation for AndreaWSIO',
        'tool-visit': 'Visit Tool',
        'tool-visit-mirror': 'Mirror',
        'tool-visit-original': 'Original',
        'tool-view-github': 'View on GitHub',
        'tool-backend': 'Backend',
        'footer-text': '© 2025 Andrea Frederica. All rights reserved.'
    },
    'ja': {
        'page-title': 'Andreaのオンライン・オフラインツールボックス',
        'main-title': 'Andreaのオンライン・オフラインツールボックス',
        'intro-text': 'Andreaのツールボックスへようこそ。仕事の効率を向上させる様々な実用的なオンラインツールとオープンソースプロジェクトを集めました。',
        'online-tools-title': 'オンラインツール',
        'opensource-projects-title': 'オープンソースプロジェクト',
        'tool-v2mp-title': '動画/GIFをライブ写真に変換',
        'tool-v2mp-desc': '動画やGIFをライブ写真形式に変換します',
        'tool-anh-title': '小説アシスタント',
        'tool-anh-desc': 'VSCodeの小説執筆プラグイン、プロの執筆環境を提供',
        'tool-anh-chat': 'チャットコンポーネント',
        'tool-lite-editor-title': '小説アシスタントWebエディタ',
        'tool-lite-editor-desc': '軽量なオンライン小説エディタ（開発中）',
        'tool-imgcut-title': 'ミーム画像切り抜きツール',
        'tool-imgcut-desc': '多種サイズ対応のオンラインミーム画像切り抜きツール',
        'tool-guides-title': 'オンラインチェックリスト',
        'tool-guides-desc': '様々なシーンに対応したカスタムチェックリストツール',
        'tool-blog-title': 'ブログ',
        'tool-blog-desc': '技術的な洞察と生活経験を共有する個人ブログ',
        'tool-yggdrasil-proxy-title': 'Yggdrasil APIプロキシ',
        'tool-yggdrasil-proxy-desc': 'シンプルなYggdrasil APIプロキシサービス',
        'tool-simple-routing-title': 'シンプルルーティングスクリプト',
        'tool-simple-routing-desc': 'マルチラインフェイルオーバーサポートの動的ルーティング管理',
        'tool-scan-draft-paper-title': 'スキャン草稿用紙テンプレート',
        'tool-scan-draft-paper-desc': 'スキャンから単色草稿用紙テンプレートを自動生成',
        'tool-paradox-mods-helper-title': 'Paradox Mods Helper',
        'tool-paradox-mods-helper-desc': 'Paradox Modsウェブサイト体験を向上させるTampermonkeyスクリプト',
        'tool-create-train-control-title': 'Create列車制御',
        'tool-create-train-control-desc': '列車がVVVF音声を使用できるようにするMinecraft Mod',
        'tool-papt-title': 'Papt',
        'tool-papt-desc': 'pacmanおよびyay/paruで馴染みのあるaptコマンドを使用',
        'tool-patchouli-js-title': 'Patchouli.js',
        'tool-patchouli-js-desc': 'Vue製のHTMLドキュメントリーダー、シングルページとページング表示対応',
        'tool-andrea-wsio-python-title': 'AndreaWSIO Pythonホスト',
        'tool-andrea-wsio-python-desc': 'Minecraftプラグインシステムのpythonプラグインホスト実装',
        'tool-andrea-wsio-bukkit-title': 'AndreaWSIO Bukkitホスト',
        'tool-andrea-wsio-bukkit-desc': 'AndreaWSIOのBukkitホスト実装',
        'tool-visit': 'ツールを訪問',
        'tool-visit-mirror': 'ミラー',
        'tool-visit-original': 'オリジナル',
        'tool-view-github': 'GitHubで見る',
        'tool-backend': 'バックエンド',
        'footer-text': '© 2025 Andrea Frederica. すべての権利を保有。'
    }
};

// DOM元素
const languageSelect = document.getElementById('language-select');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// 初始化函数
function init() {
    // 初始化语言
    initLanguage();
    
    // 初始化主题
    initTheme();
    
    // 初始化滚动隐藏功能
    initScrollHide();
    
    // 添加事件监听器
    addEventListeners();
}

// 初始化语言设置
function initLanguage() {
    // 从localStorage获取保存的语言，或使用浏览器语言
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language || navigator.userLanguage;
    
    // 确定要使用的语言
    let language = savedLanguage;
    if (!language) {
        // 检查浏览器语言是否支持
        if (browserLanguage.startsWith('zh')) {
            language = browserLanguage === 'zh-TW' || browserLanguage === 'zh-HK' ? 'zh-TW' : 'zh-CN';
        } else if (browserLanguage.startsWith('en')) {
            language = 'en';
        } else if (browserLanguage.startsWith('ja')) {
            language = 'ja';
        } else {
            language = 'zh-CN'; // 默认语言
        }
    }
    
    // 设置语言选择器的值
    languageSelect.value = language;
    
    // 应用语言
    applyLanguage(language);
}

// 初始化主题设置
function initTheme() {
    // 从localStorage获取保存的主题，或使用系统偏好
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 确定要使用的主题
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // 应用主题
    applyTheme(theme);
}

// 初始化滚动隐藏功能
function initScrollHide() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动且超过100px，隐藏header
            header.classList.add('header-hidden');
        } else {
            // 向上滚动或回到顶部，显示header
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
}

// 添加事件监听器
function addEventListeners() {
    // 语言选择变化事件
    languageSelect.addEventListener('change', (e) => {
        const language = e.target.value;
        applyLanguage(language);
        localStorage.setItem('language', language);
    });
    
    // 主题切换按钮点击事件
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // 只有在用户没有手动设置主题时才跟随系统
        if (!localStorage.getItem('theme')) {
            const systemTheme = e.matches ? 'dark' : 'light';
            applyTheme(systemTheme);
        }
    });
}

// 应用语言设置
function applyLanguage(language) {
    // 更新HTML lang属性
    htmlElement.setAttribute('lang', language);
    
    // 更新所有带有data-i18n属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // 更新页面标题
    const pageTitle = translations[language]['page-title'];
    if (pageTitle) {
        document.title = pageTitle;
    }
}

// 应用主题设置
function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    
    // 更新主题图标
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// 工具函数：检测移动设备
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 工具函数：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 添加页面加载动画
function addLoadingAnimation() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    toolCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// 添加键盘快捷键支持
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + L: 聚焦到语言选择器
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            languageSelect.focus();
        }
        
        // Ctrl/Cmd + T: 切换主题
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            themeToggle.click();
        }
    });
}

// 性能优化：延迟加载非关键功能
function lazyLoadNonCriticalFeatures() {
    // 延迟加载动画
    setTimeout(() => {
        addLoadingAnimation();
    }, 100);
    
    // 延迟添加键盘快捷键
    setTimeout(() => {
        addKeyboardShortcuts();
    }, 200);
}

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面发生错误:', e.error);
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    init();
    lazyLoadNonCriticalFeatures();
});

// 导出函数供其他脚本使用（如果需要）
window.Toolbox = {
    applyLanguage,
    applyTheme,
    isMobileDevice
};