<template>
  <div id="app">
    <!--default slot-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import "styles/icon.css";
  #app {
    width: 100%;
    height: 100%;
  }
</style>
