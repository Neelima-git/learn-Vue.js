<template>
    <h3 v-bind:style={color:headingColor}>Inside the child component</h3>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            headingColor: 'pink'
        }
    }
}
</script>