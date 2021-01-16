'use strict'
import {Home} from "./modules/home.js"
import {Sketchfab} from "./modules/sketchfab.js"
const routes = [
    {path : '/', component : Home},
    {path : '/sketchfab', component : Sketchfab},
    
]

const router = VueRouter.createRouter({
    history : VueRouter.createWebHashHistory(),
    routes
})


const app = Vue.createApp({
    data(){
        return {
            
        }
    }
})
app.use(router)

app.mount("#app")