<script setup>
import { ref } from "vue";
const count = ref(0);
const Add = () => {
  count.value = count.value + 1;
};
const Sub = () => {
  count.value = count.value - 1;
};
</script>

<template>
  <h1>{{ count }}</h1>
  <br />
  <button @click="Add">Add</button>  
  <button @click="Sub">Sub</button>
</template>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-container {
  padding: 2px 16px;
}
</style>
