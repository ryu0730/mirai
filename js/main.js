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
    
    // 講師カードは introduction.js で処理するため、ここでは処理しない
    // const instructorCards = document.querySelectorAll('.instructor-card');
    // const isMobile = window.innerWidth <= 768;
    
    // console.log('Device type:', isMobile ? 'Mobile' : 'Desktop');
    // console.log('Found instructor cards:', instructorCards.length);
    
    // 講師カードの処理はintroduction.jsで行うため、この部分は無効化
    /*
    instructorCards.forEach((element, index) => {
        if (isMobile) {
            // スマホでは遅延なしで即座に全て表示
            element.classList.add('visible');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.visibility = 'visible';
            element.style.display = 'flex';
            console.log('Mobile: Card', index, 'made visible immediately');
        } else {
            // デスクトップでは少し遅延を入れて表示
            setTimeout(() => {
                element.classList.add('visible');
                console.log('Desktop: Card', index, 'made visible');
            }, index * 150); // 150msずつ遅延
        }
    });
    */
    
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
    
    // Intersection Observerの設定（講師カード以外用）
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
    
    // 各要素を監視対象に追加（講師カードは除外）
    elements.forEach((element, index) => {
        // 講師カードでない要素のみObserverに追加
        if (!element.classList.contains('instructor-card')) {
            setTimeout(() => {
                observer.observe(element);
            }, index * 100); // 100msずつ遅延
        }
    });
}

// ページ読み込み完了時に演出を初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');
    // モバイルでは遅延なし、デスクトップのみ少し遅延
    if (window.innerWidth <= 768) {
        initFadeInAnimation(); // モバイルは即座に実行
    } else {
        setTimeout(initFadeInAnimation, 200); // デスクトップのみ遅延
    }
});

// スマホ用の追加の安全策は講師カード用のため削除
// window.addEventListener('load', function() {
//     console.log('Window load fired');
//     // ページが完全に読み込まれた後、スマホで講師カードが表示されていない場合に強制表示
//     if (window.innerWidth <= 768) {
//         setTimeout(() => {
//             const instructorCards = document.querySelectorAll('.instructor-card:not(.visible)');
//             console.log('Safety check: Found', instructorCards.length, 'cards not yet visible');
//             instructorCards.forEach((element, index) => {
//                 setTimeout(() => {
//                     element.classList.add('visible');
//                     element.style.opacity = '1';
//                     element.style.transform = 'translateY(0)';
//                     element.style.visibility = 'visible';
//                     console.log('Safety: Card', index, 'forced visible');
//                 }, index * 30); // 30msに短縮
//             });
//         }, 500);
//     }
// });

// 講師カード関連の処理は全てintroduction.jsで行うため、main.jsからは削除
// 最終的な安全策（タッチイベント）も削除
// document.addEventListener('touchstart', function() {
//     console.log('Touch detected');
//     const instructorCards = document.querySelectorAll('.instructor-card:not(.visible)');
//     if (instructorCards.length > 0) {
//         console.log('Touch fallback: Making', instructorCards.length, 'cards visible');
//         instructorCards.forEach((element, index) => {
//             setTimeout(() => {
//                 element.classList.add('visible');
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//                 element.style.visibility = 'visible';
//             }, index * 20); // 20msに短縮してすぐに表示
//         });
//     }
// }, { once: true }); // 一度だけ実行

