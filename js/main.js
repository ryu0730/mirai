window.addEventListener('DOMContentLoaded', () => {
    const responsiveMenuBtn = document.querySelector('.responsive_btn');
    responsiveMenuBtn.addEventListener('click', menuToggle);
    window.addEventListener('scroll', handleScroll);

    // 初回実行
    handleScroll();
});

function menuToggle() {
    const headerMenuDetail = document.querySelector('.header_nav');
    headerMenuDetail.classList.toggle('menu_active');
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

