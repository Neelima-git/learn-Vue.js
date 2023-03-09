<template>
    <div id="app">
      <h3>Viewing in app</h3>
        <PropsDemo/>
        <ChildToParentsPropsDemo/>
    </div>
  </template>
  
  <script>
  import PropsDemo from './components/PropsDemoParent.vue'
  import ChildToParentsPropsDemo from './components/props/props/CtoP_Parent.vue'
  
  export default {
    name: "App",
    components: {
      PropsDemo,
      ChildToParentsPropsDemo
    },
  };
  </script>
  <style></style>
  