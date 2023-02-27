<script setup>
import { ref, watch } from "vue";

const num1 = ref(10);

watch(num1, (newVal, OldVal) => {
  console.log(newVal, OldVal);
});
</script>

<template>
  <input type="number" v-model="num1" /> <br />
  <input type="number" v-model="num2" /> <br />
  <input type="number" v-model="sum" />
</template>

<style></style>
