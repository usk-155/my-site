<template>
<b-col cols="12" md="6" class="box border-top border-start border-dark px-4">
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
}

.text {
    font-size: 18px;
}

.lang {
    font-size: 5px;
}


/* ---------- メニュー ---------- */




</style>