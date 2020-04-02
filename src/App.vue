<template>
  <div id="app">
    <div
      style="display: flex; justify-content: space-between; padding-top:20px;  padding-bottom:20px; width : 300px"
    >
      <router-link to="/circles">CIRCLES</router-link>
      <router-link to="/points">POINTS</router-link>
      <router-link to="/about">ABOUT</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  computed: {},
  data() {
    return {
      items: []
    };
  },
  methods: {}
};
</script>

<style>
</style>