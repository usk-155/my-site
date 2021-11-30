<template>
    <div id="works" class="border-end border-dark">
        <div class="box border-start border-dark">
            <h1>Works</h1>
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
                text: "当ポートフォリオサイトです。\nグリッドで区切ったレイアウトで視覚的にわかりやすくシンプルなデザインにしました。",
                lang: "・使用言語など ： HTML / CSS / Vue.js / Javascript / bootstrapvue / firebase"
                },
                {
                title: "スキー場 Weather app",
                img_src: "tenki_app",
                href: "https://tomorrow-ski.web.app/",
                text: "天気情報から行きたいスキー場の選定に役立つWEB APPです。\nOpen Weather Mapの天気APIを使用して、位置座標からスキー場の天気予報を表示ます。\nチェックイン日の指定し、リストから行きたいスキー場にチェックを入れ、OKを押すと、向こう２日の天気情報を表示してくれます。\nJavaScriptの学習の後に最初に手掛けたアプリで、ライブラリやフレームワークは使わずにJavaScriptのみで作成しました。",
                lang: "・使用言語など ： HTML / CSS / Javascript / OpenWeatherMap API"
                },
                {
                title: "TODO app",
                img_src: "logo",
                fref: "",
                text: "weatherテキスト",
                lang: ""
                },
                {
                title: "coming soon",
                img_src: "logo",
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

/* 
a {
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    text-decoration:none;
    font-size: 60px;
}
 */

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    font-size: 60px;
    margin-bottom: 0;
}


</style>


<style>

</style>