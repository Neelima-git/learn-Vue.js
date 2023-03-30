<template>
    <div>
      <!-- Render a button and listen to the click event -->
      <button v-on:click="updateTitle">Update title</button>
    </div>
  </template>
  
  <script>
  export default {
    // Set the component name
    name: "CtoP_Child", 
    methods: {
      updateTitle() {
        // Log a warning message to the console
        console.warn("Update title"); 
        // Emit a 'changeTitle' event and pass the string 'Child to parent props passed' as an argument
        this.$emit("changeTitle", "Child to parent props passed"); 
      },
    },
  };
  </script>
  