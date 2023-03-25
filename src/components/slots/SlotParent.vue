<template>
    <div>
        <h1>Slot demo</h1>
        <SlotDemo></SlotDemo>
        <SlotDemo>
            <h1>Able to see h1</h1>
        </SlotDemo>
        <SlotDemo>
            <h2>Able to see h2</h2>
        </SlotDemo>
        <SlotDemo>
            <img src="https://cdn.pixabay.com/photo/2023/03/16/08/57/cormorant-7856235_960_720.jpg" alt="bird">
        </SlotDemo>
    </div>
</template>

<script>
import SlotDemo from './Slot.vue'
export default {
    name: "SlotParent",
    components: {
        SlotDemo
    }
}
</script>

<style>
img{
    width: 30rem;
    height: 20rem;
}
</style>