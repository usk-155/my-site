<template>
    <div id="skills" class="border-end border-dark">
        <div class="box border-start border-dark">
            <h1>Skills</h1>
        </div>
        <b-container fluid class="box border-start border-dark">
            <b-row class="skillsBody py-3 px-2">
<!-- 1 -->
                <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_html5.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">HTML</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="chartBg"><div class="htmlChart"></div></div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 2 -->
                <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_css3.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">CSS</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="chartBg"><div class="cssChart"></div></div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 3 -->
                <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_javascript.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">Javascript</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="chartBg"><div class="javascriptChart"></div></div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 4 -->
                <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_bootstrap.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">Bootstrap</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="chartBg"><div class="bootstrapChart"></div></div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 5 -->
                <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_vuejs.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">Vue.js</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="chartBg"><div class="vuejsChart"></div></div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </b-col>
                    </b-row>
                </b-col>
<!-- 6 -->
                <b-col cols="12" md="6" class="content">
                    <b-row>
                        <b-col cols="3" lg="2" class="px-0">
                            <b-img center :src="require('../assets/logo_firebase.png')" class="logo"></b-img> <!-- fluid-grow alt="Responsive image" -->
                            <p class="name">firebase</p>
                        </b-col>
                        <b-col cols="9" lg="10">
                            <div class="chartBg"><div class="firebaseChart"></div></div>
                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
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
    font-size: clamp(5px, 4vw, 19px);
}


.chartBg {
    background-color: #d3d3d3;
    height: 20px;
    width: 90%;
}
.htmlChart {
    background: linear-gradient(135deg, #E44E26, #F16529);
    height: 20px;
    width: 60%;
    z-index: 2;
}
.cssChart {
    background: linear-gradient(135deg, #1572B6, #34A9DC);
    height: 20px;
    width: 60%;
    z-index: 2;
}
.javascriptChart {
    background: linear-gradient(135deg, #EFDC4F, #EFDC4F, #000000);
    height: 20px;
    width: 40%;
    z-index: 2;
}
.bootstrapChart {
    background: linear-gradient(135deg, #5B4282, #FFFFFF);
    height: 20px;
    width: 40%;
    z-index: 2;
}
.vuejsChart {
    background: linear-gradient(135deg, #40B983, #35495E);
    height: 20px;
    width: 60%;
    z-index: 2;
}
.firebaseChart {
    background: linear-gradient(135deg, #F58220, #F58220);
    height: 20px;
    width: 50%;
    z-index: 2;
}








</style>


<style>

</style>