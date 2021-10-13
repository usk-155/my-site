<template>
    <div id="home" class="border-end border-dark">
        <b-container fluid class="contents">
            <b-row>
                <b-col cols="12" lg="6" class="box border-start border-bottom border-dark px-0">
                    <h1>Usk's</h1>
                    <h2>PORTFOLIO</h2>
                </b-col>
                <b-col cols="12" lg="6" class="box border-start border-bottom border-dark px-0">
                    <b-img :src="require('../assets/home_bg.jpg')" fluid-grow alt="Responsive image" class="homeImage"></b-img>
                    <p>home2</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
</script>


<style scoped>
/* 
.homwImage {
    text-align: center;
} */

#home {
    outline: 1px solid;
}

.box {
    outline: 1px solid;
}

h1 {
    color: #2c3e50;
    text-align: start;
    /* height: 40rem; */
    font-size: 120px;
}
h2 {
    color: #2c3e50;
    text-align: start;
    /* height: 40rem; */
    font-size: 48px;
}

/*
a {
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rem;
    text-decoration:none;
    font-size: 60px;
}
*/

</style>


<style>


</style>