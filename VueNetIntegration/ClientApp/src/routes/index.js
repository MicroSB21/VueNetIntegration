import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../Pages/Home.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../Pages/About.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;