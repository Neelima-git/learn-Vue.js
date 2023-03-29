<template>
    <!-- A div element that contains a paragraph element -->
    <div>
        <p>{{ name }}</p>
    </div>
 </template>

 <script>
 export default {
    // The name of the component
    name: 'mountComponent',
    // The component's data properties
    data() {
        return{
            // A string value that will be displayed in the paragraph element
            name: "neelu"
        }
    },
    // A lifecycle hook that is called before the component is mounted
    beforeMount(){
        console.warn("before mount", this.$el);
    },
    // A lifecycle hook that is called when the component is mounted
    mounted(){
        console.warn("mount", this.$el);
    }
 }
 </script>
