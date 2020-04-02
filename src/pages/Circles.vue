<template>
  <div id="app">
  <CircleInputForm @add-item="addItem"/>
  <geomap :points="items"></geomap>
  </div>
</template>

<script>
import CircleInputForm from "../components/CircleInputForm";
import geomap from "../components/geomap";
export default {
  name: "App",
  components: {
     CircleInputForm,
    geomap
  },
  computed: {
    listChecked: function() {
      return this.items.filter(i => i.on === true).length;
    },
    listSize: function() {
      return this.items.length;
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    deleteItem: function(_key) {
      this.items = this.items.filter(function(item) {
        return item.id !== _key;
      });
    },
    addItem: function(_eventData) {
      // get data from parameter
      let newItem = { latitude: _eventData.latitude, longitude : _eventData.longitude, radius: _eventData.radius };

      // gets time in milliseconds, unique enough for example
      newItem.id = new Date().getTime();

      // add item to array using push
      this.items.push(newItem);
    }
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
