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
    const aboutImage = document.querySelector('.about-image'); // 親コンテナを取得
    
    if (scrollImages && imageBoxes.length > 0 && aboutImage) {
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
        let dragDistance = 0;

        // スライド位置を更新
        function updateSlidePosition(animated = true) {
            const translateX = -currentIndex * imageWidth;
            
            if (animated) {
                scrollImages.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                isAnimating = true;
                setTimeout(() => {
                    isAnimating = false;
                }, 300);
            } else {
                scrollImages.style.transition = 'none';
                isAnimating = false;
            }
            
            scrollImages.style.transform = `translate3d(${translateX}px, 0, 0)`;
        }

        // リアルタイムでドラッグ位置を更新
        function updateDragPosition(diffX) {
            const baseTranslateX = -currentIndex * imageWidth;
            const newTranslateX = baseTranslateX + diffX;
            scrollImages.style.transition = 'none';
            scrollImages.style.transform = `translate3d(${newTranslateX}px, 0, 0)`;
        }

        // マウスイベント（デスクトップ用） - 親コンテナにも追加
        aboutImage.addEventListener('mousedown', startDrag);
        aboutImage.addEventListener('mousemove', drag);
        aboutImage.addEventListener('mouseup', endDrag);
        aboutImage.addEventListener('mouseleave', endDrag);
        
        // scroll-images要素にも追加（従来通り）
        scrollImages.addEventListener('mousedown', startDrag);
        scrollImages.addEventListener('mousemove', drag);
        scrollImages.addEventListener('mouseup', endDrag);
        scrollImages.addEventListener('mouseleave', endDrag);

        // タッチイベント（スマホ用） - 親コンテナにも追加
        aboutImage.addEventListener('touchstart', handleTouchStart, { passive: false });
        aboutImage.addEventListener('touchmove', handleTouchMove, { passive: false });
        aboutImage.addEventListener('touchend', handleTouchEnd);
        
        // scroll-images要素にも追加（従来通り）
        scrollImages.addEventListener('touchstart', handleTouchStart, { passive: false });
        scrollImages.addEventListener('touchmove', handleTouchMove, { passive: false });
        scrollImages.addEventListener('touchend', handleTouchEnd);

        // マウスホイールによるスクロールを無効化
        function preventWheelScroll(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // ホイールイベントを無効化（両方のコンテナに適用）
        aboutImage.addEventListener('wheel', preventWheelScroll, { passive: false });
        scrollImages.addEventListener('wheel', preventWheelScroll, { passive: false });
        
        // キーボード操作も無効化（矢印キーなど）
        function preventKeyboardScroll(e) {
            // 矢印キー、ページアップ/ダウン、ホーム/エンドキーを無効化
            if ([37, 38, 39, 40, 33, 34, 35, 36].includes(e.keyCode)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
        
        // フォーカスされた時のキーボード操作を無効化
        aboutImage.addEventListener('keydown', preventKeyboardScroll);
        scrollImages.addEventListener('keydown', preventKeyboardScroll);

        function startDrag(e) {
            if (isAnimating) return;
            isDragging = true;
            startX = e.clientX;
            dragDistance = 0;
            scrollImages.style.cursor = 'grabbing';
            aboutImage.style.cursor = 'grabbing'; // 親コンテナにも適用
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            currentX = e.clientX;
            dragDistance = currentX - startX;
            
            // リアルタイムでドラッグ位置を反映
            updateDragPosition(dragDistance);
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            scrollImages.style.cursor = 'grab';
            aboutImage.style.cursor = 'grab'; // 親コンテナにも適用
            
            // ドラッグ距離に基づいてスライドを決定
            const threshold = 80; // 80px以上でスライド
            
            if (Math.abs(dragDistance) > threshold) {
                if (dragDistance > 0) {
                    // 右にドラッグ（前の画像）
                    currentIndex = Math.max(0, currentIndex - 1);
                } else {
                    // 左にドラッグ（次の画像）
                    currentIndex = Math.min(totalImages - 1, currentIndex + 1);
                }
            }
            
            // 最終位置にアニメーション
            updateSlidePosition(true);
            dragDistance = 0;
        }

        function handleTouchStart(e) {
            if (isAnimating) return;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            dragDistance = 0;
            isDragging = true;
        }

        function handleTouchMove(e) {
            if (!isDragging) return;
            const touch = e.touches[0];
            currentX = touch.clientX;
            currentY = touch.clientY;
            
            const diffX = currentX - startX;
            const diffY = currentY - startY;
            
            // 縦スクロールの場合は無視
            if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 20) {
                isDragging = false;
                updateSlidePosition(true); // 元の位置に戻す
                return;
            }
            
            // 横方向のドラッグ処理
            if (Math.abs(diffX) > 10) {
                e.preventDefault();
                dragDistance = diffX;
                updateDragPosition(dragDistance);
            }
        }

        function handleTouchEnd(e) {
            if (!isDragging) return;
            
            const threshold = 80; // 80px以上でスライド
            
            if (Math.abs(dragDistance) > threshold) {
                e.preventDefault();
                
                if (dragDistance > 0) {
                    // 右にスワイプ（前の画像）
                    currentIndex = Math.max(0, currentIndex - 1);
                } else {
                    // 左にスワイプ（次の画像）
                    currentIndex = Math.min(totalImages - 1, currentIndex + 1);
                }
            }
            
            // 最終位置にアニメーション
            updateSlidePosition(true);
            isDragging = false;
            dragDistance = 0;
        }

        // 初期状態でカーソルスタイルを設定
        scrollImages.style.cursor = 'grab';
        aboutImage.style.cursor = 'grab'; // 親コンテナにも適用
        
        // キーボードフォーカスを無効化
        aboutImage.setAttribute('tabindex', '-1');
        scrollImages.setAttribute('tabindex', '-1');
        
        // 初期位置を設定
        updateSlidePosition(false);
    }
});
