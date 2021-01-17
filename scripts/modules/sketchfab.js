'use strict'

import {social_links} from "./misc/social_links.js"
import {Sketchfab_Block} from "./components/sketchfab_block.js"
import {Link_Button} from "./components/link-button.js"

const sketchfab_template_string = `
<div id="sketchfab">
    <div id="block" class="load-anim">
        <h1>I've been doing 3D modeling since 2014 and in 2019 was confident enough to start posting them to
            sketchfab</h1>
    </div>
    <sf-block title="The Convienence Store" body="My most popular scene on sketchfab"
        link="https://sketchfab.com/3d-models/the-convenience-store-d81380e64c2c4b85b4cf58910f649312">
        <template v-slot:embed>
            <div class="sketchfab-embed-wrapper">
                <iframe title="A 3D model"
                    src="https://sketchfab.com/models/d81380e64c2c4b85b4cf58910f649312/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
                <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                    <a href="https://sketchfab.com/3d-models/the-convenience-store-d81380e64c2c4b85b4cf58910f649312?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">The Convenience Store</a>
                    by <a
                        href="https://sketchfab.com/TehMerow?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Merow</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
                </p>
            </div>
        </template>
    </sf-block>

    <sf-block title="Yamaha DX-7" body="My First model on Sketchfab"
        link="https://sketchfab.com/3d-models/yamaha-dx7-3f80009f37d644639b4a0459c86277df">
        <template v-slot:embed>
            <div class="sketchfab-embed-wrapper">
                <iframe title="A 3D model" width="640" height="480"
                    src="https://sketchfab.com/models/3f80009f37d644639b4a0459c86277df/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
                <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                    <a href="https://sketchfab.com/3d-models/yamaha-dx7-3f80009f37d644639b4a0459c86277df?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Yamaha Dx7</a>
                    by <a
                        href="https://sketchfab.com/TehMerow?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Merow</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
                </p>
            </div>
        </template>
    </sf-block>

    <sf-block title="A Humble BroomStick" body="I did this one for halloween, and is one of my favorites"
        link="https://sketchfab.com/3d-models/a-humble-broomstick-452d4b14ff90411a85a38122b1aa1ff9">
        <template v-slot:embed>
            <div class="sketchfab-embed-wrapper">
                <iframe title="A 3D model" width="640" height="480"
                    src="https://sketchfab.com/models/452d4b14ff90411a85a38122b1aa1ff9/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
                <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                    <a href="https://sketchfab.com/3d-models/a-humble-broomstick-452d4b14ff90411a85a38122b1aa1ff9?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">A Humble Broomstick</a>
                    by <a
                        href="https://sketchfab.com/TehMerow?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Merow</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
                </p>
            </div>

        </template>
    </sf-block>

    <sf-block title="Spooky Haunted House" body="This is another one I did for halloween, took a lot of work"
        link="https://sketchfab.com/3d-models/spooky-haunted-house-40152bcc300c4f7791def3fb244abd37">
        <template v-slot:embed>
            <div class="sketchfab-embed-wrapper">
                <iframe title="A 3D model" width="640" height="480"
                    src="https://sketchfab.com/models/40152bcc300c4f7791def3fb244abd37/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
                <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                    <a href="https://sketchfab.com/3d-models/spooky-haunted-house-40152bcc300c4f7791def3fb244abd37?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Spooky Haunted House</a>
                    by <a
                        href="https://sketchfab.com/TehMerow?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Merow</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
                </p>
            </div>

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
        "link-button" : Link_Button
    }
}