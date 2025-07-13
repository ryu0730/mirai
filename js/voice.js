document.addEventListener('DOMContentLoaded', () => {
    const voiceContainer = document.getElementById('voice-container');

    const voices = [
        {
            role: '役職',
            name: '名前',
            content: '卒業生の声...'
        },
        {
            role: '役職',
            name: '名前',
            content: '卒業生の声...'
        },
        {
            role: '役職',
            name: '名前',
            content: '卒業生の声...'
        }
        // さらに卒業生の声を追加
    ];

    function addVoiceCard(voice) {
        const card = document.createElement('div');
        card.className = 'message-card'; // message-cardのスタイルをそのまま使用

        card.innerHTML = `
            <div class="black-square-container">
                <div class="black-square"></div>
                <div class="role-name">
                    <h2>${voice.role}</h2>
                    <h3>${voice.name}</h3>
                </div>
            </div>
            <div class="message-content">
                <p>${voice.content}</p>
            </div>
        `;

        voiceContainer.appendChild(card);

        // 遅延して表示
        setTimeout(() => {
            card.classList.add('visible');
        }, 100);
    }

    let voiceIndex = 0;

    function revealNextVoice() {
        if (voiceIndex < voices.length) {
            addVoiceCard(voices[voiceIndex]);
            voiceIndex++;
        }
    }

    // 初期ロード時に最初の声を追加
    revealNextVoice();

    // スクロールイベントで次の声を追加
    window.addEventListener('scroll', () => {
        const lastCard = voiceContainer.lastElementChild;
        if (lastCard && lastCard.getBoundingClientRect().bottom < window.innerHeight) {
            revealNextVoice();
        }
    });
});
