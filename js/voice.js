// 卒業生の声データ
const voiceData = [
    {
        id: 1,
        name: '田中 優香',
        role: '第1期生',
        currentStatus: '北海道大学工学部2年',
        graduationYear: '2024年3月卒業',
        image: '', // 後で写真のパスを設定
        message: `猿払村未来塾での3年間で、将来への明確なビジョンを持つことができました。特に東京での研修で大学の研究室を見学したり、企業の最新技術に触れたりする中で、「工学の力で地域の課題を解決したい」という目標が生まれました。現在は北海道大学工学部で情報工学を専攻し、将来は猿払村に戻って地域の発展に貢献したいと考えています。`,
        detailedMessage: `
            <h3>未来塾に入ったきっかけ</h3>
            <p>中学2年生の時、将来何をしたいのか全く分からない状態でした。そんな時に猿払村未来塾の募集を知り、「何か変わるきっかけになれば」と思って応募しました。</p>
            
            <h3>未来塾での学び</h3>
            <p>特に印象に残っているのは、東京での研修です。大学の研究室を見学したり、企業の最新技術に触れたりする中で、「工学の力で地域の課題を解決したい」という目標が生まれました。</p>
            
            <h4>具体的な活動</h4>
            <ul>
                <li>地域の農業課題についてのフィールドワーク</li>
                <li>IoT技術を活用した解決策の提案</li>
                <li>プレゼンテーション能力の向上</li>
                <li>大学教授や研究者との交流</li>
            </ul>
            
            <h3>現在の活動</h3>
            <p>現在は北海道大学工学部で情報工学を専攻しています。大学での学びを活かして、将来は猿払村に戻り、地域の発展に貢献したいと考えています。</p>
            
            <h3>後輩へのメッセージ</h3>
            <p>未来塾は、自分の可能性を広げてくれる場所です。最初は不安もありましたが、仲間と共に学び、成長できる環境があります。ぜひ積極的にチャレンジしてください。</p>
        `
    },
    {
        id: 2,
        name: '佐藤 健太',
        role: '第1期生',
        currentStatus: '株式会社サルフツテック代表',
        graduationYear: '2024年3月卒業',
        image: '', // 後で写真のパスを設定
        message: `未来塾で学んだ起業家精神を活かし、高校卒業後に地域密着型のIT企業を立ち上げました。「地域の課題をビジネスで解決する」という考え方を未来塾で学び、特に高校3年生の時の起業家講演会がきっかけで自分も挑戦してみたいと思うようになりました。現在は猿払村を拠点として、宗谷地域全体のDX化を支援しています。`,
        detailedMessage: `
            <h3>起業を決意したきっかけ</h3>
            <p>未来塾での3年間で、「地域の課題をビジネスで解決する」という考え方を学びました。特に高校3年生の時の起業家講演会がきっかけで、自分も挑戦してみたいと思うようになりました。</p>
            
            <h3>未来塾での経験が活きている点</h3>
            <ul>
                <li><strong>課題発見力：</strong>地域のフィールドワークで培った観察力</li>
                <li><strong>プレゼンテーション力：</strong>投資家への提案に活用</li>
                <li><strong>ネットワーク：</strong>未来塾で出会った講師陣からの継続的なアドバイス</li>
                <li><strong>技術力：</strong>プログラミングやWebデザインのスキル</li>
            </ul>
            
            <h3>現在の事業内容</h3>
            <p>株式会社サルフツテックでは、以下のような事業を展開しています：</p>
            <ul>
                <li>地域企業向けのWebサイト制作</li>
                <li>観光情報発信アプリの開発</li>
                <li>農業IoTシステムの導入支援</li>
                <li>小中学生向けプログラミング教室の運営</li>
            </ul>
            
            <h3>今後の展望</h3>
            <p>猿払村を拠点として、宗谷地域全体のDX化を支援していきたいと考えています。また、未来塾の後輩たちにも実際の仕事を通じて学習機会を提供していきたいです。</p>
            
            <h3>未来塾生へのアドバイス</h3>
            <p>失敗を恐れずに、どんどん挑戦してください。未来塾は失敗から学べる安全な環境です。そこで得た経験は、必ず将来の糧になります。</p>
        `
    },
    {
        id: 3,
        name: '鈴木 美咲',
        role: '第1期生',
        currentStatus: '札幌医科大学医学部1年',
        graduationYear: '2024年3月卒業',
        image: '', // 後で写真のパスを設定
        message: `地域医療の現状を学び、医師を目指すようになりました。未来塾で地域医療についてのフィールドワークを行い、猿払村の医療現状を知る中で、「この地域の医療を支えたい」という気持ちが芽生えました。現在は札幌医科大学で基礎医学を学び、将来は地域医療に貢献できる医師になりたいと考えています。`,
        detailedMessage: `
            <h3>医師を目指すようになったきっかけ</h3>
            <p>中学生の頃は、将来の職業について具体的に考えたことがありませんでした。しかし、未来塾で地域医療についてのフィールドワークを行い、猿払村の医療現状を知る中で、「この地域の医療を支えたい」という気持ちが芽生えました。</p>
            
            <h3>未来塾での学習内容</h3>
            <h4>医療関連プロジェクト</h4>
            <ul>
                <li>地域の高齢化と医療ニーズの調査</li>
                <li>遠隔医療システムの可能性調査</li>
                <li>予防医学の重要性についての研究発表</li>
                <li>札幌の病院での見学実習</li>
            </ul>
            
            <h4>基礎学力の向上</h4>
            <ul>
                <li>数学・理科の発展的学習</li>
                <li>医学英語の基礎学習</li>
                <li>論文の読み方・書き方の習得</li>
            </ul>
            
            <h3>受験対策と成果</h3>
            <p>未来塾の講師陣による個別指導のおかげで、医学部受験に必要な学力を効率的に身につけることができました。特に、研究発表の経験が面接試験で大きな武器になりました。</p>
            
            <h3>大学での学び</h3>
            <p>現在は札幌医科大学で基礎医学を学んでいます。未来塾で培った「地域の課題を解決する」という視点を持ち続けながら、将来は地域医療に貢献できる医師になりたいと考えています。</p>
            
            <h3>後輩へのメッセージ</h3>
            <p>未来塾は、自分の「やりたいこと」を見つけられる場所です。様々な分野の専門家と出会い、実際の現場を体験することで、きっと自分なりの目標が見えてくると思います。</p>
        `
    },
    {
        id: 4,
        name: '山田 直樹',
        role: '第1期生',
        currentStatus: '北海道教育大学2年',
        graduationYear: '2024年3月卒業',
        image: '', // 後で写真のパスを設定
        message: `未来塾での経験をきっかけに教育に興味を持ち、現在は北海道教育大学で学んでいます。3年間の活動を通じて、「教育こそが地域の未来を創る」ということを実感し、教師を志すようになりました。将来は猿払村をはじめとする宗谷地域の中学校で教員として働き、自分が受けたような「探究型学習」を次の世代に伝えていきたいです。`,
        detailedMessage: `
            <h3>教育への関心</h3>
            <p>未来塾に参加する前は、特に将来の職業について深く考えていませんでした。しかし、3年間の活動を通じて、「教育こそが地域の未来を創る」ということを実感し、教師を志すようになりました。</p>
            
            <h3>印象に残った活動</h3>
            <h4>小学校でのプログラミング授業サポート</h4>
            <p>高校2年生の時、猿払小学校でプログラミング授業のサポートをする機会がありました。子どもたちの目の輝きや、理解した時の喜びの表情を見て、教育の素晴らしさを感じました。</p>
            
            <h4>学習塾での指導経験</h4>
            <ul>
                <li>中学生への数学・理科指導</li>
                <li>学習意欲向上のための工夫</li>
                <li>個別カウンセリングの実施</li>
                <li>保護者との連携</li>
            </ul>
            
            <h3>大学での学び</h3>
            <p>現在は北海道教育大学で中学校教員免許（数学・理科）の取得を目指しています。また、ICT教育やアクティブラーニングについても深く学んでいます。</p>
            
            <h4>研究テーマ</h4>
            <p>「地方における探究型学習の効果的な実践方法」について研究しています。未来塾での経験を学術的に分析し、他の地域でも応用できる教育プログラムの開発を目指しています。</p>
            
            <h3>将来の目標</h3>
            <p>大学卒業後は、猿払村をはじめとする宗谷地域の中学校で教員として働きたいと考えています。そして、自分が受けたような「探究型学習」を次の世代に伝えていきたいです。</p>
            
            <h3>未来塾への感謝</h3>
            <p>未来塾は私にとって、単なる学習の場ではなく、「人生の方向性」を見つけられる場所でした。多様な経験と出会いが、今の自分を形作っています。</p>
            
            <h3>現在の塾生へのメッセージ</h3>
            <p>今は将来が見えなくても大丈夫です。未来塾での一つ一つの経験が、きっと将来への道筋を示してくれます。仲間と共に、思いっきり学び、挑戦してください。</p>
        `
    }
];

