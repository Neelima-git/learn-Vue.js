<!-- Define a Vue.js component with a reactive "count" variable and two methods to increment and decrement it -->

<script setup>
// Import the "ref" function from the "vue" package
import { ref } from "vue";

// Create a reactive variable called "count" and initialize it to zero
const count = ref(0);

// Define a function called "Add" that increments the "count" variable by one
const Add = () => {
  count.value = count.value + 1;
};

// Define a function called "Sub" that decrements the "count" variable by one
const Sub = () => {
  count.value = count.value - 1;
};
</script>

<!-- Define the template for the component -->

<template>
  <!-- Display the current value of "count" within an <h1> tag -->
  <h1>{{ count }}</h1>
  <!-- Add a line break for visual separation -->
  <br />
  <!-- Define a button to add to the count, and bind the "Add" method to its click event using the @click directive -->
  <button @click="Add">Add</button>
  <!-- Define a button to subtract from the count, and bind the "Sub" method to its click event using the @click directive -->
  <button @click="Sub">Sub</button>
</template>

<!-- Define custom styles for the component -->

<style>
/* Style the component with a box shadow and transition effect */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

/* Increase the box shadow when the component is hovered over */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Define padding for the component container */
.card-container {
  padding: 2px 16px;
}
</style>
