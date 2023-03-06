<template>
  <h3>Parent component</h3>
  <ChildComponent/>
</template>

<script>

// import DataBinding from './components/DataBinding.vue';
import ChildComponent from './components/ComponentRegistration.vue'

export default {
  components: {
    ChildComponent
  }
}
</script>ComponentRegistration
<style>

</style>