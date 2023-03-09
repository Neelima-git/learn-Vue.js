 <template>
    <div>
        <p>{{ name }}</p>
    </div>
 </template>

 <script>
 export default {
    name: 'mountComponent',
    data() {
        return{
            name: "neelu"
        }
    },
    beforeMount(){
        console.warn("before mount", this.$el);
    },
    mounted(){
        console.warn("mount", this.$el);
    }
 }
 </script>