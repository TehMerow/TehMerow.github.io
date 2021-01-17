'use strict'

const template_string = 
`
    <div id="sketchfab-block" class="embeds load-anim">
        <div id="text">
            <h1>{{title}}</h1>
            <h3>{{body}}</h3></div>
            <a :href="link">View on Sketchfab</a>
        <slot name="embed">content not loaded</slot>
    </div>
`


export const Sketchfab_Block = {
    props: {
        title: String,
        body: String,
        link: String
    },
    template: template_string,
}