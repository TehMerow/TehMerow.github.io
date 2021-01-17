'use strict'

import {social_links} from "./misc/social_links.js"
import {Sketchfab_Block} from "./components/sketchfab_block.js"


const yamaha_dx7_embed = `

`

export const Sketchfab  = {
    template: "#sketchfab-template",
    data(){
        return{
            social_links
        }
    },
    mounted(){
        document.title = "TehMerow - Sketchfab"
    },

    components: {
        "sf-block" : Sketchfab_Block
    }
}