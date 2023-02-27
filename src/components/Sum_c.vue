Sum Using Composition Api 
<script setup>
import { ref, computed } from "vue";
const num1 = ref(10);
const num2 = ref(20);
const sum = computed(() => num1.value + num2.value);
</script>
 
<template>
  <input type="number" v-model="num1" />  <br /> 
  <input type="number" v-model="num2" />  <br /> 
  <input type="number" v-model="sum" />
</template>
 
<style></style>
