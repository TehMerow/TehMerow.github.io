'use strict'
import {Home} from "./modules/home.js"
import {Sketchfab} from "./modules/sketchfab.js"
import {Itch} from "./modules/itch.js"
const routes = [
    {path : '/', component : Home},
    {path : '/sketchfab', component : Sketchfab},
    {path : '/itch', component : Itch},
    
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