<template>
    <div id="about" data-aos="zoom-out-left">
        <div class="about-content">
            <div class="about-comp">
                <h2 class="about">About Me</h2>
                <div class="about-title">
                    <h2>Elvin Harris</h2>
                    <div class="about-info">
                        <card-comp :aboutMe="about">
                            <template #aboutSlot>
                                <div class="about-me">
                                    {{ aboutData() }}
                                </div>
                            </template>
                        </card-comp>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    data() {

    },
    components: {
        CardComp
    },
    methods: {
        aboutData() {
            return this.$store.state.aboutMe
        }
    },
    computed: {
        getItems() {
            return this.$store.dispatch('getItems')
        }
    },
    mounted() {
        return this.getItems
    }
}
</script> 
<style scoped>
    #about {
        min-height: 100vh;
        overflow-x: hidden;
    }
    .about-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .about-content > * {
        flex: 1;
    }
    .about-image {
        padding-top: max(4em, 6em);
        margin-left: max(1cqi, 5cqi);
    }
    .about-image img {
        width: clamp(5em, 100vw, 25em);
        border: .5em solid;
    }
    .about-comp {
        padding-top: max(4em, 6em);
        margin: 0 10cqi;
        text-align: left;
        font-size: min(1.3rem, 3vw);
    }
    .about-comp .about {
        text-transform: uppercase;
        padding: 0 0 1em;
    }
    .about-info .about-me {
        margin: 0 0 2em;
    }
    .about-title h2 {
        color: #00abf0;
        margin: 0 0 1em;
    }

    @media only screen and (max-width: 500px) {
        #about {
            min-height: 50svh;
            overflow-x: hidden;
        }
        .about-image {
            padding-top: max(4em, 6em);
            margin-left: 0;
        }
    }
</style>