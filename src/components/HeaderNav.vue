<template>
<div id="headerNav">
    <div id="header" class="border-bottom border-end border-dark">
        <b-container fluid>
            <b-row class="row" >
                <b-col cols="12" class="test d-md-none d-flex justify-content-between border-top border-start border-dark px-0">
                    <div class="icon">
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="title ms-2">Usk's site</div>
                    </div>
                    <div v-on:click="openMenu" class="menu d-flex align-items-center border-start border-dark border-2">
                        <b-icon-list class="mx-3"></b-icon-list>
                    </div>
                </b-col>

                <b-col md="4" lg="2" class="test d-none d-md-block border-top border-start border-dark px-0">
                    <div class="icon">
                        <b-img :src="require('../assets/icon.jpg')" rounded="circle" alt="icon" class="iconImage ms-1"></b-img>
                        <div class="title ms-2">Usk's site</div>
                    </div>
                </b-col>
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
            </b-row>
        </b-container>
    </div>

    <div class="dropMenu" v-show="open" v-on:mouseleave="closeMenu" v-on:click="closeMenu">
        <div class="menu__item box test border border-dark px-0"><RouterLink to="/" class="link">Home</RouterLink></div>
        <div class="menu__item box test border border-dark px-0"><RouterLink to="/Profile" class="link">Profile</RouterLink></div>
        <div class="menu__item box test border border-dark px-0"><RouterLink to="/Works" class="link">Works</RouterLink></div>
        <div class="menu__item box test border border-dark px-0"><RouterLink to="/Skills" class="link">Skills</RouterLink></div>
        <div class="menu__item box test border border-dark px-0"><RouterLink to="/Contact" class="link">Contact</RouterLink></div>
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

.test {
    height: 40px;            /*  */
    outline: 1px solid;
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
    font-size: 20px;
    vertical-align: middle;
    display: table-cell;
    cursor: pointer;
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