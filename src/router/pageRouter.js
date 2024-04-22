import { createRouter,createWebHistory } from "vue-router"
const routes = [
    {
        path:"/",
        component: ()=> import('../page/index/index.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router