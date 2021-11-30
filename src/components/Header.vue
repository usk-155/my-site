<template>
<div id="headerNav">
    <div id="header" class="border-bottom border-end border-dark">
        <b-container fluid>
            <b-row class="row" >
<!-- small -->
                <b-col cols="12" class="box d-md-none d-flex justify-content-between border-top border-start border-dark px-0">
                    <div class="icon">
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="title ms-2">Usk's site</div>
                    </div>
                    <div v-on:click="openMenu" class="box manu nav d-flex align-items-center border-start border-dark">
                        <b-icon-list class="mx-3"></b-icon-list>
                    </div>
                </b-col>
<!-- large -->
                <b-col md="4" lg="2" class="box d-none d-md-block border-top border-start border-dark px-0">
                    <div class="icon">
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="title ms-2">Usk's site</div>
                    </div>
                </b-col>
                <b-col md="4" lg="2" class="box menu d-none d-md-block border-top border-start border-dark px-0" id="homeTab">
                    <RouterLink to="/" class="link">Home</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="box menu d-none d-md-block border-top border-start border-dark px-0" id="profileTab">
                    <RouterLink to="/Profile" class="link">Profile</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="box menu d-none d-md-block border-top border-start border-dark px-0" id="worksTab">
                    <RouterLink to="/Works" class="link">Works</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="box menu d-none d-md-block border-top border-start border-dark px-0" id="skillsTab">
                    <RouterLink to="/Skills" class="link">Skills</RouterLink>
                </b-col>
                <b-col md="4" lg="2" class="box menu d-none d-md-block border-top border-start border-dark px-0" id="contactTab">
                    <RouterLink to="/Contact" class="link">Contact</RouterLink>
                </b-col>
            </b-row>
        </b-container>
    </div>
<!-- pulldown menu -->
    <div class="dropMenu border-bottom border-dark" v-show="open" v-on:mouseleave="closeMenu" v-on:click="closeMenu">
        <div class="menu__item menu border border-dark px-0"><RouterLink to="/" class="link">Home</RouterLink></div>
        <div class="menu__item menu border border-dark px-0"><RouterLink to="/Profile" class="link">Profile</RouterLink></div>
        <div class="menu__item menu border border-dark px-0"><RouterLink to="/Works" class="link">Works</RouterLink></div>
        <div class="menu__item menu border border-dark px-0"><RouterLink to="/Skills" class="link">Skills</RouterLink></div>
        <div class="menu__item menu border border-dark px-0"><RouterLink to="/Contact" class="link">Contact</RouterLink></div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            open: false,
        };
    },
    methods: {
        openMenu() {                    // buttonで呼び出される関数
            if (this.open === false) {  // 「もしopenがfalse(=初期状態)なら」
                this.open = true;       // 「openをtrue状態にする(="v-show"部分を表示する)」
            } else {                    // 「そうでなければ(=openがtrue状態なら)」
                this.open = false;      // 「openをfalseにする」
            }
        },
        closeMenu() {
            this.open = false;          // 「openをfalseにする」
        }

    },
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    background-color: #f8f3ec;
    outline: 1px solid;
}

.whiteSpace {
    background: #fff;
    height: 20px;
}

.box {
    height: 40px;            /*  */
    outline: 1px solid;
}

.menu {
    text-align: center;
}

.menu:hover {
    background-color: #ecd8b3;
}

.iconImage {
    height: 25px;
}

.icon {
    /* color: #0000ff; */
    display: inline-block;
    font-size: 20px;    
    line-height: 40px;            /*  */

}
.title {
    display: inline-block;
    font-size: 20px;
    line-height: 40px;            /*  */
}

.nav {
    font-size: 20px;
    vertical-align: middle;
    display: table-cell;
    cursor: pointer;
}

.link {
    /* color: #0000ff; */
    display: flex;                /* div全体をクリック */
    justify-content: center;
    align-items: center;
    text-decoration:none;
    font-size: 20px;
    line-height: 40px;            /*  */
}

/* ---------- メニュー ---------- */

.dropMenu{
    position: absolute;
    width: 100%;
    z-index: 2;
    background-color: #f8f3ec;
}

/* アニメーション後のメニューの状態 */

/* 
.dropMenu.is-active{

}
*/




</style>