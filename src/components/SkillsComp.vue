<template>
    <div id="skills" data-aos="fade-right">
        <div class="skill-comp">
            <div class="skills-title">
                <h2>Skills</h2>
            </div>
            <div>
                <h4>Tech Skills</h4>
            </div>
            <div class="skill-sec tech">
                <div class="tech-skills" v-for="techSkill in techSkills()" :key="techSkill">
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
            <div class="skill-sec soft">
                <div class="soft-skills" v-for="softSkill in softSkills()" :key="softSkill">
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
        margin: 0 10cqi;
    }
    .skills-title h2 {
        text-transform: uppercase;
        margin: 0 0 1em;
    }
    .tech-skills {
        border: 2px solid;
        width: 8em;
        min-width: 3em;
        margin: 2em auto;
        filter: grayscale(0);
    }
    .soft-skills {
        border: 2px solid;
        width: 11em;
        min-width: 5em;
        margin: 2em auto;
        filter: grayscale(0);
    }
    .tech {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(8em, 100%), 1fr));
    }
    .soft {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(12em, 100%), 1fr));
    }
    .tech-skills * {
        width: 100%;
    }
    .soft-skills * {
        width: 100%;
    }
    .skill-name {
        border-top: 1px solid;
    }

    @media only screen and (max-width: 500px) {
        .tech-skills {
            width: 5em;
        }
        .soft-skills {
            width: 5em;
        }
        .tech {
            grid-template-columns: repeat(auto-fit, minmax(min(6em, 100%), 1fr));
        }
        .soft {
            grid-template-columns: repeat(auto-fit, minmax(min(6em, 100%), 1fr));
        }
    }
</style>