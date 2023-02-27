<script>
export default {
  name: "Counter_O",
  data() {
    return { list: ["val1", "val2", "val3"] };
  },
};
</script>
 
<template>
  <div>
    <div v-for="(element, index) in list"
         :key="index"
         :class="index % 2 === 0 ? 'even' : 'odd'">
      {{ element }}
    </div>
  </div>
</template>

<style>
.header { font-size: 50px;}
.odd { color: red;}
.even { color: green;}
</style>
