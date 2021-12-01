<template>
  <div>
    <div class="top whiteSpace"></div>
    <div id="app">
      <Header class="header"></Header>
      <router-view/>
      <Footer class="footer"></Footer>
    </div>
    <div class="bottom whiteSpace"></div>
  </div>
</template>

<script>
// import Header from './components/HeaderNav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
    components: {
    Header,
    Footer
  }

}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Noto+Sans+Display:wdth,wght@72.6,890&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Noto+Sans+Display:wdth,wght@72.6,890&family=Noto+Sans+JP:wght@500;700&display=swap');

#app {
  font-family: 
    "Montserrat",
    "Noto Sans JP",

    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "Meiryo",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 10px;
  color: #212529;
  background-color: #f8f3ec;
}

h1, h2, p, .icon, .link {
  color: #202f55;
}

.whiteSpace {
  background: #fff;
  height: 10px;
}
.top {
  position: sticky;
  top: 0;
}
.bottom {
  position: sticky;
  bottom: 0;
}

.header {
  position: sticky;
  top: 10px;
  z-index: 2;
}

.footer {
  position: sticky;
  bottom: 10px;
}

</style>
