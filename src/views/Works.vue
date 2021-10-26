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
                title: "ポートフォリオ",
                img_src: "portfolio",
                href: "http://my-portfolio-905cf.web.app/",
                text: "グリッドで区切ったレイアウトで視覚的にわかりやすくシンプルなデザインにしました。",
                lang: "・使用言語など ： HTML / CSS / Vue.js / Javascript / bootstrapvue / firebase"
                },
                {
                title: "Weather app",
                img_src: "tenki_app",
                href: "",
                text: "TODOテキスト",
                lang: ""
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
    color: #2c3e50;
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