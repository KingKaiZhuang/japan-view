<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<style lang="scss">
@import "./assets/reset.css";
@import "./assets/grid.css";

</style>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>