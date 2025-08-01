document.addEventListener('DOMContentLoaded', function() {
    // 講師ごとの個別データ
    const lecturers = [
        {
            name: '高橋美百合',
            university: '明治大学政治経済学部政治学科',
            born: '北海道札幌市',
            highschool: '北海道立札幌北高校',
            study: '日本や世界のことを政治的な面から学び、どうしたらより良い社会になるかを考え、学んでいます。',
            proud: '20時間ぶっ通しで寝れる、どこでも寝れること',
            leisure: 'アニメ、ドラマを観る、温泉に行く！',
            message: 'もう頑張れないって時があってもみんな未来塾で頑張れた経験があるから、大丈夫！！それでも頑張れなかったり、不安なことがあったら先生たちを頼ってください！絶対力になります！',
            photos: [
                'img/takahashi (1).jpg', 'img/takahashi (2).jpg', 'img/takahashi (3).jpg'
            ]
        },
        {
            name: '椿理咲子',
            university: '北海道大学法学部／京都大学院法科大学院',
            born: '北海道札幌市',
            highschool: '北海道札幌南高等学校',
            study: '法律学の勉強、司法試験の勉強',
            proud: 'いくらでも寝られる',
            leisure: '沢山寝たり、友達と美味しいご飯を食べに行ったり、カフェで勉強したり！',
            message: '夢に向かって一緒に頑張ろう！',
            photos: [
                'img/tubaki1 (1).jpg', 'img/tubaki1 (2).jpg', 'img/tubaki1 (3).jpg'
            ]
        },
        {
            name: '亀川郁花',
            university: '広島大学工学部第三類生物工学プログラム',
            born: '宮城県仙台市(小6からは北海道室蘭市)',
            highschool: '室蘭栄高校理数科',
            study: '主に化学・生物を学んでいます。バイオテクノロジー系のプログラムに進んだので、微生物学や発酵工学など生命に関わる学問も深めています。',
            proud: 'よく食べてよく笑うこと！',
            leisure: '友達と買い物やご飯に行ったり、アカペラサークルの練習をしています！1人時間も大切なので、家で大好きなディズニーの映画を観たり最新の情報を調べたりしています！',
            message: '大学生になってから、今が1番楽しい！という気持ちが毎年更新され続けていっています！何かに躓くことがあっても、挫けず今いる環境でどうすれば1番未来の自分が幸せでいられるかを考えて進んでみてください！',
            photos: [
                'img/kamegawa (1).jpg', 'img/kamegawa (2).jpg', 'img/kamegawa (3).jpg'
            ]
        },
        {
            name: '早川未梨亜',
            university: '中央大学法学部法律学科',
            born: '北海道札幌市',
            highschool: '北海道札幌南高等学校',
            study: '司法試験に合格し、弁護士として働くため、法律科目を学んでいます。',
            proud: 'バレエ、ダンス',
            leisure: '料理したり友達と喋ったりしています。',
            message: '1番楽しい青春時代をぜひ謳歌してほしいです！',
            photos: [
                'img/hayakawa (1).jpg', 'img/hayakawa (2).jpg', 'img/hayakawa (3).jpg'
            ]
        },
        {
            name: '中村凜',
            university: '北海道大学医学部保健学科放射線技術科学専攻',
            born: '北海道札幌市',
            highschool: '札幌光星高校',
            study: '放射線技師になるため、骨や筋肉の名称や被曝の影響などを学んでいます。',
            proud: 'めちゃくちゃ長い時間寝ること',
            leisure: 'バイトしたりライブ行ったり友達と遊んでいます。家でゴロゴロするのもめちゃくちゃ好きです。',
            message: '思った道に進めないこともあると思いますが、その道が間違ってるとは限りません。無理はせず、何事も全力で取り組んでほしいです！',
            photos: [
                'img/nakamura (1).jpg', 'img/nakamura (2).jpg', 'img/nakamura (3).jpg'
            ]
        },
        {
            name: '島田麻飛',
            university: '公立はこだて未来大学',
            born: '千葉県白井市',
            highschool: '江戸川学園取手高等学校',
            study: '情報系の知識をやんわーりと学びました。あと、学生が参加できる起業関係のワークショップだったり、ハッカソン、アイデアソンがあるので参加してました。',
            proud: '自分に足りてないことが見つかって必要だと思ったら、努力できること',
            leisure: '大学生になると、いつも休日みたいに過ごせます。だから、休日だからこれをする！ってものはないかもしれません。僕が趣味がない人間だからという説もあります。',
            message: '僕は勉強とは本来楽しいものであると思います。勉強をするとできなかったことができるようになるからです。できなかったことができるようになると、高揚感があると思います。楽しいと思います。自分を誇らしく思えるでしょう。しかし、勉強は苦しい、楽しくないと思う人が多いと思います。なぜでしょう。原因は２つあると思っていて、一つ目は周りと比べることだと思います。例えば、自分は九九を覚えるのに一週間かかったのに、隣のあの子は３日で覚えてるってなったら、すごく惨めな気持ちになると思います。隣のあの子がいなかったら、比べなかったら「やった！１週間かかったけど、九九覚えられたぞ！」って嬉しいだけなのに。比べることで楽しくなくなってしまう。原因の二つ目は、授業に置いて行かれることだと思います。授業で分からないことがあって、それをそのままにして次の授業を聞いたとき、高確率で理解できないと思います。授業は過去の授業で学んだことを当たり前のこととして進んでいくからです（１＋１が分からないのにひっ算ができるわけないですよね）。理解できないと、授業というのは、理解できない自分を惨めに思うだけの時間になります。ます。そりゃ、勉強が嫌いになるのは無理もないと思います。大人でもそんなこと逃げたくなると思います。まとめると、勉強が嫌いになる原因は周りと比べること、周りの授業の速度に合わせることです。だからぜひ皆さんには自分のペースで勉強を頑張るように心がけてほしいです。周りは気にせず、自分には何が足りてないんだろうって考えて、必要ならばめちゃくちゃ過去にやった授業にもっどてやり直してもいいと思います。追記：周りと比べることでやる気になったり、周りに合わせることで頑張れたりする人もいるので、この考え方だけが正解ってことはないと思います',
            photos: [
                'img/simada (1).jpg', 'img/simada (2).jpg', 'img/simada (3).jpg'
            ]
        },
        {
            name: '石倉大暉',
            university: '神戸大学農学部生命機能科学科',
            born: '滋賀県守山市',
            highschool: '県立膳所高校',
            study: '食品や薬品研究のために分子生物学や細胞生物学、有機化学などを学んでいます。',
            proud: 'アイスホッケーができます！',
            leisure: '友達と銭湯にいく。',
            message: '地元の友達を大切にしましょう！',
            photos: [
                'img/sample16.jpg', 'img/sample17.jpg', 'img/sample18.jpg'
            ]
        },
        {
            name: '八重樫菜羽',
            university: '北海道教育大学札幌校言語社会教育専攻社会科教育分野',
            born: '北海道札幌市',
            highschool: '市立札幌藻岩高等学校',
            study: '中学校社会科教員になるため、地理学を専門に教育法なども学んでいます。小学校と高校地歴公民の免許も取ります。',
            proud: 'ダンス、演劇、書道、ピアノ',
            leisure: 'アルバイト、愛犬と遊ぶ、家でダラダラ',
            message: '未来塾でみんなと話せる時間が毎回楽しみです。教える立場ではありますが、みんなから学ばせてもらってることも沢山あります。これからも楽しく学び合って行きましょう!!',
            photos: [
                'img/sample19.jpg', 'img/sample20.jpg', 'img/sample21.jpg'
            ]
        },
        {
            name: '大宮蒼子',
            university: '北海道教育大学札幌校',
            born: '根室市→むかわ町穂別→厚真町',
            highschool: '北海道苫小牧東高校',
            study: '小学校教員になるため、授業づくりの方法や学校と地域のつながりなどについて学んでいます。',
            proud: '道の駅巡りが好きで北海道はもうすぐで制覇しそうです！',
            leisure: '書道の師範資格を取得するために習字教室に行くのと、児童会館で小学生と遊んでいるのが多いです',
            message: '色々興味をもってチャレンジしたり、どこかに行って美味しいものを食べたりすると、視野が広がって楽しい日々になります！ぜひたくさんの体験・経験をしてみてください…！',
            photos: [
                'img/oomiya (1).jpg', 'img/oomiya (2).jpg', 'img/oomiya (3).jpg'
            ]
        },
        {
            name: '布川舞桜',
            university: '北海道教育大学札幌校',
            born: '北海道札幌市',
            highschool: '札幌西高校',
            study: '教員養成課程で、国語教育を専攻しています。ゼミでは近代文学を研究しています。',
            proud: 'ハンドボールを10年間やっていました！',
            leisure: '外に出て、人がいる場所に行ってみる！',
            message: '「ああもうだめだ、全部やめてしまいたい」と思っても、意外と生活は続くのだと思います。暗く辛い生活を支えるのは、めいっぱい遊んだ時間と、今まで自分が学んできたことです。いつでも何でも話しましょう！',
            photos: [
                'img/nunokawa (1).jpg', 'img/nunokawa (2).jpg', 'img/nunokawa (3).jpg'
            ]
        },
        {
            name: '児玉萌花',
            university: '北海道教育大学札幌校',
            born: '北海道芽室町',
            highschool: '北海道帯広柏葉高校',
            study: '学校の先生になるために、授業や教育について学んでいます。',
            proud: 'ファイターズ観戦です！スポーツ好きです！オセロ得意です！',
            leisure: '昼間は家でテレビ見たりごろごろして、バイトに行くことが多いです。',
            message: '目標に向かって、一緒に楽しく勉強しましょう！！',
            photos: [
                'img/kodama (1).jpeg', 'img/kodama (2).jpeg', 'img/kodama (3).jpeg'
            ]
        },
        {
            name: '羽田野友香',
            university: '北海道大学薬学部薬学科',
            born: '北海道札幌市',
            highschool: '北海道札幌北高等学校',
            study: '薬剤師になるために薬理作用や疾病に加え、生物や化学全般を主に学んでいます。',
            proud: '散歩が趣味です。2時間ならぶっ通しで歩けます',
            leisure: 'ドライブ、散歩',
            message: '思い立ったら行動！勉強に捉われすぎず、今だからこそできることに挑戦してみてください',
            photos: [
                'img/sample31.jpg', 'img/sample32.jpg', 'img/sample33.jpg'
            ]
        },
        {
            name: '大砂百恵',
            university: '小樽商科大学商学部経済学科',
            born: '北海道稚内市',
            highschool: '札幌西高校',
            study: 'アントレプレナーシップや統計学などを学んでいます。',
            proud: '高校の時、トビタテ留学JAPANを使って短期留学をしてました！',
            leisure: 'ボードゲームしてます（特にカタン）',
            message: '未来塾で色々な先生に出会ったように、社会にいる様々な人に出会って、自分の世界を広げていってください！みんなの人生を全力応援してますー！',
            photos: [
                'img/oosuna (1).jpg', 'img/oosuna (2).jpg', 'img/oosuna (3).jpg'
            ]
        },
        {
            name: '佐藤悠大',
            university: '神戸大学経営学部経営学科',
            born: '北海道札幌市',
            highschool: '北海道立札幌北高校',
            study: '会社を経営する方法を学んでいます。',
            proud: 'アイスホッケーやってました',
            leisure: '寝る！',
            message: '今これを見た時点ではみんなの可能性は無限大です。自分の思う方向にいくらでも進んでいけます。夢を持ってそこに突き進んでください！',
            photos: [
                'img/sample37.jpg', 'img/sample38.jpg', 'img/sample39.jpg'
            ]
        },
        {
            name: '遠藤梨乃',
            university: '北海道教育大学札幌校',
            born: '北海道札幌市',
            highschool: '北海道札幌東高校',
            study: '小学校教員になるため、小学校で学ぶ教科のこと、指導方法を学んでいます。',
            proud: '手先が器用',
            leisure: 'アルバイトが主だけど朝までゲームすることも',
            message: '学校の先生って実際どうなの？って思ってる人、なりたいけど迷ってる人是非声かけてね。人と話すのは好きだから全然関係ない話でも大歓迎だよー',
            photos: [
                'img/endou (1).jpg', 'img/endou (2).jpg', 'img/endou (3).jpg'
            ]
        },
        {
            name: '丸屋ちなつ',
            university: '北海道教育大学札幌校',
            born: '北海道登別市',
            highschool: '北海道札幌北高等学校',
            study: '教員になるための勉強と、もともと興味があった古典文学の研究を行っていました',
            proud: '写真を撮る',
            leisure: '映画を見る',
            message: '選択肢がたくさんあると、自分がいつか迷った時にその選択肢たちが助けてくれます。色んな人と話すこと、聞くこと、聞いてもらうこと。夢に向かって頑張ろうとするみんなの力になれればと思います。いつまでもどこからでも、応援しています。',
            photos: [
                'img/maruya (1).jpg', 'img/maruya (2).jpg', 'img/maruya (3).jpg'
            ]
        },
        {
            name: '熊坂雄大',
            university: '北海道大学／京都大学法科大学院',
            born: '北海道札幌市',
            highschool: '北海道札幌東高等学校',
            study: '法曹になるため、法律を学んでいます。',
            proud: 'いくらでも寝れること、野球',
            leisure: '勉強',
            message: '小さなこと、身近なことでもいいので、日々目標をもってコツコツ頑張っていきましょう！',
            photos: [
                'img/sample46.jpg', 'img/sample47.jpg', 'img/sample48.jpg'
            ]
        },
        {
            name: '中村菜緒',
            university: '横浜市立大学理学部理学科／横浜市立大学大学院生命医科学研究科生命医科学専攻',
            born: '北海道札幌市',
            highschool: '札幌西高校',
            study: '皮ふの細胞や脳の細胞など、それぞれの細胞が他の細胞に変化しないための体の仕組みを調べています。小さなタンパク質の構造を調べることは、がん治療や薬の開発につながります。',
            proud: '大学ではじめたダンス！',
            leisure: 'バイトしたり、友達とお出かけしたり、お家でNetflixみたり、Switchしたり…',
            message: '10代のみなさんは何にでもなれます！これからたくさんのことを経験してください！！',
            photos: [
                'img/nakamuranao (1).jpg', 'img/nakamuranao (2).jpg', 'img/nakamuranao (3).jpg'
            ]
        },
        {
            name: '角田元紀',
            university: '北海道教育大学札幌校英語教育分野',
            born: '大阪府大阪市',
            highschool: '北海道小樽潮陵高校',
            study: '中高の英語教員になるため、様々な知識・技能について学んでいます。',
            proud: '関西弁話せるで',
            leisure: '珈琲飲んでギター弾いとるかなー。友達とドライブ行くこともぼちぼち。',
            message: '未来塾を通じて、勉強することの楽しさを伝えていければなと思います！',
            photos: [
                'img/sample52.jpg', 'img/sample53.jpg', 'img/sample54.jpg'
            ]
        },
        {
            name: '佐藤佳歩',
            university: '東北大学工学部化学•バイオ工学科',
            born: '北海道札幌市',
            highschool: '北海道札幌南高校',
            study: '化学分野からの地球環境へのアプローチ',
            proud: '料理が得意です！',
            leisure: 'フルートを吹いたり（吹奏楽やってます）、お出掛けして美味しいご飯を食べたりします！',
            message: '楽しみつつ学びの多い時間にします！一緒に頑張りましょう！！',
            photos: [
                'img/satoukaho (1).jpeg', 'img/satoukaho (2).jpeg', 'img/satoukaho (3).jpeg'
            ]
        },
        {
            name: '椿旺樹',
            university: '札幌市立大学デザイン学部',
            born: '北海道札幌市',
            highschool: '札幌第一高校',
            study: 'デザインという総合的な視点から幅広い分野を学んだ上で、建築士の資格をとること。',
            proud: 'クラシックギターはかなりうまいと思います。最近はクラブDJをやってます。',
            leisure: '休日は全部バイトです！！',
            message: 'ゲームでも、スポーツでも、勉強でも、音楽でも、なんでもいいので興味のあることにとことんチャレンジして、一生懸命にやってみてください。今はよくわからなくても、いつか必ずやってて良かった、と思える日が来ます！！！',
            photos: [
                'img/tubaki2 (1).jpg', 'img/tubaki2 (2).jpg', 'img/tubaki2 (3).jpg'
            ]
        },
        {
            name: '菊地咲季',
            university: '北海道教育大学札幌校',
            born: '北海道札幌市',
            highschool: '北海道札幌東高校',
            study: '小学校教員になるため、教育方法や制度・歴史について学んでいます！',
            proud: 'バレーボールを6年間やってて今も続けてます あと金髪が似合うとよく言われます！笑',
            leisure: '部活をしたりバイトしたり友達と会ったり...時間があったら何か予定を入れてしまいます',
            message: '勉強もしつつ楽しく色々なことをお話しできたらいいなと思ってます！',
            photos: [
                'img/kikuchi (1).jpeg', 'img/kikuchi (2).jpeg', 'img/kikuchi (3).jpeg'
            ]
        }
    ];

    const instructorsList = document.getElementById('instructors-list');
    const modalContainer = document.getElementById('modal-container');
    const closeButton = document.querySelector('.close-button');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    let currentIndex = 0;

    // カードを自動生成
    function renderInstructorCards() {
        let html = '';
        lecturers.forEach(lecturer => {
            // 講師名の最初の文字を取得
            const initial = lecturer.name.charAt(0);
            
            // 高橋さんの場合は実際の写真を使用、それ以外は文字アイコン
            if (lecturer.name === '高橋美百合') {
                html += `
                    <div class="instructor-card" data-name="${lecturer.name}" data-university="${lecturer.university}">
                        <div class="profile-icon profile-photo">
                            <img src="img/takahashi (2).jpg" alt="${lecturer.name}" class="profile-image">
                        </div>
                        <div class="card-content">
                            <p class="lecturer-name">${lecturer.name}</p>
                            <p class="lecturer-university">${lecturer.university}</p>
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <div class="instructor-card" data-name="${lecturer.name}" data-university="${lecturer.university}">
                        <div class="profile-icon">
                            <span class="icon-initial">${initial}</span>
                        </div>
                        <div class="card-content">
                            <p class="lecturer-name">${lecturer.name}</p>
                            <p class="lecturer-university">${lecturer.university}</p>
                        </div>
                    </div>
                `;
            }
        });
        instructorsList.innerHTML = html;
    }
    renderInstructorCards();
    
    // 講師カード生成後に表示アニメーションを適用
    const instructorCards = document.querySelectorAll('.instructor-card');
    const isMobile = window.innerWidth <= 768;
    
    console.log('Introduction.js: DOMContentLoaded fired');
    console.log('Introduction.js: Device type:', isMobile ? 'Mobile' : 'Desktop');
    console.log('Introduction.js: Found instructor cards:', instructorCards.length);
    
    if (isMobile) {
        // モバイルでは即座に全て表示（インラインスタイルで強制）
        instructorCards.forEach((element, index) => {
            element.classList.add('visible');
            // インラインスタイルで強制的に表示
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.visibility = 'visible';
            element.style.display = 'flex';
            element.style.transition = 'none'; // トランジションを無効化
            console.log('Introduction.js: Mobile - Card', index, 'made visible immediately');
        });
        
        // 追加の安全策：少し遅延してもう一度適用
        setTimeout(() => {
            instructorCards.forEach((element, index) => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.visibility = 'visible';
                element.style.display = 'flex';
                console.log('Introduction.js: Mobile - Safety Card', index, 'forced visible');
            });
        }, 100);
    } else {
        // デスクトップでは順番に表示
        instructorCards.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
                console.log('Introduction.js: Desktop - Card', index, 'made visible');
            }, index * 150);
        });
    }

    function showLecturerDetails(index) {
        const lecturer = lecturers[index];
        document.getElementById('lecturer-name').textContent = lecturer.name;
        document.getElementById('lecturer-history').innerHTML = `
            <tr><th>生まれ</th><td>${lecturer.born}</td></tr>
            <tr><th>出身高校</th><td>${lecturer.highschool}</td></tr>
            <tr><th>大学</th><td>${lecturer.university}</td></tr>
        `;
        document.getElementById('lecturer-study').textContent = lecturer.study;
        document.getElementById('lecturer-leisure').textContent = lecturer.leisure;
        document.getElementById('lecturer-proud').textContent = lecturer.proud;
        document.getElementById('lecturer-message').textContent = lecturer.message;
        
        // 画像のsrcを設定し、表示する
        const photo1 = document.getElementById('lecturer-photo1');
        const photo2 = document.getElementById('lecturer-photo2');
        const photo3 = document.getElementById('lecturer-photo3');
        
        photo1.src = lecturer.photos[0];
        photo1.style.display = 'block';
        photo2.src = lecturer.photos[1];
        photo2.style.display = 'block';
        photo3.src = lecturer.photos[2];
        photo3.style.display = 'block';

        prevButton.style.display = index === 0 ? 'none' : 'flex';
        nextButton.style.display = index === instructorCards.length - 1 ? 'none' : 'flex';
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