import { createRouter, createWebHistory } from "vue-router";
import taskRouter from '../modules/Tasks/router'

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
    },
    {
        path: "/recipes",
        name: "recipes",
        component: () => import("../Pages/Recipes.vue"),
        children:[
            {
                path: "",
                name: "ListRecipes",
                component: () => import("../Pages/ListRecipes.vue")
            },
            {
                path: "/recipeDetail/:id",
                name: "recipeDetail",
                component: () => import("../Pages/RecipeDetail.vue")
            }
        ]
    },
    {
        path: "/tasks",
        ...taskRouter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;