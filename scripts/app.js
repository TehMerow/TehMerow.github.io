'use strict'
import {Home} from "./modules/home.js"
import {Sketchfab} from "./modules/sketchfab.js"
import {Itch} from "./modules/itch.js"

import social_links from "./modules/misc/social_links.js"
import social_icon from "./modules/components/social_icon.js"
import {social_glyphs} from "./modules/misc/social_links.js"

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
            social_links,
            social_glyphs
        }
    },
    mounted(){
        console.log(this.social_links[0].href)
    },
    components: {
        "social-icon" : social_icon
    }
})
app.use(router)

app.mount("#app")


// sticky header

const sticky_header = () => {
    if(scrollY > 100){
        document.querySelector('header').classList.add("sticky")
    }
    else{
        document.querySelector('header').classList.remove("sticky")
    }
}

const update = () => {
    requestAnimationFrame(update)

    sticky_header()
}

update();