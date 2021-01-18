
const link_button_template = `
    <a id="link-button" :href="link">{{text}}</a>
`

export default {
    props: {
        link : String,
        text : String
    },
    template: link_button_template
}