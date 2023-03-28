<template>
  <h1>Teleport components</h1>
  <teleport to="footer"> 
    <Footer />
  </teleport>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "TeleportComponent",
  components: {
    Footer,
  },
};
</script>
