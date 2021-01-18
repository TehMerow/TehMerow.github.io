'use strict'

const social_icon_template = `
    <li id="social-icon">
        <a :href="href" target="_blank">
            <img :src="icon" alt=""/>    
        </a>
    
    </li>
`

export default {
    template: social_icon_template,
    props: {
        href : String,
        icon : String
    }
}