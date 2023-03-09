<template>
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: 'beforeCreate',
    data() {
        return{
            name: "neelu"
        }
    },
    created(){
        this.name = "neelu"
        console.warn("created", this.name);
    },
    beforeCreate(){
        console.warn("before create", this.name);
    }
}
</script>