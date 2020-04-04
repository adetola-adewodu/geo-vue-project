<template>
  <div id="app">
  <AddressForm @add-item="addItem"/>
  <geomap :points="items"></geomap>
  </div>
</template>

<script>
import axios from 'axios';
import AddressForm from "../components/AddressForm";
import geomap from "../components/geomap";
export default {
  name: "App",
  components: {
    AddressForm,
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
    addItem: async function(_eventData) {
      // get data from parameter
      const { address } =  _eventData;
      console.log(_eventData);
      const addressURl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWRldG9sYSIsImEiOiJjaWZrMnUxam9jeXVocnNtN2d4ZTZuYWY0In0.Zw_sIj0XY7OUMObgjGVfcw`
          
        const latLongResponse = await axios.get(addressURl);
        console.log(latLongResponse.data['features'][0]['center'][0]);
        console.log(latLongResponse.data['features'][0]['center'][1]);
        const latitude = latLongResponse.data['features'][0]['center'][1];
        const longitude = latLongResponse.data['features'][0]['center'][0];
        
        let newItem = { latitude, longitude, address };
        //let newItem = {latitude: 38.895, longitude: -77.0366, address: "Washington, DC"};
        console.log(newItem);
        // gets time in milliseconds, unique enough for example
        newItem.id = new Date().getTime();
        console.log(newItem);

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
