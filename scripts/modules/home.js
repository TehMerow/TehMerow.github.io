'use strict'
import {Content_Block} from './components/content_block.js'
import {social_links} from './misc/social_links.js'


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
        <ul id="social-links">
            <li v-for="item in social_links">
                <a v-bind:href="item.href">{{item.name}} - {{item.flavor}}</a>
            </li>
        </ul>



    </div>
</div>

`


export const Home = {
    template : home_template_string,

    components: {
        "content-block" : Content_Block
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