<template>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-view />
</template>
<script>
export default {
    name: "RoutesDemo"
}
</script>