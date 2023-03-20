<template>
    <p v-if="display">
        Show content
    </p>
    <div>
        <button v-on:click="toggle">Toggle</button>
    </div>
</template>

<script>
export default {
    name: 'destroyComponent',
    data() {
        return{
            display: true
        }
    },
    methods:{
        toggle(){
            this.display =! this.display
        }
    },
    beforeUnmount() {
        alert("beforeUnmounted method called")
    },
    unmounted() {
        alert("unmounted method is called")
    }
}   
</script>