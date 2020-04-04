<template>
  <div class="input-form">
    <h3>Address INPUT FORM</h3>
    <div>
      <input v-model="inputData.address" placeholder="Enter Address">
      <br>
      <p>
        <button @click="handleAddItemClicked">ADD Point</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressForm",
  data() {
    return {
      inputData: {
        address: ""
      },
    };
  },
  methods: {
    handleAddItemClicked: function() {
        let eventData = { ...this.inputData };
        this.$emit("add-item", eventData);
      
        // Reset
      this.inputData = {
        "address": ""
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
