<template>
  <div class="input-form">
    <h3>INPUT FORM</h3>
    <div>
      <input v-model="inputData.latitude" placeholder="Enter Latitude">
      <br>
      <input v-model="inputData.longitude" placeholder="Enter Longitude ">
      <br>
      <p>
        <button @click="handleAddItemClicked">ADD ITEM</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      inputData: {
        latitude: "",
        longitude: ""
      },
    };
  },
  methods: {
    handleAddItemClicked: function() {
      let eventData = { ...this.inputData };
      this.$emit("add-item", eventData);
      this.inputData = {
        latitude: "",
        longitude: ""
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
