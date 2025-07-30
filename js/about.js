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

    // 写真スライド機能
    const scrollImages = document.querySelector('.scroll-images');
    const imageBoxes = document.querySelectorAll('.image-box');
    
    if (scrollImages && imageBoxes.length > 0) {
        let currentIndex = 0;
        let isAnimating = false;
        const totalImages = imageBoxes.length;
        const imageWidth = 340; // 画像幅 + マージン (300px + 40px)

        // タッチイベント用の変数
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;



        // スライド位置を更新
        function updateSlidePosition() {
            if (isAnimating) return;
            isAnimating = true;
            
            const translateX = -currentIndex * imageWidth;
            scrollImages.style.transform = `translateX(${translateX}px)`;
            
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }

        // マウスイベント（デスクトップ用）
        scrollImages.addEventListener('mousedown', startDrag);
        scrollImages.addEventListener('mousemove', drag);
        scrollImages.addEventListener('mouseup', endDrag);
        scrollImages.addEventListener('mouseleave', endDrag);

        // タッチイベント（スマホ用）
        scrollImages.addEventListener('touchstart', handleTouchStart, { passive: false });
        scrollImages.addEventListener('touchmove', handleTouchMove, { passive: false });
        scrollImages.addEventListener('touchend', handleTouchEnd);

        function startDrag(e) {
            if (isAnimating) return;
            isDragging = true;
            startX = e.clientX;
            scrollImages.style.cursor = 'grabbing';
        }

        function drag(e) {
            if (!isDragging || isAnimating) return;
            e.preventDefault();
            currentX = e.clientX;
            const diffX = currentX - startX;
            
            if (Math.abs(diffX) > 50) { // 50px以上ドラッグしたら反応
                if (diffX > 0) {
                    // 右にドラッグ（前の画像）
                    currentIndex = Math.max(0, currentIndex - 1);
                } else {
                    // 左にドラッグ（次の画像）
                    currentIndex = Math.min(totalImages - 1, currentIndex + 1);
                }
                updateSlidePosition();
                endDrag();
            }
        }

        function endDrag() {
            isDragging = false;
            scrollImages.style.cursor = 'grab';
        }

        function handleTouchStart(e) {
            if (isAnimating) return;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            isDragging = true;
        }

        function handleTouchMove(e) {
            if (!isDragging || isAnimating) return;
            const touch = e.touches[0];
            currentX = touch.clientX;
            currentY = touch.clientY;
        }

        function handleTouchEnd(e) {
            if (!isDragging || isAnimating) return;
            
            const diffX = currentX - startX;
            const diffY = currentY - startY;
            
            // 縦スクロールの場合は無視
            if (Math.abs(diffY) > Math.abs(diffX)) {
                isDragging = false;
                return;
            }
            
            // 横方向のスワイプを検出
            if (Math.abs(diffX) > 50) { // 50px以上スワイプしたら反応
                e.preventDefault();
                
                if (diffX > 0) {
                    // 右にスワイプ（前の画像）
                    currentIndex = Math.max(0, currentIndex - 1);
                } else {
                    // 左にスワイプ（次の画像）
                    currentIndex = Math.min(totalImages - 1, currentIndex + 1);
                }
                updateSlidePosition();
            }
            
            isDragging = false;
        }

        // 初期状態でカーソルスタイルを設定
        scrollImages.style.cursor = 'grab';
    }
});
