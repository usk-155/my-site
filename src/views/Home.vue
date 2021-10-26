<template>
    <div id="home" class="border-bottom border-end border-dark">
        <b-container fluid class="contents">
            <b-row>
                <b-col cols="12" md="6" class="box border-top border-start border-dark px-0">
                    <h1>Usk's</h1>
                    <h2>PORTFOLIO</h2>
                </b-col>
                <b-col cols="12" md="6" class="box border-top border-start border-dark px-0">
                    <b-img :src="require('../assets/home_bg.jpg')" fluid-grow alt="Responsive image"></b-img>
                </b-col>
            </b-row>
        </b-container>
        <div class="box border-top border-start border-dark my-0 px-0">
            <div class="text">
                <p>はじめまして</p>
                <p>『Usk's PORTFORIO』をご覧いただきありがとうございます。</p>
                <p>こちらのサイトはフロントエンドエンジニア志望のなかじまゆうすけのポートフォリオサイトです。</p>
                <p>私がこれまで作った制作物、スキル、プロフィール等をまとめました。</p>
                <p class="mb-0">ぜひごゆっくりご覧ください。</p>
            </div>
        </div>
    </div>
</template>

<script>
</script>


<style scoped>

#home {
    outline: 1px solid;
}

.box {
    outline: 1px solid;
}

h1 {
    color: #2c3e50;
    text-align: start;
    font-size: min(136px, 32vw);
    /* font-size: min(174px, 32vw); */
}
h2 {
    color: #2c3e50;
    text-align: start;
    font-size: min(60px, 14vw);
    /* font-size: min(78px, 14vw); */
}

.text {
    width: calc(70%);
    margin: 0 auto;
    padding: 40px 0;
}


</style>


<style>


</style>