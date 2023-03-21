<template>
    <h3>Computed property</h3>
    <h2>{{ getTotal }}</h2>
    <h2>{{ getData() }}</h2>
</template>

<script>
export default {
    name: "ComputedComponent",
    data(){
        return {
            fruitCake: 40,
            nutsBiscuit: 60,
            kitkat: 45
        }
    },
    methods: {
        getData() {
            return (this.fruitCake*3 + this.nutsBiscuit*2 + this.kitkat)
        }
    },
    //Computed properties are good for performance. They first check cached res and will only compute if the res doesn't exist.
    computed: {
        getTotal(){
            return (this.fruitCake*3 + this.nutsBiscuit*2 + this.kitkat)
        }
    }
}
</script>