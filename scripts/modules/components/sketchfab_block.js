'use strict'

import Link_Button from "./../components/link-button.js"

const template_string = 
`
    <div id="sketchfab-block" class="embeds load-anim">
        <div id="text">
            <h1>{{title}}</h1>
            <h3>{{body}}</h3></div>
            <link-button :href="link" text="View on Sketchfab"></link-button>
        <slot name="embed">content not loaded</slot>
    </div>
`


export default {
    props: {
        title: String,
        body: String,
        link: String
    },
    template: template_string,
    components: {
        "link-button" : Link_Button
    }
}