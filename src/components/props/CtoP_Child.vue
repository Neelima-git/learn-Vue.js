<template>
    <div>
        <button v-on:click="updateTitle">Update title</button>
    </div>
</template>
<script>
export default{
    name: 'CtoP_Child',
    methods:{
        updateTitle(){
            console.warn("Update title");
            this.$emit('changeTitle', 'Child to parent props passed')
        }
    }
}
</script>