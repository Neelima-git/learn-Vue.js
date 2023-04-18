<template>
    <h1>{{ profile }} Profile</h1>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    name: "ProfileComponent",
    data(){
        return {
            profile: ""
        }
    },
    mounted(){
        const route = useRoute();
        console.log("route", route.params.name);
        this.profile=route.params.name;
    }
}
</script>
<style>

</style>