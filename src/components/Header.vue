<template>
<div>
    <div class="whiteSpace"></div>
    <div id="header" class="border-bottom border-end border-dark">
        <b-container fluid>
            <b-row class="row">
                <b-col cols="12" class="test d-md-none d-flex justify-content-between border-top border-start border-dark px-0"><!--  cols="10" -->
                    <div class="icon"><!-- d-flex flex-row -->
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="title ms-2">Usk's site</div>
                    </div>
                    <div class="d-flex align-items-center border-start border-dark border-2"><!--  d-flex flex-row-reverse -->
                        <b-icon-list class="menu mx-3"></b-icon-list>
                    </div>
                </b-col>



                <b-col md="4" lg="2" class="test d-none d-md-block border-top border-start border-dark px-0"><!--  cols="10" -->
                    <div class="icon"><!-- d-flex flex-row -->
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="title ms-2">Usk's site</div>
                    </div>
                </b-col>

<!--
                <b-col md="4" lg="2" class="box d-none d-md-block border-top border-start border-dark px-0"> cols="10"
                    <div class="nowPage">
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="ms-2">Usk's site</div>
                    </div>
                </b-col>
-->
<!--
                <b-col cols="11" class="box d-md-none border-top border-start border-dark px-0">
                    <div class="nowPage">
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="ms-2">{{ this.$route.name }}</div>
                    </div>
                </b-col>
                d-md-none
-->
                <b-col md="4" lg="2" class="test box d-none d-md-block border-top border-start border-dark px-0" id="homeTab">
                    <RouterLink to="/" class="link">Home</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="test box d-none d-md-block border-top border-start border-dark px-0" id="profileTab">
                    <RouterLink to="/Profile" class="link">Profile</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="test box d-none d-md-block border-top border-start border-dark px-0" id="worksTab">
                    <RouterLink to="/Works" class="link">Works</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="test box d-none d-md-block border-top border-start border-dark px-0" id="skillsTab">
                    <RouterLink to="/Skills" class="link">Skills</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="test box d-none d-md-block border-top border-start border-dark px-0" id="contactTab">
                    <RouterLink to="/Contact" class="link">Contact</RouterLink>
                </b-col>
<!--
                <b-col class="menuBox d-md-none border-top border-start border-dark px-0"> cols="2"
                    <div class="menu">
                        <b-icon-list class="menu me-3"></b-icon-list>
                    </div>
                </b-col>
-->
            </b-row>
        </b-container>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header'
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    background-color: #f8f3ec;
    /* text-align: center; */
    outline: 1px solid;
}

.test {
    height: 40px;            /*  */
    outline: 1px solid;
}

.whiteSpace {
    background: #fff;
    height: 20px;
}

.box {
    text-align: center;
}

.box:hover {
    background-color: #ecd8b3;
}

.iconImage {
    height: 25px;
}

.icon {
    color: #2c3e50;
    display: inline-block;
    font-size: 20px;    
    line-height: 40px;            /*  */

}
.title {
    color: #2c3e50;
    display: inline-block;
    font-size: 20px;
    line-height: 40px;            /*  */
}
.menu {
    color: #2c3e50;
    /* display: inline-block; */
    font-size: 20px;
    vertical-align: middle;
    display: table-cell;
    /* line-height: 40px;             */

/* 
    justify-content: center;
    align-items: center;
    text-decoration: none;
 */
}

.link {
    color: #2c3e50;
    display: flex;                /* div全体をクリック */
    justify-content: center;
    align-items: center;
    text-decoration:none;
    font-size: 20px;
    line-height: 40px;            /*  */
}




/*
.link {
    display: block;
    vertical-align: middle;
    height: 3rem;
}
*/

/*
.link::after {
    position: absolute;
}
*/


</style>