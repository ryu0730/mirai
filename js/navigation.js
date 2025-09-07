// ナビゲーション制御とパンくずナビ
document.addEventListener('DOMContentLoaded', function() {
    // ページマッピング
    const pageMapping = {
        'index.html': { name: 'トップページ', breadcrumb: ['トップページ'] },
        'message.html': { name: 'メッセージ', breadcrumb: ['トップページ', 'メッセージ'] },
        'about.html': { name: '塾について', breadcrumb: ['トップページ', '塾について'] },
        'introduction.html': { name: '講師紹介', breadcrumb: ['トップページ', '講師紹介'] },
        'everyone.html': { name: '塾生・保護者の皆さん', breadcrumb: ['トップページ', '塾生・保護者の皆さん'] },
        'voice.html': { name: '卒業生の声', breadcrumb: ['トップページ', '卒業生の声'] },
        'contact.html': { name: 'お問い合わせ', breadcrumb: ['トップページ', 'お問い合わせ'] }
    };

    // 現在のページを取得
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // アクティブなナビゲーションリンクを設定
    setActiveNavigation(currentPage);
    
    // パンくずナビを生成
    generateBreadcrumb(currentPage, pageMapping);
});

// アクティブなナビゲーションリンクを設定
function setActiveNavigation(currentPage) {
    const navLinks = document.querySelectorAll('.nav_link');
    
    navLinks.forEach(link => {
        // 既存のactiveクラスを削除
        link.classList.remove('active');
        
        // リンクのhref属性からファイル名を取得
        const linkPage = link.getAttribute('href');
        
        // 現在のページと一致する場合、activeクラスを追加
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // トップページの特別処理
        if (currentPage === 'index.html' && linkPage === 'index.html') {
            link.classList.add('active');
        }
    });
}

// パンくずナビを生成
function generateBreadcrumb(currentPage, pageMapping) {
    const pageInfo = pageMapping[currentPage] || { breadcrumb: ['トップページ', '不明なページ'] };
    
    // パンくずナビのHTMLを生成
    const breadcrumbHTML = `
        <nav class="breadcrumb">
            <div class="breadcrumb-container">
                <ol class="breadcrumb-list">
                    ${generateBreadcrumbItems(pageInfo.breadcrumb, currentPage)}
                </ol>
            </div>
        </nav>
    `;
    
    // ヘッダーの後に挿入
    const header = document.querySelector('.page_header');
    if (header && header.parentNode) {
        header.insertAdjacentHTML('afterend', breadcrumbHTML);
    }
}

// パンくずナビのアイテムを生成
function generateBreadcrumbItems(breadcrumb, currentPage) {
    return breadcrumb.map((item, index) => {
        const isLast = index === breadcrumb.length - 1;
        
        if (isLast) {
            // 最後のアイテム（現在のページ）
            return `<li class="breadcrumb-item"><span class="breadcrumb-current">${item}</span></li>`;
        } else if (index === 0) {
            // 最初のアイテム（トップページ）
            return `<li class="breadcrumb-item"><a href="index.html" class="breadcrumb-link">${item}</a></li>`;
        } else {
            // 中間のアイテム（リンク無し、将来的に追加可能）
            return `<li class="breadcrumb-item"><span class="breadcrumb-current">${item}</span></li>`;
        }
    }).join('');
}

// URLパラメータに応じてパンくずナビを動的に更新する関数
function updateBreadcrumbForDetail(detailTitle) {
    const breadcrumbList = document.querySelector('.breadcrumb-list');
    if (breadcrumbList) {
        // 詳細ページのアイテムを追加
        const detailItem = `<li class="breadcrumb-item"><span class="breadcrumb-current">${detailTitle}</span></li>`;
        breadcrumbList.insertAdjacentHTML('beforeend', detailItem);
    }
}

// パンくずナビをリセットする関数
function resetBreadcrumb() {
    const breadcrumbList = document.querySelector('.breadcrumb-list');
    if (breadcrumbList) {
        // 最後のアイテム（詳細ページ）を削除
        const lastItem = breadcrumbList.lastElementChild;
        if (lastItem && lastItem.querySelector('.breadcrumb-current')) {
            const allItems = breadcrumbList.querySelectorAll('.breadcrumb-item');
            if (allItems.length > 2) { // トップページ + 現在のページ + 詳細ページの場合
                breadcrumbList.removeChild(lastItem);
            }
        }
    }
}

// 外部から使用可能にする
window.updateBreadcrumbForDetail = updateBreadcrumbForDetail;
window.resetBreadcrumb = resetBreadcrumb;
