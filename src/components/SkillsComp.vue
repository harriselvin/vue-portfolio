<template>
    <div id="skills" data-aos="fade-right">
        <div class="skill-comp">
            <div class="skills-title">
                <h2>Skills</h2>
            </div>
            <div>
                <h4>Tech Skills</h4>
            </div>
            <div class="skill-sec">
                <div class="skills" v-for="techSkill in techSkills()" :key="techSkill">
                    <card-comp :techSkills="techSkill">
                        <template #techSkillSlot>
                            <div class="skill-items">
                                <a class="skill-link" :href="techSkill.link" rel="noreferrer" target="_blank">
                                    <img class="skill-img" :src="techSkill.image" alt={{techSkill.name}} width="40" loading="lazy" />
                                </a>
                            </div>
                            <div class="skill-name">
                                {{ techSkill.name }}
                            </div>
                        </template>
                    </card-comp>
                </div>
            </div>
            <div>
                <h4>Soft Skills</h4>
            </div>
            <div class="skill-sec">
                <div class="skills" v-for="softSkill in softSkills()" :key="softSkill">
                    <card-comp :softSkills="softSkill">
                        <template #softSkillSlot>
                            <div class="skill-items">
                                <img class="skill-img" :src="softSkill.image" alt={{softSkill.name}} width="40" loading="lazy" />
                            </div>
                            <div class="skill-name">
                                {{ softSkill.name }}
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
    components: {
        CardComp
    },
    methods: {
        techSkills() {
            return this.$store.state.techSkills
        },
        softSkills() {
            return this.$store.state.softSkills
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
        min-height: 100svh;
        overflow-x: hidden;
    }
    .skill-comp {
        padding-top: max(4em, 6em);
    }
    .skills-title h2 {
        text-transform: uppercase;
        margin: 0 0 1em;
    }
    .skills {
        border: 2px solid;
        width: 10em;
        min-width: 5em;
        margin: 2em auto;
        filter: grayscale(0);
    }
    .skill-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(10em, 100%), 1fr));
    }
    .skills * {
        width: 100%;
    }
    .skill-name {
        border-top: 1px solid;
    }
</style>