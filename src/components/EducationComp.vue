<template>
    <div id="education" data-aos="fade-up"
    data-aos-duration="1000">
        <div class="edu-comp">
            <div class="edu-title">
                <h2>Education</h2>
            </div>
            <div class="edu-sec">
                <div class="edu" v-for="edu in educationData()" :key="edu">
                    <card-comp :education="edu">
                        <template #educationSlot>
                            <div class="edu-box">
                                <div class="edu-heading">
                                    {{ edu.institution }}
                                </div>
                                <div :style="{
                                    backgroundImage:`url(${edu.icon})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    height: '12em',
                                }"> 
                                <div class="edu-content">
                                    <div class="edu-desc">
                                        {{ edu.description }}
                                    </div>
                                    <div class="edu-year">
                                        <p>Year: {{ edu.year }}</p>
                                    </div>
                                    <div class="edu-contact">
                                        <p>Contact Person: {{ edu.contact[0].name }}</p>
                                        <p>Contact Details: {{ edu.contact[0].contactDetails }}</p>
                                    </div>
                                </div>
                                </div>
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
        educationData() {
            return this.$store.state.education
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
    #education {
        min-height: 100vh;
    }
    .edu-comp {
        padding-top: max(4em, 6em);
    }
    .edu-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(20em, 100%), 1fr));
    }
    .edu {
        margin: 1em auto
    }
    .edu-box {
        border: 2px solid;
        border-radius: 5px;
        height: 15em;
        width: 20em;
        overflow: hidden;
    }
    .edu-heading {
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #00abf0 !important;
        border-radius: 3px 3px 0 0;
    }
    .edu-content {
        backdrop-filter: blur(3px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        text-shadow: 2px 2px 5px #212529;
    }
    .edu-desc {
        height: 5em;
    }
    [data-bs-theme='light'] .edu-heading {
        background-color: black;
        color: white;
    }
    [data-bs-theme='dark'] .edu-heading {
        background-color: white;
        color: #dee2e6;
    }
</style>