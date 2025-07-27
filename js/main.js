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

    scrollContainer.addEventListener('wheel', function (evt) {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY + evt.deltaX; // deltaX を追加
    });
});

