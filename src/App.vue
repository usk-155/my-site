<template>
  <div>
    <div id="app">
      <Header class="header"></Header>
      <router-view/>
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/HeaderNav.vue'
// import Header from './components/Header.vue'
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Noto+Sans+Display:wdth,wght@72.6,890&display=swap');

#app {
  font-family: 
    "Montserrat",
    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "Meiryo",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin: 0 20px 20px;
  color: #2c3e50;
  background-color: #f8f3ec;
}

.header {
  position: sticky;
  top: 0;
}

.footer {
  position: sticky;
  bottom: 0;
}

</style>
