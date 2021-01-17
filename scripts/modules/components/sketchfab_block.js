'use strict'

const template_string = 
`
    <div id="sketchfab-block" class="embeds load-anim">
        <h3>{{title}}</h3>
        <p>{{body}}</p>
        <slot name="embed">content not loaded</slot>
    </div>
`


export const Sketchfab_Block = {
    props: {
        title: String,
        body: String,
    },
    template: template_string,
}