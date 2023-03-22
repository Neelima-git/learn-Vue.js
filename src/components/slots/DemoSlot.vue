<template>
    <div>
        <h1>Slot demo</h1>
        <SlotDemo><h1>Able to see h1</h1></SlotDemo>
        <SlotDemo><h2>Able to see h2</h2></SlotDemo>
    </div>
</template>

<script>
import SlotDemo from './slot.vue'
export default {
    name: "SlotDemo",
    components: {
        SlotDemo
    }
}
</script>