<template>
  <div class="input-form">
    <h3>CIRCLE INPUT FORM</h3>
    <div>
      <input v-model="inputData.latitude" placeholder="Enter Latitude">
      <br>
      <input v-model="inputData.longitude" placeholder="Enter Longitude ">
      <br>
      <input v-model="inputData.radius" placeholder="Enter Radius ">
      <br>
      <p>
        <button @click="handleAddItemClicked">ADD Circle</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CircleInputForm",
  data() {
    return {
      inputData: {
        latitude: "",
        longitude: "",
        radius: ""
      },
    };
  },
  methods: {
    handleAddItemClicked: function() {
      let eventData = { ...this.inputData };
      this.$emit("add-item", eventData);
      this.inputData = {
        latitude: "",
        longitude: "", 
        radius:""
      };
    }
  }
};
</script>

<style scoped>
input {
  width: 50%;
}
.input-form {
  padding: 20px;
  margin: 20px;
  background-color: rgb(155, 155, 142);
}
</style>
