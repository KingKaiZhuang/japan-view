<template>
  <NavBar/>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/reset.css";
@import "./assets/grid.css";

</style>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>