<template>
    <div id="works" class="border-end border-dark">
        <div class="box border-start border-dark">
            <h1>Works</h1>
        </div>
        <div class="box border-start border-dark">
            <div class="overview py-3 px-5">
                <p class="mb-2">　制作物を掲載しています。アプリの概要とリンクを貼っていますので、是非ご覧ください。githubにもアップロードしていますので下記githubアイコンからご覧ください。</p>
                <div class="github mb-2">
                    <a href="https://github.com/usk-155" target="_blank" rel="noopener noreferrer"><img src="@/assets/github.png" class="githubLogo"></a>
                </div>
            </div>
        </div>
        <b-container fluid>
            <b-row>
                <Product class="product"
                    v-for="content in contents"
                    v-bind:key="content.id"
                    v-bind:content="content" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
    name: 'Works',
    components: {
        Product,
    },
    data () {
        return {
            contents:[
                {
                title: "ポートフォリオサイト",
                img_src: "portfolio",
                href: "http://my-portfolio-905cf.web.app/",
                text: "　当ポートフォリオサイトです。\n　グリッドで区切ったレイアウトで視覚的にわかりやすくシンプルなデザインにしました。Bootstrap-Vueを使用してレスポンシブデザインにも対応しています。",
                lang: "・使用言語など：\n　HTML / CSS / Vue.js / Javascript / bootstrapvue / firebase"
                },
                {
                title: "スキー場 Weather app",
                img_src: "tenki_app",
                href: "https://tomorrow-ski.web.app/",
                text: "　天気情報から行きたいスキー場の選定に役立つWEB APPです。\n　Open Weather Mapの天気APIを使用して、位置座標からスキー場の天気予報を表示ます。\n　チェックイン日の指定し、リストから行きたいスキー場にチェックを入れ、OKを押すと、向こう２日の天気情報を表示してくれます。\n　JavaScriptの学習の後に最初に手掛けたアプリで、ライブラリやフレームワークは使わずにJavaScriptのみで作成しました。",
                lang: "・使用言語など：\n　HTML / CSS / Javascript / OpenWeatherMap API"
                },
                {
                title: "coming soon",
                img_src: "coming_soon",
                fref: "",
                text: "",
                lang: ""
                },
                {
                title: "coming soon",
                img_src: "coming_soon",
                text: ""
                }
            ]
        }
    }
}

</script>


<style scoped>

#works {
    outline: 1px solid;
}

.box {
    outline: 1px solid;
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    font-size: 60px;
    margin-bottom: 0;
}

.github {
    text-align: center;
}
.githubLogo {
    height: 40px;
}

</style>


<style>

</style>