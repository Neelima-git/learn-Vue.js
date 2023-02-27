<script>
export default {
  name: "Counter_O",
  data() {
    return { num1: 10, num2: 20 };
  },
  methods: {
    Add() {
      this.name = "value";
    },
  },
  computed: {
    sum() {
      return this.num1 + this.num2;
    },
  },
};
</script>

<template>
  <input type="number" v-model="num1" /> <br /> 
  <input type="number" v-model="num2" /> <br /> 
  <input type="number" v-model="sum" />
</template>

<style></style>

