<template>
    <h2>Watchers</h2>
    <h1>{{ count }}</h1> <!-- Display the current value of "count" -->
    <button v-on:click="count=count+1">+</button> <!-- Increment "count" when the button is clicked -->
    <button v-on:click="count=count-1">-</button> <!-- Decrement "count" when the button is clicked -->
</template>

<script>
export default {
    name: "WatchersComponent",
    data(){
        return{
            count: 0 // Set the initial value of "count" to 0
        }
    },
    watch: {
        count(val, prev){ // Watch changes to "count"
            if(val>10 && val>prev){ // If the new value of "count" is greater than 10 and is also greater than the previous value of "count"
                alert("stop counting") // Show an alert message
            }
        }
    }
}
</script>
