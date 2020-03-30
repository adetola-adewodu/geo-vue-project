<template>
  <div id="app">
  <InputForm @add-item="addItem"/>
  <ItemsList :inputItems="items" @delete-item="deleteItem"/>
  <geomap :points="items"></geomap>
  </div>
</template>

<script>
import InputForm from "./components/InputForm";
import ItemsList from "./components/ItemsList";
import geomap from "./components/geomap";
export default {
  name: "App",
  components: {
     InputForm,
    ItemsList,
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
      let newItem = { latitude: _eventData.latitude, longitude : _eventData.longitude};

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
