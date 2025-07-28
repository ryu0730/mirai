document.addEventListener('DOMContentLoaded', function() {
    const instructorCards = document.querySelectorAll('.instructor-card');
    const modalContainer = document.getElementById('modal-container');
    const closeButton = document.querySelector('.close-button');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    let currentIndex = 0;

    function showLecturerDetails(index) {
        const card = instructorCards[index];
        const name = card.getAttribute('data-name');
        const university = card.getAttribute('data-university');

        // モーダルに情報を設定
        document.getElementById('lecturer-name').textContent = name;
        document.getElementById('lecturer-history').innerHTML = `
            <tr><th>生まれ</th><td>〇〇県〇〇市</td></tr>
            <tr><th>出身高校</th><td>〇〇高校</td></tr>
            <tr><th>大学</th><td>${university}</td></tr>
        `;

        // 仮のデータ
        document.getElementById('lecturer-study').textContent = "A. コンピューターサイエンス";
        document.getElementById('lecturer-leisure').textContent = "A. 読書とハイキング";
        document.getElementById('lecturer-proud').textContent = "A. 学会での受賞";
        document.getElementById('lecturer-message').textContent = "A. 学びを楽しんでください！";

        // 画像も仮のデータ
        document.getElementById('lecturer-photo1').src = "path/to/photo1.jpg";
        document.getElementById('lecturer-photo2').src = "path/to/photo2.jpg";
        document.getElementById('lecturer-photo3').src = "path/to/photo3.jpg";

        // ボタンの表示/非表示を制御
        prevButton.style.display = index === 0 ? 'none' : 'flex';
        nextButton.style.display = index === instructorCards.length - 1 ? 'none' : 'flex';

        // モーダルを表示
        modalContainer.style.display = 'flex';
    }

    instructorCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            showLecturerDetails(index);
        });
    });

    // バツ印をクリックしてモーダルを閉じる
    closeButton.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });

    // 次へ進むボタンをクリックして次の講師の詳細を表示
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % instructorCards.length; // 次のインデックスを計算
        showLecturerDetails(currentIndex);
    });

    // 前へ戻るボタンをクリックして前の講師の詳細を表示
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + instructorCards.length) % instructorCards.length; // 前のインデックスを計算
        showLecturerDetails(currentIndex);
    });

    // モーダルの背景をクリックして閉じる
    modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});
