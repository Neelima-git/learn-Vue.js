<template>
  <div>
    <!-- Display the title property in an h3 tag -->
    <h3>{{ title }}</h3>
    <!-- Render the Child component and listen to the changeTitle event -->
    <Child v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

<script>
import Child from "../CtoP_Child.vue"; // Import the Child component

export default {
  name: "CtoP_Parent", // Set the component name
  components: {
    Child, // Register the Child component
  },
  data() {
    return {
      title: "Demo of passing props from child to parent component", // Initialize the title property
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title; // Update the title property with the new value received from the Child component
    },
  },
};
</script>
