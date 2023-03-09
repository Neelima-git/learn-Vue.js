<template>
  <div class="form">
    <p v-if="loginForm.error.length">
        <b>Please correct following errors: </b>
        <ul>
            <li v-for="e in loginForm.error" v-bind:key="e.id">{{ e }}</li>
        </ul>
    </p>
    <form @submit="login">
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
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      loginForm: {
        error: [],
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login(e) {
        e.preventDefault();
      if (this.loginForm.username && this.loginForm.password) {
        console.log("Login function called");
      }
    //   this.error = [];
    this.loginForm.error=[]
      if (!this.loginForm.username) {
        this.loginForm.error.push("Username is required");
      }
      if (!this.loginForm.password) {
        this.loginForm.error.push("Password is required");
      }
      console.warn("error", this.loginForm.error);
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
