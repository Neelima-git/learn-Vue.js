<template>
    <div id="app">
      <h3>Form with checkbox and radio buttons</h3>
      <SignUp />
      <h3>Form validations in Vue js</h3>
      <Login/>
    </div>
  </template>
  
  <script>
  import Login from './components/form/Login.vue'
  import SignUp from './components/form/SignUp.vue'
  
  export default {
    name: "App",
    components: {
      Login,
      SignUp
    },
  };
  </script>
  <style></style>
  