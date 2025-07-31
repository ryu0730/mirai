window.addEventListener('DOMContentLoaded', () => {
    const responsiveMenuBtn = document.querySelector('.responsive_btn');
    const headerNav = document.querySelector('.header_nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    responsiveMenuBtn.addEventListener('click', menuToggle);
    window.addEventListener('scroll', handleScroll);
    
    // オーバーレイクリックでメニューを閉じる
    menuOverlay.addEventListener('click', closeMenu);
    
    // 外側クリックでメニューを閉じる
    document.addEventListener('click', (e) => {
        const isMenuOpen = headerNav.classList.contains('menu_active');
        const isClickInsideMenu = headerNav.contains(e.target);
        const isClickOnMenuButton = responsiveMenuBtn.contains(e.target);
        const isClickOnOverlay = menuOverlay.contains(e.target);
        
        if (isMenuOpen && !isClickInsideMenu && !isClickOnMenuButton && !isClickOnOverlay) {
            closeMenu();
        }
    });
    
    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && headerNav.classList.contains('menu_active')) {
            closeMenu();
        }
    });

    // 初回実行
    handleScroll();
});

function menuToggle() {
    const headerMenuDetail = document.querySelector('.header_nav');
    const responsiveBtn = document.querySelector('.responsive_btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    headerMenuDetail.classList.toggle('menu_active');
    responsiveBtn.classList.toggle('menu_active');
    menuOverlay.classList.toggle('menu_active');
    
    // メニューが開いた時はスクロールを無効化
    if (headerMenuDetail.classList.contains('menu_active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    const headerMenuDetail = document.querySelector('.header_nav');
    const responsiveBtn = document.querySelector('.responsive_btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    headerMenuDetail.classList.remove('menu_active');
    responsiveBtn.classList.remove('menu_active');
    menuOverlay.classList.remove('menu_active');
    document.body.style.overflow = '';
}

function handleScroll() {
    const header = document.querySelector('.page_header');
    const mainImg = document.querySelector('.main_img');
    const mainImgBottom = mainImg ? mainImg.offsetTop + mainImg.offsetHeight : 0;

    if (window.scrollY < mainImgBottom) {
        header.classList.remove('solid');
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
        header.classList.add('solid');
    }
}

// 横スクロールの機構
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.about-image');
    const scrollContent = document.querySelector('.scroll-images');

    if (scrollContainer) {
        scrollContainer.addEventListener('wheel', function (evt) {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY + evt.deltaX; // deltaX を追加
        });
    }
});

// 共通の浮き上がり演出機能
function initFadeInAnimation() {
    // タイトルは即座に表示
    const titleElements = document.querySelectorAll('.title .title_design, .main_title_design');
    titleElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
    
    // 講師カードも即座に表示（タイトルと同じタイミング）
    const instructorCards = document.querySelectorAll('.instructor-card');
    instructorCards.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.classList.add('visible');
    });
    
    // 対象となる要素のセレクタを定義（講師カードは除外）
    const selectors = [
        '.content > *:not(.title_design)', // タイトル以外のコンテンツ要素
        '.features .feature',
        '.news-card',
        '.fade-in-element'
    ];
    
    // 全てのセレクタに該当する要素を取得
    const elements = [];
    selectors.forEach(selector => {
        const found = document.querySelectorAll(selector);
        elements.push(...found);
    });
    
    if (elements.length === 0) return;
    
    // Intersection Observerの設定
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 各要素を監視対象に追加
    elements.forEach((element, index) => {
        // 遅延処理を追加（要素が順番に現れるように）
        setTimeout(() => {
            observer.observe(element);
        }, index * 100); // 100msずつ遅延
    });
}

// ページ読み込み完了時に演出を初期化
document.addEventListener('DOMContentLoaded', function() {
    // 少し遅延してから演出を開始
    setTimeout(initFadeInAnimation, 200);
});

