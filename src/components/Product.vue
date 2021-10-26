<template>
<b-col cols="12" md="6" class="box border-top border-start border-dark px-4 pt-2">
    <h2>{{ content.title }}</h2>
    <a :href="content.href"><img :src="require(`@/assets/${content.img_src}.png`)"></a>
    <p class="text">{{ content.text }}</p>
    <p class="lang">{{ content.lang }}</p>
</b-col>
</template>

<script>
export default {
    name: 'Product',
    props: {
        content: Object
    }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 
.box {
    text-align: center;
} */

img {
    max-width: 100%;
    outline: 2px solid #2c3e50;
}

.text {
    font-size: 15px;
        white-space: pre-wrap;

}

.lang {
    font-size: 5px;
}


/* ---------- メニュー ---------- */




</style>