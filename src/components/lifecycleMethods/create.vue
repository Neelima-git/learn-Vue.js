<template>
    <!-- Displaying the name property -->
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: 'beforeCreate',
    data() {
        return{
            // Initializing the name data property
            name: "neelu"
        }
    },
    created(){
        // Updating the name property in the created lifecycle hook
        this.name = "neelu"
        // Logging a warning message in the console
        console.warn("created", this.name);
    },
    beforeCreate(){
        // Executed before the component is created
        // Logging a warning message in the console
        console.warn("before create", this.name);
    }
}
</script>
