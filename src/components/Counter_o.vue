<script>
export default {
  name: "Counter_O",
  data() {
    return { count: 0 };
  },
  methods: {
    Add() {
      this.count++;
    },
    Sub() {
      this.count--;
    },
  },
};
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="Add">Add</button>
  <button @click="Sub">Sub</button>
</template>

<style></style>
