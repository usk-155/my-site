<template>
    <div id="skills" class="border-end border-dark">
        <div class="box border-start border-dark">
            <h1>Skills</h1>
        </div>
        <b-container fluid class="box border-start border-dark">
            <b-row class="skillsBody"> <!-- py-3 px-2 -->
                <b-col cols="12" class="py-4 px-4">
                    <p>　実務未経験ながら独学でスキルアップしてきました。</p>
                    <p>　実務経験がございませんので、下記チャートも業務に携わるにあたり必要十分ではないかと思いましが、学習状況等踏まえ自己評価させていただきました。</p>
                </b-col>
<!-- 1 -->
                <b-col cols="12" md="6" class="content mb-3">
                    <b-row>
                        <b-col cols="3" class="px-0">
                            <b-img center :src="require('../assets/logo_htmlcss.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">HTML&thinsp;/&thinsp;CSS</p>
                        </b-col>
                        <b-col cols="9">
                            <div class="progress">
                                <div class="progress-bar img-wrap" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                            <p>　レスポンシブデザインも含め、基本的な基本的なコーディングは問題ないと思います。使用エディターはVisualStudioCodeです。</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 2 -->
                <!-- <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_css3.png')" class="logo"></b-img>
                            <p class="name">CSS</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="progress">
                                <div class="progress-bar img-wrap" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </b-col>
                    </b-row>
                </b-col> -->
<!-- 3 -->
                <b-col cols="12" md="6" class="content mb-3">
                    <b-row>
                        <b-col cols="3" class="px-0">
                            <b-img center :src="require('../assets/logo_javascript.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">Javascript</p>
                        </b-col>
                        <b-col cols="9">
                            <div class="progress">
                                <div class="progress-bar img-wrap" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                            </div>
                            <p>　学習するにあたり、ライブラリを使用せずに天気予報アプリを作成しています。</p>
                            <p>　ウェブアプリを作成して面白さが見えてきたところです。奥が深くこれから学習すべきことが多いと感じています。</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 4 -->
                <b-col cols="12" md="6" class="content mb-3">
                    <b-row>
                        <b-col cols="3" class="px-0">
                            <b-img center :src="require('../assets/logo_bootstrap.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">Bootstrap</p>
                        </b-col>
                        <b-col cols="9">
                            <div class="progress">
                                <div class="progress-bar img-wrap" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                            </div>
                            <p>　レイアウトをスピーディーに整えるために取り入れました。</p>
                            <p>　当サイトを作成する際はBootstrapVueを使用しました。</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 5 -->
                <b-col cols="12" md="6" class="content mb-3">
                    <b-row>
                        <b-col cols="3" class="px-0">
                            <b-img center :src="require('../assets/logo_vuejs.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">Vue.js</p>
                        </b-col>
                        <b-col cols="9">
                            <div class="progress">
                                <div class="progress-bar img-wrap" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                            <p>　当サイトの作成の際に使用しています。SPAでポートフォリオを作成しました。</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 6 -->
                <b-col cols="12" md="6" class="content mb-3">
                    <b-row>
                        <b-col cols="3" class="px-0">
                            <b-img center :src="require('../assets/logo_firebase.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">firebase</p>
                        </b-col>
                        <b-col cols="9">
                            <div class="progress">
                                <div class="progress-bar img-wrap" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                            <p>　製作物をWEB上にアップロードするために使用しました。</p>
                            <p>　問い合わせページなど、バックエンド処理が必要な際はFirebase functionsで処理しています。</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>


</script>


<style scoped>
#skills {
    outline: 1px solid;
}

.box {
    outline: 1px solid;
}

.skillsBody {
    width: calc(95%);
    margin: 0 auto;
}

.content {
    margin-bottom: 10px;
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    font-size: 60px;
    margin-bottom: 0;
}
p {
    margin: 0 auto;
}

/* 
.logo {
    max-height: 100px;
    margin: auto 5px;
} */

.logo {
    max-width: 50px;
    margin: auto 5px;
}

.name {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
    text-align: justify;
    font-size: clamp(4px, 5vw, 15px);
}



.progress-bar {
    background-color: #202f55;
}


.img-wrap {
    overflow: hidden;
    position: relative;
}

.img-wrap:before {
    animation: img-wrap 2s cubic-bezier(.4, 0, .2, 1) forwards;
    background: #e9ecef;
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}

@keyframes img-wrap {
    100% {
        transform: translateX(100%);
    }
}




</style>


<style>

</style>