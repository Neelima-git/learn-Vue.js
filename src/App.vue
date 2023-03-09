<template>
  <div id="app">
    <h2>Lifecycle methods</h2>
    <h3>beforeCreate and created life cycle hooks</h3>
    <create/>
    <h3>beforeMount and mounted life cycle hooks </h3>
    <mount />
  </div>
</template>

<script>
import create from './components/lifecycleMethods/create.vue'
import mount from './components/lifecycleMethods/mount.vue'

export default {
  name: "App",
  components: {
    create,
    mount
  },
};
</script>
<style></style>
