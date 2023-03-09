<template>
  <div class="form">
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Enter username "
      v-model="loginForm.username"
    />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Enter password "
      v-model="loginForm.password"
    />
    <button @click="getLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    getLogin() {
      console.log("getLogin called", this.loginForm);
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  margin: 0.5rem;
  padding: 0.3rem;
}

button {
  padding: 0.5rem;
  outline: none;
  color: green;
  border-radius: 0.2rem;
}
</style>
