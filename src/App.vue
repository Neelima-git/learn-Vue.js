<template>
  <div id="app">
    <h2>App Component</h2>
    <!-- <EmployeeList/> -->
    <!-- <Post/> -->
    <!-- <Computed/>
    <Watcher/> -->
    <!-- <DemoSlot/>
    <TeleportDemo/> -->
    <!-- <lifecycle/> -->

    <!-- Demo for routers  -->
    <RoutesDemo/>
  </div>
</template>

<script>
// import EmployeeList from './components/api/EmployeeList.vue';
// import Post from './components/api/PostData.vue'
// import lifecycle from './components/lifecycleMethods/lifecycle.vue';
// import Computed from './components/computed/Computed.vue';
// import Watcher from './components/watchers/Watcher.vue';
// import DemoSlot from './components/slots/SlotParent.vue';
// import TeleportDemo from 'vue';
import RoutesDemo from './components/routing/RoutesDemo.vue'

export default {
  name: "App",
  components: {
    // EmployeeList,
    // Post
    // lifecycle
    // Computed,
    // Watcher,
    // DemoSlot,
    // TeleportDemo
    RoutesDemo
  },
};
</script>
<style></style>
