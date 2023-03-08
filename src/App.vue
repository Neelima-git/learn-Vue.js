<template>
  <div id="app">
    <h3>Viewing in app</h3>
      <PropsDemo/>
  </div>
</template>

<script>
// import PropsComponent from "./components/PropsDemoChild.vue";
import PropsDemo from './components/PropsDemoParent.vue'

export default {
  name: "App",
  components: {
    PropsDemo
  },
};
</script>
<style></style>
