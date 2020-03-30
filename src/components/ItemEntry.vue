<template>
  <div>
    <button @click="handleDeleteFunc(item.id)">DELETE</button>
    <input type="checkbox" v-model="item.on">
    <span
      :class="{ toggled: item['on']  }"
    >Latitude: {{ item. latitude }},  Latitude: {{ item.longitude }} : {{item.on}}</span>
  </div>
</template>

<script>
export default {
  name: "ItemEntry",
  props: ["item", "handleDeleteFunc"]
};
</script>

<style>
.toggled {
  text-decoration: line-through;
}
</style>
