'use strict'


import Link_Button from "./link-button.js"

const social_card_template = `
    <a id="social-card" :href="link" class="load-anim" >

    <img :src=icon></img> 

    <div class="text">
        <h1>{{title}}</h1>
    </div>
    </a>
`


export default {
    props: {
        title: String,
        body: String,
        link: String,
        icon: String,
    },
    template: social_card_template,
    data(){
        return{
            link_text : ''
        }
    },
    mounted(){
        this.link_text = `Find more at ${this.title}`
    },
    components: {
        "link-button" : Link_Button
    }
}