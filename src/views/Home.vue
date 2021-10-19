<template>
    <div id="home" class="border-bottom border-end border-dark">
        <b-container fluid class="contents">
            <b-row>
                <b-col cols="12" lg="6" class="box border-top border-start border-dark px-0">
                    <h1>Usk's</h1>
                    <h2>PORTFOLIO</h2>
                </b-col>
                <b-col cols="12" lg="6" class="box border-top border-start border-dark px-0">
                    <b-img :src="require('../assets/home_bg.jpg')" fluid-grow alt="Responsive image"></b-img>
                    <p>home2</p>
                </b-col>
            </b-row>
        </b-container>
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
    /* height: 40rem; */
    font-size: max(17vw,80px);
}
h2 {
    color: #2c3e50;
    text-align: start;
    /* height: 40rem; */
    font-size: max(7vw,36px);
}

</style>


<style>


</style>