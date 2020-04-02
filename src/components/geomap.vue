

<template>
  <div style="height: 800px; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution"/>
      <div v-for="point in points" :key="point.id" style="padding: 6px">
        <l-marker v-if="!point.radius" :point="point" :lat-lng="getLatLong(point.latitude, point.longitude)" />
        <l-circle v-if="point.radius" :lat-lng="getLatLong(point.latitude, point.longitude)" :radius="point.radius"/>
      </div>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LCircle} from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker, 
    LCircle
  },
  props: { points: Array },
  data() {
    return {
      zoom: 19,
      center: latLng(38.899283, -77.016231),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }, 
    addItem() {
        this.points = {...this.inputData}
        this.inputData = {}
    },
    getLatLong(latitude,longitude){
      return latLng(latitude,longitude);
    }
  }
};
</script>