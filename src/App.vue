<template>
  <div id="app">
    <h2>Fetch data with api</h2>
    <!-- <EmployeeList/> -->
    <Post/>
  </div>
</template>

<script>
// import EmployeeList from './components/api/EmployeeList.vue';
import Post from './components/api/PostData.vue'
export default {
  name: "App",
  components: {
    // EmployeeList,
    Post
  },
};
</script>
<style></style>
