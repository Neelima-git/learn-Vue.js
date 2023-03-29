<template>
    <!-- A paragraph element that will only be displayed if `display` is true -->
    <p v-if="display">
        Show content
    </p>
    <!-- A button that toggles the `display` data property when clicked -->
    <div>
        <button v-on:click="toggle">Toggle</button>
    </div>
</template>

<script>
export default {
    // The name of the component
    name: 'destroyComponent',
    // The component's data properties
    data() {
        return{
            // A boolean value that determines whether the content is displayed
            display: true
        }
    },
    // The component's methods
    methods:{
        // A method that toggles the `display` data property
        toggle(){
            this.display =! this.display
        }
    },
    // A lifecycle hook that is called before the component is unmounted
    beforeUnmount() {
        alert("beforeUnmounted method called")
    },
    // A lifecycle hook that is called when the component is unmounted
    unmounted() {
        alert("unmounted method is called")
    }
}   
</script>
