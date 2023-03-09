<template>
  <div id="app">
    <h3>Props in vue js: <br> Demonstration of passing props from parent to child component</h3>  
    <h4>Parent component</h4>
    <p></p>
    <PropsComponent v-bind:fruits=fruits />
  </div>
</template>

<script>
import PropsComponent from "./PropsDemoChild.vue";

export default {
  name: "PropsDemoChild",
  components: {
    PropsComponent,
  },
  data(){
    return{
      fruits: [
        {name: 'mango', liking:'80%'},
        {name: 'orange', liking: '60%'},
        {name: 'banana', liking: '90%'}
      ]
    }
  }
};
</script>
<style></style>