// 卒業生の声カードを生成する関数
function createVoiceCard(voice) {
    return `
        <div class="message-card visible" data-id="${voice.id}">
            <div class="black-square-container">
                <div class="black-square"></div>
                <div class="role-name">
                    <h2>${voice.role}</h2>
                    <h3>${voice.name}</h3>
                </div>
            </div>
            <div class="message-content">
                <p><strong>${voice.currentStatus}</strong></p>
                <p><strong>${voice.graduationYear}</strong></p>
                <p>${voice.message}</p>
            </div>
        </div>
    `;
}

// 詳細ページを生成する関数
function createDetailPage(voice) {
    return `
        <div class="news-detail">
            <div class="detail-header">
                <button class="back-button" onclick="showVoiceList()">← 一覧に戻る</button>
                <div class="detail-date">${voice.graduationYear}</div>
            </div>
            <div class="detail-content">
                <h2>${voice.name}さんからのメッセージ</h2>
                <p><strong>${voice.role} | ${voice.currentStatus}</strong></p>
                ${voice.detailedMessage}
            </div>
        </div>
    `;
}

// 卒業生の声一覧を表示する関数
function showVoiceList() {
    const container = document.getElementById('voice-container');
    const voiceCards = voiceData.map(voice => createVoiceCard(voice)).join('');
    container.innerHTML = voiceCards;
    
    // タイトルセクションを表示
    document.body.classList.remove('detail-view');
    
    // カードクリックイベントを追加
    document.querySelectorAll('.message-card').forEach(card => {
        card.addEventListener('click', () => {
            const voiceId = parseInt(card.dataset.id);
            showVoiceDetail(voiceId);
        });
    });
    
    // スクロールアニメーション
    const cards = document.querySelectorAll('.message-card');
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
    
    cards.forEach(card => {
        card.classList.remove('visible');
        observer.observe(card);
    });
}

// 卒業生の声詳細を表示する関数
function showVoiceDetail(voiceId) {
    const voice = voiceData.find(item => item.id === voiceId);
    if (voice) {
        const container = document.getElementById('voice-container');
        container.innerHTML = createDetailPage(voice);
        
        // タイトルセクションを非表示
        document.body.classList.add('detail-view');
        
        // ページトップにスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ページ読み込み時に卒業生の声一覧を表示
document.addEventListener('DOMContentLoaded', () => {
    showVoiceList();
});
