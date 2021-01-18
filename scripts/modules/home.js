'use strict'
import {Content_Block} from './components/content_block.js'
import social_links from './misc/social_links.js'
import Social_Card from "./components/social_card.js"


const home_template_string = `
<div id="home">
    <div id="banner-image" style="background-image: url('assets/images/itch_banner.png')"></div>
    <div id="block" class="load-anim">
        <h1>Hello There</h1>
        <p>I'm TehMerow, and I make all sorts of things online!</p>
        <p>You can also Call me Merow</p>
    </div>
    <div id="block" class="home-social load-anim">
        <h3>You can find me all over the place like</h3>
        <div id="social-links">
            
            <social-card 
                v-for="item in social_links"
                :title="item.name"
                :body="item.flavor"
                :link="item.href"
                :icon="item.icon"
                ></social-card>
        
            
        </div>



    </div>
</div>

`
let heck = `

`

export const Home = {
    template : home_template_string,

    components: {
        "content-block" : Content_Block,
        "social-card" : Social_Card,
    },

    data(){
        return{
            social_links
        }
    },
    mounted(){
        document.title = "TehMerow - Home"
    }
    
}