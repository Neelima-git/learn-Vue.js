<!-- Watchers are the observers of the property which continuously observe the value of the property  -->

<template>
    <h2>Watchers</h2>
    <h1>{{ count }}</h1>
    <button v-on:click="count=count+1">+</button>
    <button v-on:click="count=count-1">-</button>
</template>

<script>
export default {
    name: "WatchersComponent",
    data(){
        return{
            count: 0
        }
    },
    watch: {
        count(val, prev){
            if(val>10 && val>prev){
                alert("stop counting")
            }
        }
    }
}
</script>