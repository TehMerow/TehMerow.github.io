'use strict'


import Link_Button from "./link-button.js"

const social_card_template = `
    <div id="social-card" class="load-anim">
        <h3>{{title}}</h3>
        <p>{{body}}</p>
        <link-button :link="link" :text="link_text"></link-button>
        <img :src="icon" alt="social-icon"/>
    </div>
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