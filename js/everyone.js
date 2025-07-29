// お知らせデータ（voice.jsと同じ内容）
const newsData = [
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
    },
    {
        id: 4,
        date: '2024年9月30日',
        title: '猿払村未来塾 夏季研修報告',
        summary: '8月に実施された東京研修の報告書を公開いたします。塾生たちの貴重な学びの記録をご覧ください。',
        content: `
            <h2>猿払村未来塾 夏季東京研修報告</h2>
            <p><strong>研修期間：</strong>2024年8月5日〜8月9日（4泊5日）</p>
            <p><strong>参加者：</strong>第2期生 18名、引率教員 3名</p>
            
            <h3>研修内容</h3>
            <h4>1日目：東京大学見学・講義受講</h4>
            <ul>
                <li>工学部研究室見学</li>
                <li>「科学技術と社会」特別講義</li>
                <li>大学生との交流会</li>
            </ul>
            
            <h4>2日目：企業訪問</h4>
            <ul>
                <li>トヨタ自動車本社見学</li>
                <li>NTTドコモ R&D センター訪問</li>
                <li>最新技術デモンストレーション見学</li>
            </ul>
            
            <h4>3日目：政府機関見学</h4>
            <ul>
                <li>文部科学省訪問</li>
                <li>国会議事堂見学</li>
                <li>政策立案体験ワークショップ</li>
            </ul>
            
            <h4>4日目：研究発表準備</h4>
            <ul>
                <li>グループディスカッション</li>
                <li>プレゼンテーション準備</li>
                <li>発表練習</li>
            </ul>
            
            <h4>5日目：成果発表・帰村</h4>
            <ul>
                <li>研修成果発表会</li>
                <li>今後の活動計画策定</li>
            </ul>
            
            <h3>塾生の感想</h3>
            <p>「東京で見た最先端の技術を、猿払村でも活用できる方法を考えるきっかけになりました。」</p>
            <p>「大学の研究室で実際に実験を見せてもらい、科学への興味がさらに深まりました。」</p>
            
            <h3>今後の予定</h3>
            <p>研修で学んだ内容を活かし、12月の成果発表会に向けて各自のプロジェクトを進めていきます。</p>
        `
    }
];

// お知らせカードを生成する関数
function createNewsCard(news) {
    return `
        <div class="message-card news-card visible" data-id="${news.id}">
            <div class="message-content">
                <div class="news-date">${news.date}</div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-summary">${news.summary}</p>
                <div class="read-more">詳細を見る →</div>
            </div>
        </div>
    `;
}

// 詳細ページを生成する関数
function createDetailPage(news) {
    return `
        <div class="news-detail">
            <div class="detail-header">
                <button class="back-button" onclick="showNewsList()">← 一覧に戻る</button>
                <div class="detail-date">${news.date}</div>
            </div>
            <div class="detail-content">
                ${news.content}
            </div>
        </div>
    `;
}

// お知らせ一覧を表示する関数
function showNewsList() {
    const container = document.getElementById('news-container');
    const newsCards = newsData.map(news => createNewsCard(news)).join('');
    container.innerHTML = newsCards;
    
    // カードクリックイベントを追加
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', () => {
            const newsId = parseInt(card.dataset.id);
            showNewsDetail(newsId);
        });
        
        // タッチデバイス用のイベント処理
        card.addEventListener('touchstart', () => {
            // タッチ開始時に他のカードのホバー状態をリセット
            document.querySelectorAll('.news-card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.transform = 'translateY(0)';
                    otherCard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                }
            });
        });
        
        card.addEventListener('touchend', () => {
            // タッチ終了時にカードの状態をリセット
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            }, 150);
        });
    });
}

// お知らせ詳細を表示する関数
function showNewsDetail(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (news) {
        const container = document.getElementById('news-container');
        container.innerHTML = createDetailPage(news);
        
        // ページトップにスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ページ読み込み時にお知らせ一覧を表示
document.addEventListener('DOMContentLoaded', () => {
    showNewsList();
});
