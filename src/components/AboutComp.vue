<template>
    <div id="about" data-aos="zoom-out-left">
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
                            <div class="location">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <p>
                                    Lavender Hill, Cape Town, South Africa
                                </p>
                            </div>
                        </template>
                    </card-comp>
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
    .location {
        display: flex;
    }
    .location svg {
        color: #00abf0;
        height: 1.5em;
    }
</style>