import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/routing/Home.vue";
import Profile from './components/routing/Profile.vue';
import Login from './components/routing/Login.vue'

const routes = [
    {
        name: "Home",
        path: '/',
        component: Home
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: Profile
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;