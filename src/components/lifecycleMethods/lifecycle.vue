<template>
    <div id="app">
      <h2>Lifecycle methods</h2>
      <h3>beforeCreate and created life cycle hooks</h3>
      <create/>
      <h3>beforeMount and mounted life cycle hooks </h3>
      <mount />
      <h3>beforeDestroy and destroyed life cycle hooks</h3>
      <destroy/>
    </div>
  </template>
  
  <script>
  import create from './create.vue'
  import mount from './mount.vue'
  import destroy from './unmount.vue'
  
  
  export default {
    name: "App",
    components: {
      create,
      mount,
      destroy
    },
  };
  </script>
  <style></style>
  