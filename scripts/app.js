'use strict'
import {Home} from "./modules/home.js"

const routes = [
    {path : '/', component : Home},
    
]

const router = VueRouter.createRouter({
    history : VueRouter.createWebHashHistory(),
    routes
})


const app = Vue.createApp({
    
})
app.use(router)

app.mount("#app")