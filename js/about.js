document.addEventListener('DOMContentLoaded', () => {
    const featureNumbers = document.querySelectorAll('.feature-number');

    function handleScroll() {
        featureNumbers.forEach(number => {
            const rect = number.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                number.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示時にもチェック
});
