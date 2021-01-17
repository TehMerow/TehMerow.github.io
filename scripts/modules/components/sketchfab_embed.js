'use strict'

const sketchfab_embed_template_string = `
    <div id="sf-embed" class="sketchfab-embed-wrapper">
        <template v-if="is_embed_active">
            <iframe :src="full_link" frameborder="0"></iframe>
        </template>
        <template v-else>
            <div id="sf-embed-placeholder" :style="{backgroundImage: bg_img}">
            
            <button @click="is_embed_active = true">
                <img src="assets/icons/play_circle_filled-24px.svg" alt=""/>
            </button></div>
        </template>
    </div>
`


export const Sketchfab_Embed = {
    props: {
        link_to_embed: String,
        link_to_bg: String
    },
    data(){
        return{
            is_embed_active : false,
            embed_end : "embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1",
            full_link : "",
            bg_img : ""

        }
    },
    mounted(){
        this.full_link = this.link_to_embed + this.embed_end
        this.bg_img = `url('${this.link_to_bg}')`
    },
    template: sketchfab_embed_template_string 
}