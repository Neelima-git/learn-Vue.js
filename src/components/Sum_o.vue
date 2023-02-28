<!-- This is a Vue.js component that allows the user to input two numbers and calculates their sum using a computed property. -->

<script>
export default {
  // Set the name of the component to "Counter_O"
  name: "Counter_O",
  // Define the data properties for the component
  data() {
    // Initialize the "num1" and "num2" properties to 10 and 20, respectively
    return { num1: 10, num2: 20 };
  },
  // Define the methods for the component
  methods: {
    // This method doesn't seem to be related to the counter, as it just sets the name property to "value"
    Add() {
      this.name = "value";
    },
  },
  // Define the computed properties for the component
  computed: {
    // Define a computed property called "sum" that calculates the sum of "num1" and "num2"
    sum() {
      return this.num1 + this.num2;
    },
  },
};
</script>

<!-- Define the template for the component -->

<template>
  <!-- Define two input fields that allow the user to input numbers, and bind them to the "num1" and "num2" data properties using the v-model directive -->
  <input type="number" v-model="num1" /> <br />
  <input type="number" v-model="num2" /> <br />
  <!-- Define an input field that displays the sum of "num1" and "num2", and bind it to the "sum" computed property using the v-model directive -->
  <input type="number" v-model="sum" />
</template>

<!-- Define any custom styles for the component (none are used in this case) -->
<style></style>
