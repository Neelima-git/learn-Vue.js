<template>
  <div id="app">
    <h2>Fetch data with api</h2>
    <!-- <EmployeeList/> -->
    <!-- <Post/> -->
    <Computed/>
  </div>
</template>

<script>
// import EmployeeList from './components/api/EmployeeList.vue';
// import Post from './components/api/PostData.vue'
import Computed from './components/computed/Computed.vue';

export default {
  name: "App",
  components: {
    // EmployeeList,
    // Post
    Computed
  },
};
</script>
<style></style>
