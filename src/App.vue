<template>
  <div id="app">
    <geomap></geomap>
  </div>
</template>

<script>
import geomap from "./components/geomap";

export default {
  name: "App",
  components: {
    geomap
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
