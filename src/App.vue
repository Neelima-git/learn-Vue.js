<!-- This is a Vue.js single-file component that defines a counter with two buttons to increment or decrement its value. -->

<template>

  <h1>Count {{ count }}</h1>
  
  <!-- These two buttons trigger the add and sub methods when clicked -->
  <button @click="add">Add</button>
  <button @click="sub">Sub</button>
</template>

<script>
  // The script exports an object contains the name, data and method properties
export default {
  // The name property defines the name of the component
  name: "App",
  // The data property defines the state of the component
  data() {
    return {
      // The count variable starts at 0
      count: 0,
    };
  },

  // The methods property defines the behavior of the component
  methods: {
    // The add method increments the count variable by 1
    add() {
      this.count++;
    },
    // The sub method decrements the count variable by 1
    sub() {
      this.count--;
    },
  },
};
</script>

<style></style>
