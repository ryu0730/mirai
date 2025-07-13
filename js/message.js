document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('message-container');

    const messages = [
        {
            role: '役職',
            name: '名前',
            content: '本文...'
        },
        {
            role: '役職',
            name: '名前',
            content: '本文...'
        },
        {
            role: '猿払村未来塾統括講師',
            name: '佐藤 邦洋',
            content: '<strong>「もし未来を決める神様がいるとしたら、それは今のあなたです。」</strong><br><br>' +
                'これは僕が敬愛する数学講師の荻野暢也先生が、書籍で記されていた言葉であり、僕の人生観そのものです。' +
                '未来塾のメッセージにも書かせていただきましたが、「人生は選択」です。' +
                '未来の自分を作るのは、今の自分の決断です。<br><br>' +
                '「今忙しい」「今日は疲れた」「他にやることがある」・・・' +
                'できない理由を探すのは簡単です。' +
                'できない理由を探す前に、まずやってみよう。' +
                'そうすることで、きっと明るい未来の自分が見えてくるはずです。<br><br>' +
                '今すぐ、あなたの人生は変えられます。' +
                '未来塾で一緒に頑張りましょう！'
        }
    ];

    function addMessageCard(message) {
        const card = document.createElement('div');
        card.className = 'message-card';

        card.innerHTML = `
            <div class="black-square-container">
                <div class="black-square"></div>
                <div class="role-name">
                    <h2>${message.role}</h2>
                    <h3>${message.name}</h3>
                </div>
            </div>
            <div class="message-content">
                <p>${message.content}</p>
            </div>
        `;

        messageContainer.appendChild(card);

        // 遅延して表示
        setTimeout(() => {
            card.classList.add('visible');
        }, 100);
    }

    let messageIndex = 0;

    function revealNextMessage() {
        if (messageIndex < messages.length) {
            addMessageCard(messages[messageIndex]);
            messageIndex++;
        }
    }

    // 初期ロード時に最初のメッセージを追加
    revealNextMessage();

    // スクロールイベントで次のメッセージを追加
    window.addEventListener('scroll', () => {
        const lastCard = messageContainer.lastElementChild;
        if (lastCard && lastCard.getBoundingClientRect().bottom < window.innerHeight) {
            revealNextMessage();
        }
    });
});
