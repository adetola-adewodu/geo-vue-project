<template>

  <div class="list-items">
    <div v-if="inputItems.length">
    
      <div v-for="item in inputItems" :key="item.id">
        <div style="padding-bottom:6px">
          <ItemEntry :item="item" :handleDeleteFunc="handleDelete"/>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Click Above To Add Items To List</h2>
    </div>
  </div>
</template>

<script>
import ItemEntry from "./ItemEntry";

export default {
  name: "ItemsList",
  components: { 
    ItemEntry
    },
  props: { inputItems: Array },
  methods: {
    handleDelete: function(_eventData) {
      this.$emit("delete-item", _eventData);
    }
  }
};
</script>

<style>
.list-items {
  background-color: lightblue;
  padding: 20px;
  margin: 20px;
}
</style>
