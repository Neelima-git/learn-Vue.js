<template>
    <div>
        <h4>Child component</h4>
        <p v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'PropsComponent',
    props: ['fruits']
}
</script>