'use strict'
import {Content_Block} from './components/content_block.js'
import {social_links} from './misc/social_links.js'

export const Home = {
    template : '#home-template',

    components: {
        "content-block" : Content_Block
    },

    data(){
        return{
            social_links
        }
    }
    
}