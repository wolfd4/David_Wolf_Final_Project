<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Vue logo" src="./assets/wolf.png" id="logo">
      Wolf Tracks
    </div>
    <Nav/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo {
  height: 100px;
}
</style>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "home",
  components: {
    Nav
  }
};
</script>
