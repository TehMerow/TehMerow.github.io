'use strict'
import {Content_Block} from './components/content_block.js'
import social_links from './misc/social_links.js'
import Social_Card from "./components/social_card.js"


const home_template_string = `
<article id="home">
    <div id="banner-image" style="background-image: url('assets/images/itch_banner.png')"></div>
    <section id="block" class=" light">
        <h1>Hello There</h1>
        <p>I'm TehMerow, and I make all sorts of things online!</p>
        <p>You can also Call me Merow</p>
        </section>
        <div id="divider" class="divider-light" style="transform: scaleY(-1)">
            <svg  viewBox="0 0 328.46 50.649">
            <path d="m2.1094e-7 6.7017e-7s35.185 14.202 60.476 15.875c25.291 1.6726 57.976-12.514 88.859-11.132 30.883 1.3817 62.936 21.487 93.738 20.377 30.802-1.1103 85.388-25.119 85.388-25.119v50.649h-328.46z" stroke-linejoin="round"/>
            </svg>
        </div>
        <section id="block" class="home-socialdark">
        <h3>You can find me all over the place like</h3>
        <div id="social-links">
            
            <social-card 
                v-for="item in social_links"
                :title="item.name"
                :body="item.flavor"
                :link="item.href"
                :icon="item.icon"
                ></social-card>
        
            
        </section>



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