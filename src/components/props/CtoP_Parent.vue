<template>
  <div>
    <h3>{{ title }}</h3>
    <Child v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

<script>
import Child from "../CtoP_Child.vue";

export default {
  name: "CtoP_Parent",
  components: {
    Child,
  },
  data() {
    return {
      title: "Demo of passing props from child to parent component",
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
  },
};
</script>
