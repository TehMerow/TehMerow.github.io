'use strict'

import {social_links} from "./misc/social_links.js"
import {Sketchfab_Block} from "./components/sketchfab_block.js"
import {Link_Button} from "./components/link-button.js"
import {Sketchfab_Embed} from "./components/sketchfab_embed.js"

const sketchfab_template_string = `
<div id="sketchfab">
    <div id="block" class="load-anim">
        <h1>I've been doing 3D modeling since 2014 and in 2019 was confident enough to start posting them to
            sketchfab</h1>
    </div>

    <sf-block title="The Convienence Store" body="My most popular scene on sketchfab"
        link="https://sketchfab.com/3d-models/the-convenience-store-d81380e64c2c4b85b4cf58910f649312">
        <template v-slot:embed>
            <sf-embed link_to_embed="https://sketchfab.com/models/d81380e64c2c4b85b4cf58910f649312/" link_to_bg="assets/images/sketchfab_embed_images/cv_store.jpg"></sf-embed>
        </template>
    </sf-block>

    <sf-block title="Yamaha DX-7" body="One of my first models I ever uploaded to sketchfab" link="https://sketchfab.com/3d-models/yamaha-dx7-3f80009f37d644639b4a0459c86277df">
        <template v-slot:embed>
            <sf-embed link_to_embed="https://sketchfab.com/models/3f80009f37d644639b4a0459c86277df/" link_to_bg="assets/images/sketchfab_embed_images/yam_dx.png"></sf-embed>
        </template>
    </sf-block>

    <sf-block title="A Humble Broomstick" body="I did this one for Halloween and it's one of my favorites" link="https://sketchfab.com/3d-models/a-humble-broomstick-452d4b14ff90411a85a38122b1aa1ff9">
        <template v-slot:embed>
            <sf-embed link_to_embed="https://sketchfab.com/models/452d4b14ff90411a85a38122b1aa1ff9/" link_to_bg="assets/images/sketchfab_embed_images/broom.png"></sf-embed>
        </template>
    </sf-block>

    <sf-block title="Spooky Haunted House" body="Another one I did for Halloween, this one took awhile" link="https://sketchfab.com/3d-models/spooky-haunted-house-40152bcc300c4f7791def3fb244abd37">
        <template v-slot:embed>
            <sf-embed link_to_embed="https://sketchfab.com/models/40152bcc300c4f7791def3fb244abd37/" link_to_bg="assets/images/sketchfab_embed_images/h_house.png"></sf-embed>
        </template>
    </sf-block>

    <div id="view-all" class="load-anim">
        <h1>And Much more</h1>
        <link-button link="social_links[1].href" text="View All on Sketchfab"></link-button>

    </div>
</div>


`

export const Sketchfab  = {
    template: sketchfab_template_string,
    data(){
        return{
            social_links
        }
    },
    mounted(){
        document.title = "TehMerow - Sketchfab"
    },

    components: {
        "sf-block" : Sketchfab_Block,
        "link-button" : Link_Button,
        "sf-embed" : Sketchfab_Embed
    }
}