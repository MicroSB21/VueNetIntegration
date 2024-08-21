export default {
    name: "tasks",
    component: () => import('../layout/TasksLayout.vue'),
    children: [
        {
            path: "",
            name: "Home",
            component: () => import("../views/Home.vue")
        }
    ]
}