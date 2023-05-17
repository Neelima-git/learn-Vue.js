<template>
    <!-- Displaying the computed property -->
    <h3>Computed property</h3>
    <h2>{{ getTotal }}</h2>
    <!-- Calling the getData method -->
    <h2>{{ getData() }}</h2>
</template>

<script>
export default {
    name: "ComputedComponent",
    data(){
        return {
            // Initializing data properties
            fruitCake: 40,
            nutsBiscuit: 60,
            kitkat: 45
        }
    },
    methods: {
        // Method to calculate and return the data
        getData() {
            return (this.fruitCake*3 + this.nutsBiscuit*2 + this.kitkat)
        }
    },
    computed: {
        // Computed property for calculating the total
        // Computed properties are good for performance.
        // They first check cached result and will only compute if the result doesn't exist.
        getTotal(){
            return (this.fruitCake*3 + this.nutsBiscuit*2 + this.kitkat)
        }
    }
}
</script>

<!-- 
    NOTE: 
    1. should not make any API calls within the computed property 
    2. methods are called with parenthesis but computed are called without parenthesis.
-->
