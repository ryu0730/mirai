// ホーム画面用お知らせデータ（everyoneページと同じデータを使用）
const homeNewsData = [
    {
        id: 1,
        date: '2024年12月15日',
        title: '猿払村未来塾 第3期生募集開始のお知らせ',
        summary: '2025年度猿払村未来塾の第3期生の募集を開始いたします。応募締切は2025年1月31日です。',
        content: `
            <h2>猿払村未来塾 第3期生募集開始</h2>
            <p><strong>募集期間：</strong>2024年12月15日〜2025年1月31日</p>
            <p><strong>対象：</strong>中学1年生〜3年生</p>
            <p><strong>定員：</strong>20名</p>
            
            <h3>応募方法</h3>
            <p>以下の書類を猿払村教育委員会まで提出してください：</p>
            <ul>
                <li>申込書（学校で配布）</li>
                <li>志望動機書（400字程度）</li>
                <li>保護者同意書</li>
            </ul>
            
            <h3>選考方法</h3>
            <p>書類選考および面接により選考いたします。</p>
            <p>面接日：2025年2月10日（土）</p>
            
            <h3>お問い合わせ</h3>
            <p>猿払村教育委員会 TEL: 01635-2-3011</p>
        `
    },
    {
        id: 2,
        date: '2024年11月28日',
        title: '猿払村未来塾 成果発表会開催のお知らせ',
        summary: '第2期生による研究成果発表会を12月20日に開催いたします。地域の皆様もぜひご参加ください。',
        content: `
            <h2>猿払村未来塾 第2期生成果発表会</h2>
            <p><strong>開催日時：</strong>2024年12月20日（金）14:00〜16:00</p>
            <p><strong>会場：</strong>猿払村公民館 大ホール</p>
            <p><strong>参加費：</strong>無料</p>
            
            <h3>発表内容</h3>
            <p>第2期生が1年間取り組んできた研究プロジェクトの成果を発表します：</p>
            <ul>
                <li>「猿払村の観光資源を活用した地域活性化プラン」</li>
                <li>「IoTを活用した農業の効率化」</li>
                <li>「高齢者支援システムの開発」</li>
                <li>「再生可能エネルギーによる持続可能な村づくり」</li>
            </ul>
            
            <h3>申込方法</h3>
            <p>事前申込不要です。当日直接会場にお越しください。</p>
            
            <h3>お問い合わせ</h3>
            <p>猿払村教育委員会 TEL: 01635-2-3011</p>
        `
    },
    {
        id: 3,
        date: '2024年10月15日',
        title: '猿払村未来塾 特別講演会開催',
        summary: '東京大学教授による「未来の科学技術と地方創生」をテーマとした特別講演会を開催いたします。',
        content: `
            <h2>特別講演会「未来の科学技術と地方創生」</h2>
            <p><strong>開催日時：</strong>2024年11月15日（金）19:00〜20:30</p>
            <p><strong>会場：</strong>猿払村公民館 研修室</p>
            <p><strong>講師：</strong>東京大学大学院工学系研究科 田中一郎教授</p>
            
            <h3>講演内容</h3>
            <p>AI、IoT、再生可能エネルギーなどの最新技術が地方創生にどのように活用できるかについて、具体的な事例を交えながらお話しいただきます。</p>
            
            <h3>対象</h3>
            <ul>
                <li>猿払村未来塾生・保護者</li>
                <li>地域住民の皆様</li>
                <li>教育関係者</li>
            </ul>
            
            <h3>申込方法</h3>
            <p>猿払村教育委員会まで電話またはメールでお申し込みください。</p>
            <p>定員：50名（先着順）</p>
            
            <h3>お問い合わせ</h3>
            <p>猿払村教育委員会</p>
            <p>TEL: 01635-2-3011</p>
            <p>Mail: kodomomirai@sarufutsu.lg.jp</p>
        `
    }
];

// ホーム画面用お知らせカードを生成する関数（簡潔版）
function createHomeNewsCard(news) {
    return `
        <div class="news_item" onclick="showHomeNewsDetail(${news.id})">
            <p class="news_date">${news.date}</p>
            <p class="news_text">${news.title}</p>
        </div>
    `;
}

// ホーム画面お知らせ詳細を表示する関数（everyoneページへリダイレクト）
function showHomeNewsDetail(newsId) {
    // everyoneページの詳細表示に遷移（参照元をホームページとして記録）
    window.location.href = `everyone.html?newsId=${newsId}&from=home`;
}

// ホーム画面お知らせ一覧を表示する関数
function showHomeNewsList() {
    const container = document.getElementById('home-news-container');
    if (container) {
        // 最新3件のお知らせのみ表示
        const latestNews = homeNewsData.slice(0, 3);
        const newsCards = latestNews.map(news => createHomeNewsCard(news)).join('');
        container.innerHTML = newsCards;
    }
}

// ページ読み込み時にホーム画面お知らせ一覧を表示
document.addEventListener('DOMContentLoaded', () => {
    showHomeNewsList();
});
