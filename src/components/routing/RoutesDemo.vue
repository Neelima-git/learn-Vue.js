<template>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/profile/peter">Peters Profile</router-link>
    <router-link to="/profile/bruce">Bruces Profile</router-link>
    <router-link to="/profile/anil">Anils Profile</router-link>
    <router-view></router-view>
</template>
<script>
export default {
    name: "RoutesDemo"
}
</script>