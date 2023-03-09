<template>
  <div >
    <input
      type="text"
      name="username"
      placeholder="Enter username"
      v-model="signUpForm.username"
    />
    <input
      type="password"
      name="password"
      placeholder="Enter password "
      v-model="signUpForm.password"
    />
    <p>Interests</p>
    <input type="checkbox" name="UI" id="UI" value="UI" v-model="signUpForm.interests">
    <label for="UI">UI</label>
    <input type="checkbox" name="BDA" id="BDA" value="BDA" v-model="signUpForm.interests">
    <label for="BDA">BDA</label>
    <input type="checkbox" name="CD" id="CD" value="CD" v-model="signUpForm.interests">
    <label for="CD">CD</label>

    <p>Gender</p>
    <input type="radio" value="male" id="male" v-model="signUpForm.gender  ">
    <label for="male">Male</label>
    <input type="radio" value="female" id="female" v-model="signUpForm.gender">
    <label for="female">Female</label>
  </div>
  <button @click="signUpUser">Sign Up</button>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return {
        signUpForm: {
            username: null,
            password: null,
            interests: [],
            gender: null
        }
    }
  },
  methods: {
    signUpUser(){
        console.warn("signed up", this.signUpForm);
    },
    beforeMount() {
        this.signUpUser
    },
    mounted() {
        this.signUpUser
    },
  }
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
}</style>