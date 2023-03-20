<template>
    <div>
        <form @submit="postData" method="post">
            <input type="text" name="chocolate" id="chocolate" v-model="posts.chocolate"> <br>
            <input type="text" name="price" id="price" v-model="posts.price"> <br>
            <button type="submit">Submit</button> <br>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "PostComponent",
    data(){
        return {
            posts: {
                chocolate: null,
                price: null
            }
        }
    },
    methods: {
        postData(e){
            console.log(this.posts);
            axios.post("http://localhost:3000/posts", this.posts)
            .then((res) => {
                console.log(res);
            })
            e.preventDefault();
            
        }
    }
}
</script>