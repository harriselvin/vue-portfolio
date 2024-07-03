<template>
    <div id="skills" data-aos="fade-right">
        <div class="skill-comp">
            <div class="skills-title">
                <h2>Skills</h2>
            </div>
            <div>
                
            </div>
            <div class="skills" v-for="skill in skillsData()" :key="skill">
                <card-comp :skills="skill">
                    <template #skillSlot>
                        <div class="skill-items">
                            <a class="skill-link" :href="skill.link" rel="noreferrer" target="_blank">
                                <img class="skill-img" :src="skill.image" alt={{skill.name}} width="40" loading="lazy" />
                            </a>
                        </div>
                    </template>
                </card-comp>
            </div>
        </div>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    components: {
        CardComp
    },
    methods: {
        skillsData() {
            return this.$store.state.skills
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
<style>
    #skills {
        min-height: 100vh;
    }
    .skill-comp {
        padding-top: max(4em, 6em);
    }
    .skills-title h2 {
        text-transform: uppercase;
    }
    .skills {
        display: grid;
        grid-template-columns: auto-fit, minmax(min(5em, 3vw), 1fr);
        border: 1px solid;
        width: 80%;
        margin: 0 auto;
    }
    .skills * {
        width: 50%;
    }
</style>